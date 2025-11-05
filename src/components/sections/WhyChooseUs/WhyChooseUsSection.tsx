import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './styles.css';
import { fadeInUp, tagsVariants } from './animations.js';
import { BenefitCard } from './components/index.js';
import type { Benefit } from './types.js';

// Main Section Component
const WhyChooseUsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const benefits: Benefit[] = [
    {
      title: 'Real-Time Analytics',
      description: 'Stay ahead with accurate, real-time performance tracking',
      graphic: 'analytics',
    },
    {
      title: 'AI-Driven Growth',
      description: 'Make smarter moves with accurate, real-time business insights.',
      graphic: 'growth',
    },
    {
      title: 'Sync in real time',
      description: 'connect with your team instantly to track progress and updates',
      graphic: 'sync',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="why-choose-section relative py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          className="section-header text-center mb-12 sm:mb-16"
        >
          <div className="badge-pill inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-700">✨ BENEFITS</span>
          </div>
          <h2 className="gradient-heading mb-6">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partner with an AI agency delivering smart solutions.
          </p>
        </motion.div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              graphic={benefit.graphic}
            />
          ))}
        </div>

        {/* Bottom tabs/tags - Marquee */}
        <div className="marquee-container" style={{ marginTop: '4rem' }}>
          <motion.div
            initial={tagsVariants.initial}
            animate={isInView ? tagsVariants.animate : tagsVariants.initial}
            transition={tagsVariants.transition}
            className="marquee-content"
          >
            {[
              'AI Assistance',
              'Scalable Solutions',
              'Personalized Experiences',
              'Cost Effective',
              'Real-Time Insights',
              'AI Automation',
              'AI Assistance',
              'Scalable Solutions',
              'Personalized Experiences',
              'Cost Effective',
              'Real-Time Insights',
              'AI Automation',
            ].map((tag, index) => (
              <span
                key={index}
                className="tag-pill px-4 py-2 text-sm font-medium text-gray-700 rounded-full transition-colors cursor-default whitespace-nowrap"
              >
                <span className="mr-2">⚡</span>
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
