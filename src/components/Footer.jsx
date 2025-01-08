import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="py-8 text-center text-gray-400 text-sm">
      <div className="container-width">
        <p className="flex items-center justify-center gap-1">
          Made with <FaHeart className="text-red-500" /> by Your Name
        </p>
        <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer 