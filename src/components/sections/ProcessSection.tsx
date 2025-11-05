import React from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import './ProcessSection.css'

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemFadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const itemSlideRight: Variants = {
  hidden: { opacity: 0, x: 70 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const ProcessSection: React.FC = () => {
  return (
    <section className="process-section" id="process">
      <div className="process-container">
        {/* Header */}
        <motion.div 
          className="process-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="process-badge">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="badge-icon">
              <path d="M240,56V200a8,8,0,0,1-8,8H8a8,8,0,0,1,0-16H56V152a8,8,0,0,1,8-8h48V104a8,8,0,0,1,8-8h48V56a8,8,0,0,1,8-8h56A8,8,0,0,1,240,56Z"></path>
            </svg>
            <span>PROCESS</span>
          </div>

          <h2 className="process-title">
            <span className="gradient-text">Simple & Scalable</span>
          </h2>

          <p className="process-description">
            A transparent process of collaboration and feedback
          </p>
        </motion.div>

        {/* Process Cards */}
        <motion.div 
          className="process-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Card 1 */}
          <motion.div variants={itemFadeUp} className="process-card">
            <div className="process-card-content">
              <div className="process-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55C12.27 10.45 11.46 9 10 9c-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 15.74 1 16.55 1 18c0 1.1.9 2 2 2 1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55C12.73 16.55 13.54 18 15 18c1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93 0-1.1-.9-2-2-2z"></path>
                  <path d="M15 9l.94-2.07L18 6l-2.06-.93L15 3l-.92 2.07L12 6l2.08.93zM3.5 11L4 9l2-.5L4 8l-.5-2L3 8l-2 .5L3 9z"></path>
                </svg>
              </div>

              <div className="process-text">
                <h3>Workflow Assessment</h3>
                <p>We begin by examining your existing workflows to identify where AI can deliver the greatest impact.</p>
              </div>

              <div className="process-number">
                <div className="separator-line"></div>
                <div className="number-wrapper">
                  <span className="number">01</span>
                  <div className="step-indicators">
                    <div className="step-dot active"></div>
                    <div className="step-dot"></div>
                    <div className="step-dot"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-image">
              <img src="https://framerusercontent.com/images/I11kmPYZO5IptYaE3LYgilI1Xk.jpeg?width=1200&height=800" alt="Workflow Assessment" />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemFadeUp} className="process-card">
            <div className="process-card-content">
              <div className="process-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                </svg>
              </div>

              <div className="process-text">
                <h3>Deploy with Confidence</h3>
                <p>Our team develops custom AI systems built around your goals, ensuring safe and reliable deployment.</p>
              </div>

              <div className="process-number">
                <div className="separator-line"></div>
                <div className="number-wrapper">
                  <span className="number">02</span>
                  <div className="step-indicators">
                    <div className="step-dot"></div>
                    <div className="step-dot active"></div>
                    <div className="step-dot"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-image">
              <img src="https://framerusercontent.com/images/ozpQ1n5ntn1iNwWiM7StpAZO2IM.jpeg?scale-down-to=1024" alt="Deploy with Confidence" />
            </div>
          </motion.div>

          {/* Card 3 - Slides from right */}
          <motion.div variants={itemSlideRight} className="process-card">
            <div className="process-card-content">
              <div className="process-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"></path>
                  <circle cx="9" cy="13" r="1"></circle>
                  <circle cx="15" cy="13" r="1"></circle>
                  <path d="M18 11.03C17.52 8.18 15.04 6 12.05 6c-3.03 0-6.29 2.51-6.03 6.45 2.47-1.01 4.33-3.21 4.86-5.89 1.31 2.63 4 4.44 7.12 4.47z"></path>
                </svg>
              </div>

              <div className="process-text">
                <h3>Ongoing Support & Optimization</h3>
                <p>After deployment, we provide support and refine your AI systems to keep them performing at their best.</p>
              </div>

              <div className="process-number">
                <div className="separator-line"></div>
                <div className="number-wrapper">
                  <span className="number">03</span>
                  <div className="step-indicators">
                    <div className="step-dot"></div>
                    <div className="step-dot"></div>
                    <div className="step-dot active"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-image">
              <img src="https://framerusercontent.com/images/rL2mn1WNvlJqhxa5RfsgWqkaxg.png?width=800&height=1015" alt="Ongoing Support" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessSection
