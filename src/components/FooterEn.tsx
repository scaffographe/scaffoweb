
import { Instagram } from 'lucide-react';

const FooterEn = () => {
  return (
    <footer className="bg-wine py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/a97658a7-0ccc-4940-a2a3-11c945763ccd.png" 
                alt="Scaffographe Logo" 
                className="h-10"
              />
            </div>
            
            <p className="text-white/70 mb-4 max-w-md">
              Independent film production collective.
            </p>
            
            <div className="flex space-x-4 mb-8">
              <a 
                href="https://www.instagram.com/scaffographe/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/scaffographe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <img
                  src="/lovable-uploads/facebook-white.png"
                  alt="Facebook"
                  className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity"
                />
              </a>
              <a 
                href="https://vimeo.com/scaffographe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Letterboxd"
              >
                <img 
                  src="/lovable-uploads/18f369f1-f95f-4744-a0ad-d80b24e1275b.png" 
                  alt="Letterboxd" 
                  className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity"
                />
              </a>
              <a 
                href="https://letterboxd.com/studio/scaffographe/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Vimeo"
              >
                <img 
                  src="/lovable-uploads/4f5663dc-25c7-4e36-acd0-47600baa9479.png" 
                  alt="Vimeo" 
                  className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-poppins font-bold text-white text-lg mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/en" className="text-white/70 hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="#films" className="text-white/70 hover:text-white transition-colors">Films</a>
                </li>
                <li>
                  <a href="#vision" className="text-white/70 hover:text-white transition-colors">Vision</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-poppins font-bold text-white text-lg mb-4">Contact</h4>
              <p className="text-white/70">
                Montreal, Quebec<br />
                scaffographe@gmail.com<br />
                www.scaffographe.com
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white mt-12 pt-8 text-center">
          <p className="text-white text-sm">
            © {new Date().getFullYear()} Scaffographe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterEn;