import HeroSection from '../components/sections/HeroSection';
import FounderNote from '../components/sections/FounderNote';
import WhyChooseUsSection from '../components/sections/WhyChooseUs';
import FeatureGrid from '../components/sections/FeatureGrid';
import ProcessSection from '../components/sections/ProcessSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import content from '../data/content.json';

const Home = () => {
  // Convert JSON icon data to React elements for hero buttons
  const heroButtons = content.hero.ctaButtons.map(button => ({
    ...button,
    variant: button.variant as 'cta' | 'outline' | 'primary' | 'secondary' | 'ghost' | 'link',
    size: button.size as 'sm' | 'md' | 'lg',
    iconPosition: button.iconPosition as 'left' | 'right',
    icon: button.icon ? (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={button.icon.viewBox} className="w-4 h-4" fill="currentColor">
        <path d={button.icon.content}></path>
      </svg>
    ) : undefined
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        ctaButtons={heroButtons}
      />

      {/* Founder Note Section */}
      <FounderNote
        quote={content.founderNote.quote}
        founderName={content.founderNote.founderName}
        founderTitle={content.founderNote.founderTitle}
        founderImage={content.founderNote.founderImage}
      />

      {/* Why Choose Us Section */}
      <div id="features">
        <WhyChooseUsSection />
        {/* Animated benefits/features grid (pills shown above inside the component) */}
        <FeatureGrid />
      </div>

      {/* Process Section - 3-step workflow */}
      <ProcessSection />

      {/* Testimonials Section */}
      <TestimonialsSection
        title={content.testimonials.title}
        subtitle={content.testimonials.subtitle}
        testimonials={content.testimonials.testimonials}
      />
    </div>
  );
};

export default Home;
