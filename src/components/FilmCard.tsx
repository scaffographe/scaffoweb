import { useState } from 'react';
import { AspectRatio } from './ui/aspect-ratio';
import { Theater, Film, Play } from 'lucide-react';

interface FilmCardProps {
  title: string;
  director: string;
  realizedBy?: string;
  year: string;
  duration: string;
  language: string;
  location: string;
  synopsis: string;
  poster: string;
  festivals?: string[];
  link?: string;
  isTrailer?: boolean;
  isPostProduction?: boolean;
  isFestival?: boolean;
  isDistribution?: boolean;
  hideHover?: boolean;
  tba?: boolean;
  showCustomInfo?: boolean;
  index: number;
}

const FilmCard = ({
  title,
  director,
  realizedBy,
  year,
  duration,
  language,
  location,
  synopsis,
  poster,
  festivals,
  link,
  isTrailer = false,
  isPostProduction = false,
  isFestival = false,
  isDistribution = false,
  hideHover = false,
  tba = false,
  showCustomInfo = false,
  index
}: FilmCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  
  // Function to get the language text for the hover overlay
  const getLanguageForHover = () => {
    switch (title) {
      case 'YANG YANG':
        return 'Français et Mandarin';
      case 'AVEC LE VENT ET LES FEUILLES':
        return 'Français';
      case 'THE CLEARING':
        return 'Anglais';
      case 'ANASTASIA':
        return 'Français et Anglais';
      case 'CRÈME MOLLE':
        return 'Français';
      case 'SOMNUS':
        return 'Français';
      default:
        return '';
    }
  };
  
  // Function to get the genre text for the ribbon
  const getGenreForRibbon = () => {
    switch (title) {
      case 'THE CLEARING':
      case 'ANASTASIA':
      case 'CRÈME MOLLE':
      case 'SOMNUS':
        return ' | Fiction';
      default:
        return '';
    }
  };
  
  return (
    <div 
      className={`film-card relative overflow-hidden bg-black w-full md:max-w-[30%] opacity-0 scroll-reveal`}
      style={{
        animationDelay: `${index * 0.2}s`,
      }}
    >
      <div className="relative overflow-hidden">
        <AspectRatio ratio={2/3}>
          <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative h-full"
          >
            <img 
              src={poster} 
              alt={`Affiche du film ${title}`} 
              className="w-full h-full object-cover transition-transform duration-500 ease-out will-change-transform"
              style={{
                transform: isHovered && !hideHover ? 'scale(1.05)' : 'scale(1)',
                transformOrigin: 'center center'
              }}
            />
            
            {!hideHover && (
              <>
                <div 
                  className={`absolute inset-0 transition-opacity duration-500 ease-out will-change-opacity ${isHovered ? 'bg-wine opacity-90' : 'opacity-0'}`}
                ></div>
                
                <div 
                  className={`absolute inset-0 p-4 flex flex-col justify-between transition-opacity duration-500 ease-out will-change-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                >
                  <div className="mb-4">
                    {showCustomInfo && title === "YANG YANG" ? (
                      <p className="font-poppins text-xs text-white mb-2 font-bold">{realizedBy}</p>
                    ) : (
                      <p className="font-poppins text-xs text-white mb-2 font-bold">{director}</p>
                    )}
                    <p className="text-white text-xs">{getLanguageForHover()} | {location}</p>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center flex-grow">
                    {/* Suppression du synopsis pour Yang Yang, mais conservation pour les autres films */}
                    {title !== "YANG YANG" && (
                      <p className="text-white text-sm text-center my-auto">
                        {synopsis}
                      </p>
                    )}
                  </div>
                  
                  {festivals && festivals.length > 0 && (
                    <div className="mt-4 text-left self-start">
                      <h4 className="text-white font-poppins font-bold text-xs mb-1">Sélections officielles</h4>
                      <ul className="text-gray-300 text-xs space-y-1">
                        {festivals.map((festival, idx) => {
                          let parts = festival.split(' - Prix de l\'ARRQ');
                          if (parts.length > 1) {
                            return (
                              <li key={idx}>
                                {parts[0]} - <strong className="text-white">Prix de l'ARRQ</strong>
                              </li>
                            );
                          }
                          parts = festival.split(' - Prix direction photo');
                          if (parts.length > 1) {
                            return (
                              <li key={idx}>
                                {parts[0]} - <strong className="text-white">Prix direction photo - Argent</strong>
                              </li>
                            );
                          }
                          parts = festival.split(' - Prix du meilleur film gaspésien');
                          if (parts.length > 1) {
                            return (
                              <li key={idx}>
                                {parts[0]} - <strong className="text-white">Prix du meilleur court gaspésien</strong>
                              </li>
                            );
                          }
                          parts = festival.split(' - Prix coup de coeur du jury');
                          if (parts.length > 1) {
                            return (
                              <li key={idx}>
                                {parts[0]} - <strong className="text-white">Prix coup de coeur du jury</strong>
                              </li>
                            );
                          }
                          return <li key={idx}>{festival}</li>;
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </AspectRatio>
      </div>

      {/* Ribbon with film info - no space between poster and ribbon */}
      <div className={`bg-wine p-2 ${(!link && !isPostProduction && !isDistribution) ? 'pb-4' : ''}`}>
        <h4 className="text-white font-overpass font-bold text-xl">{title}</h4>
        <p className="text-gray-300 text-xs">
          {tba ? 
            (title === "YANG YANG" ? "TBA | Long métrage | Documentaire" : 
             title === "AVEC LE VENT ET LES FEUILLES" ? "TBA | 24 minutes | Documentaire" : 
             "TBA | Court métrage") : 
            `${year} | ${duration}${getGenreForRibbon()}`}
        </p>
      </div>
      
      {(link || isPostProduction || isDistribution || isFestival) && (
        <div 
          className={`p-2 text-center transition-colors duration-200 bg-black`}
          onMouseEnter={() => link && setIsButtonHovered(true)}
          onMouseLeave={() => link && setIsButtonHovered(false)}
          style={{
            backgroundColor: link && isButtonHovered ? '#8C1D18' : 'black'
          }}
        >
          {link ? (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-transparent text-white px-3 py-1 text-sm transition-colors"
            >
              {isFestival ? (
                <>
                  <Theater className="mr-2" size={16} />
                  Visionner en festival
                </>
              ) : (
                <>
                  <Play className="mr-2" size={16} />
                  {isTrailer ? "Visionner la bande-annonce" : "Visionner le film"}
                </>
              )}
            </a>
          ) : (
            <span className="inline-flex items-center justify-center bg-transparent text-white px-3 py-1 text-sm">
              {isPostProduction ? (
                <>
                  <Film className="mr-2" size={16} />
                  En postproduction
                </>
              ) : isDistribution ? (
                <>
                  <Film className="mr-2" size={16} />
                  En distribution
                </>
              ) : ""}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default FilmCard;
