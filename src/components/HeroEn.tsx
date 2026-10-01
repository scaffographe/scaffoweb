
import { useEffect } from 'react';

const HeroEn = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroTitle = document.querySelector('.hero-title');
      const heroText = document.querySelector('.hero-text');
      
      if (heroTitle && heroText) {
        (heroTitle as HTMLElement).style.transform = `translateY(${scrollY * 0.4}px)`;
        (heroText as HTMLElement).style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-dark-gray">
      <div 
        className="absolute inset-0 bg-wine z-10"
        style={{
          opacity: 0.7
        }}
      ></div>
      
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <iframe 
          className="absolute top-1/2 left-1/2 min-w-full min-h-full"
          src="https://player.vimeo.com/video/1085500510?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" 
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture" 
          style={{ 
            width: '100vw', 
            height: '56.25vw', // 16:9 aspect ratio
            minHeight: '100vh',
            minWidth: '177.78vh', // 16:9 aspect ratio
            transform: 'translate(-50%, -50%)',
            opacity: 0.8,
            objectFit: 'cover'
          }}
        ></iframe>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-20 text-center">
        <div className="hero-title flex justify-center mb-6 animate-fade-up">
          <img 
            src="/lovable-uploads/3c76c1ca-52da-4636-8aa1-23712cb95923.png" 
            alt="Scaffographe" 
            className="w-full max-w-xl mx-auto" 
          />
        </div>
        
        <p className="hero-text font-poppins text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-200 animate-fade-up" style={{animationDelay: '0.3s'}}>
          Framing instinct.
        </p>
        
        <div className="flex justify-center space-x-6 animate-fade-up" style={{animationDelay: '0.6s'}}>
          <a 
            href="#films" 
            className="bg-wine-light text-white font-poppins font-bold px-8 py-3 rounded-sm hover:bg-white hover:text-wine transition-colors duration-300"
          >
            OUR FILMS
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a href="#films" className="animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HeroEn;