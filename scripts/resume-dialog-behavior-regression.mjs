import assert from 'node:assert/strict'
import {
  collectVisibleFocusableElements,
  getFocusWrapTarget,
  lockPageScroll,
} from '../src/utils/dialogAccessibility.js'

const fakePage = {
  documentElement: { style: { overflow: 'auto' } },
  body: { style: { overflow: 'scroll' } },
}
const restorePageScroll = lockPageScroll(fakePage)
assert.equal(fakePage.documentElement.style.overflow, 'hidden')
assert.equal(fakePage.body.style.overflow, 'hidden')
restorePageScroll()
assert.equal(fakePage.documentElement.style.overflow, 'auto')
assert.equal(fakePage.body.style.overflow, 'scroll')

const makeElement = ({ visible = true, ariaHidden = null, disabled = false } = {}) => ({
  disabled,
  getAttribute: (name) => (name === 'aria-hidden' ? ariaHidden : null),
  getClientRects: () => (visible ? [{ width: 100, height: 20 }] : []),
})

const visibleObject = makeElement()
const hiddenFallbackLink = makeElement({ visible: false })
const ariaHiddenButton = makeElement({ ariaHidden: 'true' })
const disabledButton = makeElement({ disabled: true })
let focusableSelector = ''
const fakeContainer = {
  querySelectorAll(selector) {
    focusableSelector = selector
    return [visibleObject, hiddenFallbackLink, ariaHiddenButton, disabledButton]
  },
}

assert.deepEqual(collectVisibleFocusableElements(fakeContainer), [visibleObject])
assert.match(focusableSelector, /object/)

const first = { id: 'first' }
const middle = { id: 'middle' }
const last = { id: 'last' }
const elements = [first, middle, last]
assert.equal(getFocusWrapTarget({ key: 'Tab', shiftKey: false }, elements, last), first)
assert.equal(getFocusWrapTarget({ key: 'Tab', shiftKey: true }, elements, first), last)
assert.equal(getFocusWrapTarget({ key: 'Tab', shiftKey: false }, elements, middle), null)
assert.equal(getFocusWrapTarget({ key: 'Escape', shiftKey: false }, elements, last), null)
