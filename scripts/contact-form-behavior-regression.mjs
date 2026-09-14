import { strict as assert } from 'node:assert'

const contactForm = await import('../src/utils/contactForm.js').catch(() => null)
assert(contactForm, 'Expected a reusable contact form behavior module.')

const {
  CONTACT_FORM_LIMITS,
  clearContactDraftIfUnchanged,
  createContactSubmissionController,
  createContactSubmissionGate,
  normalizeContactForm,
  validateContactForm,
} = contactForm

assert.equal(
  typeof createContactSubmissionController,
  'function',
  'Expected an executable contact submission controller.',
)
assert.equal(
  typeof clearContactDraftIfUnchanged,
  'function',
  'Expected a reusable safe-clear helper.',
)

const validDraft = {
  name: '  Fred  ',
  email: '  fred@example.com ',
  subject: '  Architecture review  ',
  message: '  Let us build this safely.  ',
}

const normalized = normalizeContactForm(validDraft)
assert.deepEqual(normalized, {
  name: 'Fred',
  email: 'fred@example.com',
  subject: 'Architecture review',
  message: 'Let us build this safely.',
})
assert.deepEqual(validDraft, {
  name: '  Fred  ',
  email: '  fred@example.com ',
  subject: '  Architecture review  ',
  message: '  Let us build this safely.  ',
}, 'Normalization must not mutate the user draft.')

const blankResult = validateContactForm({ name: ' ', email: '\t', subject: '', message: '\n' })
assert.equal(blankResult.isValid, false)
assert.deepEqual(Object.keys(blankResult.errors).sort(), ['email', 'message', 'name', 'subject'])

const invalidEmail = validateContactForm({ ...normalized, email: 'fred@invalid' })
assert.equal(invalidEmail.isValid, false)
assert.match(invalidEmail.errors.email, /valid email/i)

for (const [field, maxLength] of Object.entries(CONTACT_FORM_LIMITS)) {
  const tooLong = validateContactForm({ ...normalized, [field]: 'x'.repeat(maxLength + 1) })
  assert.equal(tooLong.isValid, false, `${field} must reject values over its maximum length.`)
  assert.match(tooLong.errors[field], new RegExp(`${maxLength}`))
}

assert.deepEqual(validateContactForm(validDraft), { isValid: true, data: normalized, errors: {} })

assert.deepEqual(
  clearContactDraftIfUnchanged(validDraft, validDraft),
  { name: '', email: '', subject: '', message: '' },
  'An unchanged draft should clear after a successful send.',
)
const newerDraft = { ...validDraft, message: 'A new message typed while the request was pending.' }
assert.strictEqual(
  clearContactDraftIfUnchanged(newerDraft, validDraft),
  newerDraft,
  'A newer draft must survive completion of an older request.',
)

const gate = createContactSubmissionGate()
let sendCalls = 0
let releaseSend
const slowSend = () => {
  sendCalls += 1
  return new Promise((resolve) => { releaseSend = resolve })
}
const firstSubmission = gate.run(slowSend)
const duplicateSubmission = gate.run(slowSend)
assert.strictEqual(duplicateSubmission, firstSubmission, 'Concurrent submissions must share one in-flight request.')
assert.equal(sendCalls, 1, 'Concurrent submissions must call send exactly once.')
releaseSend('sent')
assert.equal(await firstSubmission, 'sent')
assert.equal(gate.isPending(), false)

let retryCalls = 0
await assert.rejects(
  gate.run(async () => {
    retryCalls += 1
    throw new Error('network down')
  }),
  /network down/,
)
assert.equal(gate.isPending(), false, 'A rejected request must release the submission gate.')
assert.equal(await gate.run(async () => {
  retryCalls += 1
  return 'retried'
}), 'retried')
assert.equal(retryCalls, 2, 'A failed request must allow a later retry.')

const statusUpdates = []
const submittingUpdates = []
const successfulDrafts = []
const sentPayloads = []
let releaseControllerSend
const controller = createContactSubmissionController({
  send: (payload) => {
    sentPayloads.push(payload)
    return new Promise((resolve) => { releaseControllerSend = resolve })
  },
  onStatus: (status) => statusUpdates.push(status),
  onSubmittingChange: (isSubmitting) => submittingUpdates.push(isSubmitting),
  onSuccess: (draft) => successfulDrafts.push(draft),
})

const invalidSubmission = await controller.submit({ name: '', email: '', subject: '', message: '' })
assert.equal(invalidSubmission.ok, false)
assert.equal(invalidSubmission.reason, 'validation')
assert.equal(sentPayloads.length, 0, 'Invalid drafts must not reach the email service.')
assert.match(statusUpdates.at(-1).message, /required/i)

const submittedDraft = { ...validDraft }
const controllerSubmission = controller.submit(submittedDraft)
const duplicateControllerSubmission = controller.submit({
  ...validDraft,
  message: 'A duplicate that must not be sent.',
})
assert.strictEqual(
  duplicateControllerSubmission,
  controllerSubmission,
  'Concurrent controller submissions must share one in-flight request.',
)
assert.deepEqual(submittingUpdates, [true])
assert.deepEqual(statusUpdates.at(-1), { type: 'pending', message: 'Sending your message…' })
assert.deepEqual(sentPayloads, [normalized], 'The email service must receive normalized form values.')

releaseControllerSend('sent')
assert.deepEqual(await controllerSubmission, { ok: true })
assert.deepEqual(submittingUpdates, [true, false])
assert.deepEqual(statusUpdates.at(-1), {
  type: 'success',
  message: 'Message sent. I will be in touch soon.',
})
assert.deepEqual(successfulDrafts, [submittedDraft], 'Success must identify the submitted draft for safe clearing.')
assert.notStrictEqual(successfulDrafts[0], submittedDraft, 'The submitted draft snapshot must not share object identity.')

const failedStatuses = []
const failedSubmittingUpdates = []
let failedSendCalls = 0
const retryingController = createContactSubmissionController({
  send: () => {
    failedSendCalls += 1
    if (failedSendCalls === 1) throw new Error('service unavailable')
    return Promise.resolve()
  },
  onStatus: (status) => failedStatuses.push(status),
  onSubmittingChange: (isSubmitting) => failedSubmittingUpdates.push(isSubmitting),
})

const failedSubmission = await retryingController.submit(normalized)
assert.equal(failedSubmission.ok, false)
assert.equal(failedSubmission.reason, 'send')
assert.deepEqual(failedStatuses.at(-1), {
  type: 'error',
  message: 'Message could not be sent. Please email me directly.',
})
assert.deepEqual(failedSubmittingUpdates, [true, false])
assert.deepEqual(await retryingController.submit(normalized), { ok: true })
assert.equal(failedSendCalls, 2, 'A failed controller submission must release its retry gate.')

let active = true
let releaseUnmountedSend
const unmountedStatuses = []
const unmountedSubmittingUpdates = []
const unmountedController = createContactSubmissionController({
  send: () => new Promise((resolve) => { releaseUnmountedSend = resolve }),
  onStatus: (status) => unmountedStatuses.push(status),
  onSubmittingChange: (isSubmitting) => unmountedSubmittingUpdates.push(isSubmitting),
  isActive: () => active,
})
const unmountedSubmission = unmountedController.submit(normalized)
active = false
releaseUnmountedSend()
assert.deepEqual(await unmountedSubmission, { ok: true })
assert.deepEqual(unmountedStatuses, [{ type: 'pending', message: 'Sending your message…' }])
assert.deepEqual(unmountedSubmittingUpdates, [true], 'Completion after unmount must not write component state.')

console.log('Contact form validation and submission gate behavior checks passed.')
