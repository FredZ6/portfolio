import { strict as assert } from 'node:assert'

const contactForm = await import('../src/utils/contactForm.js').catch(() => null)
assert(contactForm, 'Expected a reusable contact form behavior module.')

const {
  CONTACT_FORM_LIMITS,
  createContactSubmissionGate,
  normalizeContactForm,
  validateContactForm,
} = contactForm

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

console.log('Contact form validation and submission gate behavior checks passed.')
