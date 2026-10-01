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

const FilmCardEn = ({
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
  
  const getLanguageForHover = () => {
    switch (title) {
      case 'YANG YANG':
        return 'French and Mandarin';
      case 'AVEC LE VENT ET LES FEUILLES':
        return 'French';
      case 'THE CLEARING':
        return 'English';
      case 'ANASTASIA':
        return 'French and English';
      case 'CRÈME MOLLE':
        return 'French';
      case 'SOMNUS':
        return 'French';
      default:
        return '';
    }
  };
  
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
              alt={`Film poster for ${title}`} 
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
                    {showCustomInfo && title === 'YANG YANG' ? (
                      <p className="font-poppins text-xs text-white mb-2 font-bold">{realizedBy}</p>
                    ) : (
                      <p className="font-poppins text-xs text-white mb-2 font-bold">{director}</p>
                    )}
                    <p className="text-white text-xs">{getLanguageForHover()} | {location}</p>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center flex-grow">
                    {title !== 'YANG YANG' && (
                      <p className="text-white text-sm text-center my-auto">
                        {synopsis}
                      </p>
                    )}
                  </div>
                  
                  {festivals && festivals.length > 0 && (
                    <div className="mt-4 text-left self-start">
                      <h4 className="text-white font-poppins font-bold text-xs mb-1">Official selections</h4>
                      <ul className="text-gray-300 text-xs space-y-1">
                        {festivals.map((festival, idx) => {
                          let parts = festival.split(' - Prix de l\'ARRQ');
                          if (parts.length > 1) {
                            return (
                              <li key={idx}>
                                {parts[0]} - <strong className="text-white">ARRQ Award</strong>
                              </li>
                            );
                          }
                          parts = festival.split(' - Prix direction photo');
                          if (parts.length > 1) {
                            return (
                              <li key={idx}>
                                {parts[0]} - <strong className="text-white">Cinematography Silver Award</strong>
                              </li>
                            );
                          }
                          parts = festival.split(' - Prix du meilleur film gaspésien');
                          if (parts.length > 1) {
                            return (
                              <li key={idx}>
                                {parts[0]} - <strong className="text-white">Best Gaspésie Short Award</strong>
                              </li>
                            );
                          }
                          parts = festival.split(' - Prix coup de coeur du jury');
                          if (parts.length > 1) {
                            return (
                              <li key={idx}>
                                {parts[0]} - <strong className="text-white">Heart of Gold Award</strong>
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

      <div className={`bg-wine p-2 ${(!link && !isPostProduction && !isDistribution) ? 'pb-4' : ''}`}>
        <h4 className="text-white font-overpass font-bold text-xl">{title}</h4>
        <p className="text-gray-300 text-xs">
          {tba ? 
            (title === 'YANG YANG' ? 'TBA | Feature film | Documentary' : 
             title === 'WITH THE WIND AND THE LEAVES' ? 'TBA | 24 minutes | Documentary' : 
             'TBA | Short film') : 
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
                  Upcoming screening
                </>
              ) : (
                <>
                  <Play className="mr-2" size={16} />
                  {isTrailer ? 'Watch trailer' : 'Watch film'}
                </>
              )}
            </a>
          ) : (
            <span className="inline-flex items-center justify-center bg-transparent text-white px-3 py-1 text-sm">
              {isPostProduction ? (
                <>
                  <Film className="mr-2" size={16} />
                  In post-production
                </>
              ) : isDistribution ? (
                <>
                  <Film className="mr-2" size={16} />
                  In distribution
                </>
              ) : ''}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default FilmCardEn;