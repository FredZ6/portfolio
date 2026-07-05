const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'object',
  '[tabindex]:not([tabindex="-1"])',
].join(', ')

export const lockPageScroll = (pageDocument) => {
  const { documentElement, body } = pageDocument
  const previousHtmlOverflow = documentElement.style.overflow
  const previousBodyOverflow = body.style.overflow

  documentElement.style.overflow = 'hidden'
  body.style.overflow = 'hidden'

  return () => {
    documentElement.style.overflow = previousHtmlOverflow
    body.style.overflow = previousBodyOverflow
  }
}

export const collectVisibleFocusableElements = (container) => {
  if (!container) return []

  return Array.from(container.querySelectorAll(focusableSelector)).filter((element) => {
    if (element.disabled || element.getAttribute?.('aria-hidden') === 'true') return false
    if (element.closest?.('[inert], [aria-hidden="true"]')) return false
    if (typeof element.getClientRects === 'function' && element.getClientRects().length === 0) return false

    const view = element.ownerDocument?.defaultView
    const styles = view?.getComputedStyle?.(element)
    return !styles || (styles.display !== 'none' && styles.visibility !== 'hidden')
  })
}

export const getFocusWrapTarget = (event, elements, activeElement) => {
  if (event.key !== 'Tab' || elements.length === 0) return null

  const firstElement = elements[0]
  const lastElement = elements[elements.length - 1]
  if (!elements.includes(activeElement)) return event.shiftKey ? lastElement : firstElement
  if (event.shiftKey && activeElement === firstElement) return lastElement
  if (!event.shiftKey && activeElement === lastElement) return firstElement
  return null
}
