import { motion } from 'framer-motion'
import { FaAws } from 'react-icons/fa'

const Certification = () => {
  return (
    <section className="section-padding pt-24 md:pt-20" id="certification">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading text-center">Certification</h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center glass-panel rounded-2xl p-6"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <FaAws className="text-[#FF9900] text-2xl" />
              <h3 className="text-xl font-bold">AWS Certification</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <a
                  href="https://www.credly.com/badges/f68690b3-1e68-46d8-ae56-366bd880c0e5/linked_in_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2"
                >
                  <img 
                    src="/portfolio/dvac02.png" 
                    alt="AWS Developer Associate" 
                    className="w-48 h-48 object-contain hover:scale-105 transition-transform"
                  />
                </a>
                <span className="text-slate-600">AWS Certified Developer Associate (DVA-C02)</span>
              </div>
              <div className="flex flex-col items-center">
                <a
                  href="https://www.credly.com/badges/ff21fdcd-97e7-42a1-9e15-ddf052af8c57/linked_in_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2"
                >
                  <img 
                    src="/portfolio/clf-c02.png" 
                    alt="AWS Cloud Practitioner" 
                    className="w-48 h-48 object-contain hover:scale-105 transition-transform"
                  />
                </a>
                <span className="text-slate-600">AWS Certified Cloud Practitioner (CLF-C02)</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certification 
