import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'

const Toast = ({ message, type = 'success', onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          role="status"
          aria-live="polite"
          className={`fixed bottom-4 right-4 flex items-center gap-3 rounded-lg px-6 py-3 text-white shadow-lg ${
            type === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          <span>{message}</span>
          {onClose && (
            <button
              type="button"
              aria-label="Dismiss notification"
              onClick={onClose}
              className="rounded-md px-2 py-1 text-xs font-medium text-white/90 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              Dismiss
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error']),
  onClose: PropTypes.func
}

Toast.defaultProps = {
  type: 'success'
}

export default Toast 
