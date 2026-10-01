
import { useEffect, useRef } from 'react';

const VisionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animation progressive des cartes de vision
            const cards = document.querySelectorAll('.vision-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible');
              }, index * 200);
            });
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    document.querySelectorAll('.vision-card').forEach((element) => {
      cardObserver.observe(element);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      document.querySelectorAll('.vision-card').forEach((element) => {
        cardObserver.unobserve(element);
      });
    };
  }, []);

  // Reorganized and updated vision array
  const founders = [
    {
      name: "Guillaume Chabot",
      title: "Producteur et réalisateur",
      vision: "Fasciné par la mémoire, la perception et l'identité, Guillaume est un réalisateur et producteur basé à Montréal, originaire de la Beauce. Il conçoit le cinéma comme un espace de jeu d'anticipation entre le récit et son spectateur. Son travail révèle des visions non conformistes et des territoires variés du paysage québécois.",
      image: "/lovable-uploads/bd06d642-9e21-4b4e-8afa-7bf5d6c77e24.png",
      instagram: "https://www.instagram.com/guillaume.chabot/"
    },
    {
      name: "Hicham Chérif d'Ouazzane",
      title: "Producteur et réalisateur",
      vision: "Passionné par le surréalisme, Hicham est un cinéaste d'origine marocaine qui puise son inspiration dans l'absurde et le sordide afin de défricher l'extraordinaire dans la banalité des vies endormies par la routine. Formé en architecture, il construit ses films avec un regard attentif sur les détails qui façonnent l'inattendu.",
      image: "/lovable-uploads/4c95448e-f9b6-47b1-bde4-4e133fb0074c.png",
      instagram: "https://www.instagram.com/hichamcherifdouazzane/"
    }
  ];
  
  const collaborators = [
    {
      name: "Samuel Ferland",
      title: "Réalisateur",
      vision: "Animé par la passion de raconter des histoires à travers l'image, Samuel est un réalisateur, concepteur et monteur basé à Montréal, travaillant aussi bien sur des campagnes publicitaires créatives que sur des courts métrages de fiction. Son approche créative et son souci du détail transforment chaque projet en une expérience unique.",
      image: "/lovable-uploads/92f2aafb-4d8e-43b6-9e05-bdd71b4b434b.png",
      instagram: "https://www.samuelferland.ca"
    },
    {
      name: "Timur Aslaev",
      title: "Réalisateur",
      vision: "Après avoir grandi en Sibérie occidentale, en Russie, Timur s'établit à Montréal en tant que réalisateur et scénariste. Formé en technologie, musique et cinéma, il questionne dans ses œuvres l'esprit collectif, la quête d'espoir et la mort, à travers une contemplation empathique de la condition humaine.",
      image: "/lovable-uploads/ebb77330-a52c-46f9-90e7-9858f8abb6d7.png",
      instagram: "https://www.instagram.com/timour.tchk/"
    },
    {
      name: "Bénédicte Laurent",
      title: "Graphiste",
      vision: "Graphiste et designer de formation, Bénédicte explore le dialogue entre esthétique et sens. Passionnée par la sémantique des formes, des couleurs et des signes, elle explore la justesse et la rupture. Née en France, elle s'est établie à Montréal en 2019, attirée par les territoires visuels où se rencontrent diversité et innovation.",
      image: "/lovable-uploads/f5a820f9-f819-4ba0-857e-53d6bfea11df.png",
      instagram: "https://www.instagram.com/benedictatrice/"
    }
  ];

  return (
    <div id="vision" className="bg-wine py-24" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16 scroll-reveal">
          <h2 className="font-overpass font-bold text-5xl md:text-6xl mb-8 text-white">
            Notre vision
          </h2>
          
          <p className="font-poppins text-xl md:text-2xl text-white/70 mb-6">
            Un cinéma sensible et poétique, qui questionne le réel par l'imaginaire.
          </p>
        </div>
        
        {/* Founders row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 max-w-4xl mx-auto">
          {founders.map((person, index) => (
            <a
              key={index}
              href={person.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="vision-card opacity-0 translate-y-10 bg-white/10 backdrop-blur-sm rounded-sm p-6 transform transition-all duration-300 hover:bg-white/20 hover:-translate-y-2 cursor-pointer block"
              style={{ 
                transform: "skew(-5deg)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="flex flex-col items-center" style={{ transform: "skew(5deg)" }}>
                <div className="w-full max-w-[200px] mb-4">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-auto"
                  />
                </div>
                
                <h3 className="font-overpass font-bold text-2xl text-white mb-1">{person.name}</h3>
                <p className="font-poppins text-sm text-white/70 mb-4 whitespace-pre-line text-center">
                  {person.title}
                </p>
                
                <blockquote className="italic text-white/70 text-sm text-center">
                  {person.vision}
                </blockquote>
              </div>
            </a>
          ))}
        </div>
        
        {/* Collaborators row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collaborators.map((person, index) => (
            <a
              key={index}
              href={person.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="vision-card opacity-0 translate-y-10 bg-white/10 backdrop-blur-sm rounded-sm p-6 transform transition-all duration-300 hover:bg-white/20 hover:-translate-y-2 cursor-pointer block"
              style={{ 
                transform: "skew(-5deg)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="flex flex-col items-center" style={{ transform: "skew(5deg)" }}>
                <div className="w-full max-w-[200px] mb-4">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-auto"
                  />
                </div>
                
                <h3 className="font-overpass font-bold text-2xl text-white mb-1">{person.name}</h3>
                <p className="font-poppins text-sm text-white/70 mb-4">{person.title}</p>
                
                <blockquote className="italic text-white/70 text-sm text-center">
                  {person.vision}
                </blockquote>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
