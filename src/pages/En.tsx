import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroEn from '@/components/HeroEn';
import FilmSectionEn from '@/components/FilmSectionEn';
import VisionSectionEn from '@/components/VisionSectionEn';
import FooterEn from '@/components/FooterEn';
import { Mail } from 'lucide-react';

const En = () => {
  useEffect(() => {
    // Page SEO
    document.title = 'Scaffographe — Independent Film Production';
    const metaDescName = 'description';
    let meta = document.querySelector(`meta[name="${metaDescName}"]`) as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = metaDescName;
      document.head.appendChild(meta);
    }
    meta.content = 'Independent film collective based in Montreal. Films, vision, and contact.';

    // Canonical for EN
    const existingCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const canonicalHref = `${window.location.origin}/en`;
    if (existingCanonical) {
      existingCanonical.href = canonicalHref;
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonicalHref;
      document.head.appendChild(link);
    }

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            const animatedChildren = entry.target.querySelectorAll('.scroll-reveal-child');
            animatedChildren.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('visible');
              }, index * 150);
            });
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    document.querySelectorAll('.scroll-reveal').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.scroll-reveal').forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="bg-dark-gray min-h-screen">
      <Navbar />
      <HeroEn />
      
      <FilmSectionEn />
      <VisionSectionEn />
      
      <div id="contact" className="py-24 bg-dark-gray relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center scroll-reveal">
            <h2 className="font-overpass font-bold text-4xl md:text-5xl mb-8 text-white">
              <span className="block">Follow our stories,</span>
              <span className="block">or pitch yours.</span>
            </h2>
            
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.instagram.com/scaffographe/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-wine-light text-white hover:bg-white hover:text-wine font-poppins font-bold px-8 py-3 rounded-sm transition-colors duration-300 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram mr-2">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                INSTAGRAM
              </a>
              
              <a 
                href="mailto:scaffographe@gmail.com"
                className="bg-wine-light text-white hover:bg-white hover:text-wine font-poppins font-bold px-8 py-3 rounded-sm transition-colors duration-300 flex items-center"
              >
                <Mail size={24} className="mr-2" />
                EMAIL
              </a>
            </div>
          </div>
        </div>
        
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: "url('/lovable-uploads/b8358d0c-f41f-4961-84a6-d236e946098f.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
      
      <FooterEn />
    </div>
  );
};

export default En;