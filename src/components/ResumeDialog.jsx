import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import {
  collectVisibleFocusableElements,
  getFocusWrapTarget,
  lockPageScroll,
} from '../utils/dialogAccessibility'

const resumePdfUrl = '/portfolio/resume/FredCV-2025%20codex.pdf'

const ResumeDialog = ({ isOpen, onClose }) => {
  const shouldReduceMotion = useReducedMotion()
  const closeButtonRef = useRef(null)
  const dialogRef = useRef(null)
  const previouslyFocusedElement = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined

    previouslyFocusedElement.current = document.activeElement
    const restorePageScroll = lockPageScroll(document)
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key === 'Tab') {
        const focusableElements = collectVisibleFocusableElements(dialogRef.current)
        const focusTarget = getFocusWrapTarget(event, focusableElements, document.activeElement)
        if (focusTarget) {
          event.preventDefault()
          focusTarget.focus()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      restorePageScroll()
      window.removeEventListener('keydown', handleKeyDown)
      previouslyFocusedElement.current?.focus()
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="resume-dialog-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          onClick={onClose}
        >
          <motion.section
            ref={dialogRef}
            className="resume-dialog-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-dialog-title"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: [0.16, 1, 0.3, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <header className="resume-dialog-header">
              <div>
                <span className="resume-dialog-index">Document / 01</span>
                <h2 id="resume-dialog-title">Fred Zhang — Résumé</h2>
              </div>
              <div className="resume-dialog-actions">
                <a
                  href={resumePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open résumé PDF in a new tab"
                >
                  <ExternalLink aria-hidden="true" size={18} />
                </a>
                <button ref={closeButtonRef} type="button" onClick={onClose} aria-label="Close résumé dialog">
                  <X aria-hidden="true" size={20} />
                </button>
              </div>
            </header>

            <div className="resume-dialog-document">
              <object data={resumePdfUrl} type="application/pdf" aria-label="Fred Zhang résumé PDF">
                <p>
                  Your browser cannot display this PDF.{' '}
                  <a href={resumePdfUrl} target="_blank" rel="noopener noreferrer">Open the résumé instead.</a>
                </p>
              </object>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

ResumeDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ResumeDialog
