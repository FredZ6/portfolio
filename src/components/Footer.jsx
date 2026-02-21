const Footer = () => {
  return (
    <footer className="py-8 text-center text-slate-500 text-sm">
      <div className="container-width">
        <p className="flex items-center justify-center gap-1">
          Designed & Built by 
          <img 
            src="/portfolio/portfolio.svg" 
            alt="Portfolio Logo" 
            className="w-4 h-4 text-primary"
          /> 
          Fred Zhang
        </p>
        <p className="mt-2">
          © {new Date().getFullYear()} Fred Zhang. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer 
