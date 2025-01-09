import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="py-8 text-center text-gray-400 text-sm">
      <div className="container-width">
        <p className="flex items-center justify-center gap-1">
          Designed & Built by <FaHeart className="text-red-500" /> Fred Zhang
        </p>
        <p className="mt-2">
          © {new Date().getFullYear()} Fred Zhang. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer 