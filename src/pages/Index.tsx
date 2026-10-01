
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FilmSection from '@/components/FilmSection';
import VisionSection from '@/components/VisionSection';
import Footer from '@/components/Footer';
import { Mail } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Intersection Observer pour les animations au défilement
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Ajouter un délai aux éléments enfants pour les faire apparaître progressivement
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
      <Hero />
      
      <FilmSection />
      <VisionSection />
      
      <div id="contact" className="py-24 bg-dark-gray relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center scroll-reveal">
            <h2 className="font-overpass font-bold text-4xl md:text-5xl mb-8 text-white">
              <span className="block">Suivez nos histoires,</span>
              <span className="block">ou proposez la votre.</span>
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
                COURRIEL
              </a>
            </div>
          </div>
        </div>
        
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: "url('/lovable-uploads/b8358d0c-f41f-4961-84a6-d236e946098f.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
