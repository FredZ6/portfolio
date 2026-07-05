import PropTypes from 'prop-types'
import { ArrowUpRight, FileText, Github, Linkedin, Mail } from 'lucide-react'

const Footer = ({ onOpenResume }) => {
  return (
    <footer className="contact-footer" id="contact" aria-labelledby="contact-footer-title">
      <div className="contact-footer-inner">
        <div className="contact-footer-topline">
          <span>Have a system to build?</span>
          <span>Winnipeg · Available worldwide</span>
        </div>

        <h2 className="contact-footer-title" id="contact-footer-title">LET&apos;S BUILD</h2>

        <a className="contact-footer-email" href="mailto:fredzhang026@gmail.com">
          <Mail aria-hidden="true" />
          <span>fredzhang026@gmail.com</span>
          <ArrowUpRight aria-hidden="true" />
        </a>

        <nav className="contact-footer-links" aria-label="Contact and profile links">
          <a href="https://github.com/FredZ6" target="_blank" rel="noopener noreferrer">
            <Github aria-hidden="true" /> GitHub <ArrowUpRight aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/haifeng-zhang26/" target="_blank" rel="noopener noreferrer">
            <Linkedin aria-hidden="true" /> LinkedIn <ArrowUpRight aria-hidden="true" />
          </a>
          <button type="button" onClick={onOpenResume}>
            <FileText aria-hidden="true" /> Resume <ArrowUpRight aria-hidden="true" />
          </button>
        </nav>

        <div className="contact-footer-signoff">
          <span className="contact-footer-bird" aria-hidden="true" />
          <p>Designed &amp; built by Fred Zhang</p>
          <p>© {new Date().getFullYear()} · Made with deliberate care</p>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  onOpenResume: PropTypes.func.isRequired,
}

export default Footer
