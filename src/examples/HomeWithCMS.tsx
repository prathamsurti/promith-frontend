// Example: How to integrate CMS with existing components
// This shows how to migrate from static data to dynamic CMS data

import { useHero, useTestimonials } from '../hooks/useContent';
import HeroSection from '../components/sections/HeroSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUs';
import FeatureGrid from '../components/sections/FeatureGrid';
import ProcessSection from '../components/sections/ProcessSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';

// Loading and Error components (you can create these)
const LoadingSpinner = () => <div className="flex justify-center p-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>;
const ErrorMessage = ({ error }: { error: Error }) => <div className="text-red-500 p-4">Error: {error.message}</div>;

// Example: Dynamic Hero Section
const DynamicHeroSection = () => {
  const { data: heroData, isLoading, error } = useHero();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error as Error} />;

  return (
    <HeroSection
      title={heroData?.title || 'Promith'}
      subtitle={heroData?.subtitle || 'AI-powered automation solutions...'}
      ctaButtons={heroData?.ctaButtons || []}
    />
  );
};

// Example: Dynamic Testimonials Section
const DynamicTestimonialsSection = () => {
  const { data: testimonials, isLoading, error } = useTestimonials();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error as Error} />;

  return (
    <TestimonialsSection
      title="Loved by Teams Worldwide"
      subtitle="See what our customers have to say"
      testimonials={testimonials || []}
    />
  );
};

// Example: Updated Home component with CMS integration
const HomeWithCMS = () => {
  return (
    <div className="min-h-screen">
      {/* Dynamic sections using CMS */}
      <DynamicHeroSection />

      {/* Why Choose Us Section */}
      <div id="features">
        <WhyChooseUsSection />
        <FeatureGrid />
      </div>

      {/* Process Section */}
      <ProcessSection />

      {/* Dynamic testimonials */}
      <DynamicTestimonialsSection />
    </div>
  );
};

export default HomeWithCMS;