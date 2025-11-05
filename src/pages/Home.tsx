import HeroSection from '../components/sections/HeroSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUs';
import FeatureGrid from '../components/sections/FeatureGrid';
import ProcessSection from '../components/sections/ProcessSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';

const Home = () => {
  // Hero CTA buttons
  const heroButtons = [
    { 
      label: 'Get Demo', 
      href: '/contact', 
      variant: 'cta' as const,
      size: 'lg' as const,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-4 h-4" fill="currentColor">
          <path d="M200,64V168a8,8,0,0,1-13.66,5.66L140,127.31,69.66,197.66a8,8,0,0,1-11.32-11.32L128.69,116,82.34,69.66A8,8,0,0,1,88,56H192A8,8,0,0,1,200,64Z"></path>
        </svg>
      ),
      iconPosition: 'right' as const
    },
    { label: 'Get Started', href: '/#features', variant: 'outline' as const, size: 'lg' as const },
  ];



  // Testimonials data
  const testimonials = [
    {
      quote: 'Orbai has transformed our workflow completely. We\'ve saved over 20 hours per week on repetitive tasks.',
      author: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=000000&color=fff',
      rating: 5,
    },
    {
      quote: 'The AI automation is incredibly smart. It learns our patterns and suggests improvements we hadn\'t even considered.',
      author: 'Michael Chen',
      role: 'Operations Manager',
      company: 'Global Solutions',
      avatar: 'https://ui-avatars.com/api/?name=Michael+Chen&background=000000&color=fff',
      rating: 5,
    },
    {
      quote: 'Best investment we\'ve made this year. The ROI was evident within the first month.',
      author: 'Emily Rodriguez',
      role: 'Product Lead',
      company: 'Innovation Labs',
      avatar: 'https://ui-avatars.com/api/?name=Emily+Rodriguez&background=000000&color=fff',
      rating: 5,
    },
  ];



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Promith"
        subtitle="AI-powered automation solutions for modern businesses. Transform your workflow with intelligent automation."
        ctaButtons={heroButtons}
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
        title="Loved by Teams Worldwide"
        subtitle="See what our customers have to say about their experience"
        testimonials={testimonials}
      />
    </div>
  );
};

export default Home;
