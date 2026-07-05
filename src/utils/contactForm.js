export const CONTACT_FORM_LIMITS = Object.freeze({
  name: 120,
  email: 254,
  subject: 180,
  message: 5000,
})

const fields = Object.keys(CONTACT_FORM_LIMITS)
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const normalizeContactForm = (draft = {}) => Object.fromEntries(
  fields.map((field) => [field, typeof draft[field] === 'string' ? draft[field].trim() : '']),
)

export const validateContactForm = (draft) => {
  const data = normalizeContactForm(draft)
  const errors = {}

  for (const field of fields) {
    if (!data[field]) {
      errors[field] = `${field[0].toUpperCase()}${field.slice(1)} is required.`
    } else if (data[field].length > CONTACT_FORM_LIMITS[field]) {
      errors[field] = `${field[0].toUpperCase()}${field.slice(1)} must be ${CONTACT_FORM_LIMITS[field]} characters or fewer.`
    }
  }

  if (data.email && data.email.length <= CONTACT_FORM_LIMITS.email && !emailPattern.test(data.email)) {
    errors.email = 'Enter a valid email address.'
  }

  return { isValid: Object.keys(errors).length === 0, data, errors }
}

export const createContactSubmissionGate = () => {
  let pendingPromise = null

  return {
    isPending: () => pendingPromise !== null,
    run(task) {
      if (pendingPromise) return pendingPromise

      try {
        pendingPromise = Promise.resolve(task()).finally(() => {
          pendingPromise = null
        })
      } catch (error) {
        pendingPromise = Promise.reject(error).finally(() => {
          pendingPromise = null
        })
      }

      return pendingPromise
    },
  }
}
