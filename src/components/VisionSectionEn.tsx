import { useEffect, useRef } from 'react';

const VisionSectionEn = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
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

  const founders = [
    {
      name: 'Guillaume Chabot',
      title: 'Producer and director',
      vision: "Fascinated by memory, perception and identity, Guillaume is a Montreal-based director and producer from Beauce. He conceives cinema as a space of anticipatory play between the story and its spectator. His work reveals nonconformist visions and the varied territories of the Quebec landscape.",
      image: '/lovable-uploads/bd06d642-9e21-4b4e-8afa-7bf5d6c77e24.png',
      instagram: 'https://www.instagram.com/guillaume.chabot/'
    },
    {
      name: "Hicham Chérif d'Ouazzane",
      title: 'Producer and director',
      vision: "Passionate about surrealism, Hicham is a Moroccan-born filmmaker who draws inspiration from the absurd and the sordid to unearth the extraordinary in the banality of lives lulled by routine. Trained in architecture, he builds his films with a keen eye for the details that shape the unexpected.",
      image: '/lovable-uploads/4c95448e-f9b6-47b1-bde4-4e133fb0074c.png',
      instagram: 'https://www.instagram.com/hichamcherifdouazzane/'
    }
  ];
  
  const collaborators = [
    {
      name: 'Samuel Ferland',
      title: 'Director',
      vision: "Driven by a passion for storytelling through images, Samuel is a Montreal-based director, designer, and editor, working on both creative advertising campaigns and short fiction films. His creative approach and attention to detail turn each project into a unique experience.",
      image: '/lovable-uploads/92f2aafb-4d8e-43b6-9e05-bdd71b4b434b.png',
      instagram: 'https://www.samuelferland.ca'
    },
    {
      name: 'Timur Aslaev',
      title: 'Director',
      vision: "After growing up in Western Siberia, Russia, Timur settled in Montreal as a director and screenwriter. Trained in technology, music and film, his work examines the collective mind, the search for hope and death through an empathetic contemplation of the human condition.",
      image: '/lovable-uploads/ebb77330-a52c-46f9-90e7-9858f8abb6d7.png',
      instagram: 'https://www.instagram.com/timour.tchk/'
    },
    {
      name: 'Bénédicte Laurent',
      title: 'Graphic designer',
      vision: "A trained graphic designer, Bénédicte explores the dialogue between aesthetics and meaning. She is passionate about the semantics of forms, colors and signs. Born in France, she settled in Montreal in 2019, drawn by visual territories where diversity and innovation meet.",
      image: '/lovable-uploads/f5a820f9-f819-4ba0-857e-53d6bfea11df.png',
      instagram: 'https://www.instagram.com/benedictatrice/'
    }
  ];

  return (
    <div id="vision" className="bg-wine py-24" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16 scroll-reveal">
          <h2 className="font-overpass font-bold text-5xl md:text-6xl mb-8 text-white">
            Our vision
          </h2>
          
          <p className="font-poppins text-xl md:text-2xl text-white/70 mb-6">
            A sensitive and poetic cinema that questions reality through imagination.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 max-w-4xl mx-auto">
          {founders.map((person, index) => (
            <a
              key={index}
              href={person.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="vision-card opacity-0 translate-y-10 bg-white/10 backdrop-blur-sm rounded-sm p-6 transform transition-all duration-300 hover:bg-white/20 hover:-translate-y-2 cursor-pointer block"
              style={{ 
                transform: 'skew(-5deg)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="flex flex-col items-center" style={{ transform: 'skew(5deg)' }}>
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collaborators.map((person, index) => (
            <a
              key={index}
              href={person.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="vision-card opacity-0 translate-y-10 bg-white/10 backdrop-blur-sm rounded-sm p-6 transform transition-all duration-300 hover:bg-white/20 hover:-translate-y-2 cursor-pointer block"
              style={{ 
                transform: 'skew(-5deg)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="flex flex-col items-center" style={{ transform: 'skew(5deg)' }}>
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

export default VisionSectionEn;