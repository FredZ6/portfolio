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

const makeElement = ({ visible = true, ariaHidden = null, disabled = false, tabIndex = null } = {}) => ({
  disabled,
  getAttribute: (name) => {
    if (name === 'aria-hidden') return ariaHidden
    if (name === 'tabindex') return tabIndex
    return null
  },
  getClientRects: () => (visible ? [{ width: 100, height: 20 }] : []),
})

const visibleObjectPreview = makeElement({ tabIndex: '-1' })
const visibleExternalLink = makeElement()
const visibleCloseButton = makeElement()
const hiddenFallbackLink = makeElement({ visible: false })
const ariaHiddenButton = makeElement({ ariaHidden: 'true' })
const disabledButton = makeElement({ disabled: true })
let focusableSelector = ''
const fakeContainer = {
  querySelectorAll(selector) {
    focusableSelector = selector
    return [
      visibleObjectPreview,
      visibleExternalLink,
      visibleCloseButton,
      hiddenFallbackLink,
      ariaHiddenButton,
      disabledButton,
    ]
  },
}

const visibleFocusableElements = collectVisibleFocusableElements(fakeContainer)
assert.deepEqual(visibleFocusableElements, [visibleExternalLink, visibleCloseButton])
assert.match(focusableSelector, /object/)

assert.equal(
  getFocusWrapTarget({ key: 'Tab', shiftKey: false }, visibleFocusableElements, visibleCloseButton),
  visibleExternalLink,
)
assert.equal(
  getFocusWrapTarget({ key: 'Tab', shiftKey: true }, visibleFocusableElements, visibleExternalLink),
  visibleCloseButton,
)
assert.equal(
  getFocusWrapTarget({ key: 'Escape', shiftKey: false }, visibleFocusableElements, visibleCloseButton),
  null,
)
