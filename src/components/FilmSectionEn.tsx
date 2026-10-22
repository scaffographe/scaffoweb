import FilmCardEn from './FilmCardEn';

const FilmSectionEn = () => {
  const films = [
    {
      title: 'TO LOVE YOU',
      director: 'Written and directed by Timur Aslaev',
      year: 'TBA',
      duration: 'Short film',
      language: 'Fiction | Russian and English',
      location: 'Sorel-Tracy & Montreal',
      synopsis: 'In a Canadian industrial town enveloped by winter, Ariel, a 15-year-old Russian immigrant, copes with her anxiety as well as her mother\'s bipolar disorder. When she discovers an old woman who has died peacefully, Ariel is fascinated and sets out in search of a lightness she has never known.',
      poster: '/lovable-uploads/to-love-you-poster.jpg',
      festivals: [],
      isPostProduction: true,
      tba: true
    },
    {
      title: 'YANG YANG',
      director: 'Written and directed by Guillaume Chabot',
      realizedBy: 'Directed by Calvin Liu',
      year: 'TBA',
      duration: 'Feature film',
      language: 'Documentary | Mandarin',
      location: 'China & Montreal',
      synopsis: 'A grieving woman receives a series of correspondences from her deceased husband. As the tone of those messages shifts, she must decide whether to keep communicating with a ghost.',
      poster: '/lovable-uploads/ede7748b-fa53-4f13-8d20-e40a198b1bd6.png',
      festivals: [],
      hideHover: false,
      tba: true,
      isPostProduction: true,
      showCustomInfo: true
    },
    {
      title: 'POCKET CALL',
      director: 'Written and directed by Léandre Lambert Lefebvre',
      year: 'TBA',
      duration: '8 minutes',
      language: 'Fiction | Silent',
      location: 'Wentworth & Montreal',
      synopsis: 'Isolated in an old house, a man watches his daily life dissolve into that of a female presence slowly taking over his space. A prisoner in his own home, he must confront this strangely familiar ghost he has long kept at bay.',
      poster: '/lovable-uploads/pocket-call-poster.png',
      festivals: [],
      isDistribution: true,
      tba: true
    },
    {
      title: 'WITH THE WIND AND THE LEAVES',
      director: 'Directed by Timur Aslaev',
      year: 'TBA',
      duration: '24 minutes',
      language: 'Documentary | French',
      location: 'Beauce & Montreal',
      synopsis: "A mysterious force draws us to the top of a hill where an elderly woman lives, surrounded by her passions, her memories, and her solitude.",
      poster: '/lovable-uploads/avf-poster-new.png',
      isDistribution: true,
      tba: true
    },
    {
      title: 'THE CLEARING',
      director: 'Written and directed by Jacob Stefiuk',
      year: '2025',
      duration: '22 minutes',
      language: 'Fiction | English',
      location: 'Gaspésie & Montreal',
      synopsis: 'Following his wife’s sudden hospitalization and the subsequent return of his stepson, John is forced to confront his wife’s physical and mental decline, his own mortality, and his past failures as a father.',
      poster: '/lovable-uploads/the-clearing-poster.png',
      festivals: [
        'LES PERCÉIDES 2025 - Festival international de cinéma et d\'art de Percé - Prix du meilleur film gaspésien',
        'NEVADA CITY Film Festival 2025 - Prix coup de coeur du jury',
        'CSC 2025 - Canadian Society of Cinematographers (Student Cinematography) - Nominee',
        'CINEMA ON THE BAYOU Film Festival 2025'
      ],
      link: 'https://vimeo.com/1144318778?share=copy&fl=sv&fe=ci',
      isTrailer: true
    },
    {
      title: 'ANASTASIA',
      director: 'Written and directed by Timur Aslaev',
      year: '2024',
      duration: '29 minutes',
      language: 'Fiction | French and English',
      location: 'Beauce & Montreal',
      synopsis: 'After the tragic death of his mother, young Antoine tries to make sense of his grief within that of his family. Through a vase that was particularly dear to her, he finds traces of his mother.',
      poster: '/lovable-uploads/anastasia-poster-new.png',
      festivals: [
        'Sehsüchte Film Festival 2024 (Potsdam, Germany)',
        'Festifilm de la Beauce à Saint-Séverin 2024',
        'Festival Internacional de Cine de Lebu 2025',
        'Festival de Films Indépendants de Drummondville 2025'
      ],
      link: 'https://vimeo.com/924277903',
      isTrailer: true
    },
    {
      title: 'ICE SCREAM',
      director: 'Written and directed by Charlotte St-Louis & Antony Boudreau Savoie',
      year: '2023',
      duration: '11 minutes',
      language: 'Fiction | French',
      location: 'Laval & Montreal',
      synopsis: 'Jaded teenager Ophélie spends her time biking and working at the ice cream stand in a small, sleepy suburb. When a mysterious woman on a motorcycle arrives, her ordinary summer is upended.',
      poster: '/lovable-uploads/creme-molle-new.png',
      festivals: [
        'FANTASIA 2023 - Festival international de films Fantasia (Fantastiques week-end du cinéma québécois) - Prix de l\'ARRQ',
        'RVQC 2024 - Les Rendez-vous Québec Cinéma (Vagues déferlantes)',
        'CFF 2025 - Concordia Film Festival',
        'SSFF 2026 - Shawna Shea Film Festival'
      ],
      link: 'https://vimeo.com/838145495'
    },
    {
      title: 'SOMNUS',
      director: 'Written and directed by Hicham Chérif d\'Ouazzane',
      year: '2023',
      duration: '13 minutes',
      language: 'Fiction | French',
      location: 'Montreal',
      synopsis: 'Late at night, a screenwriter recalls an unpleasant encounter with the receptionist at the motel where he is staying. As this memory haunts him, his thoughts blur with the story he is writing.',
      poster: '/lovable-uploads/somnus-poster-new.jpg',
      festivals: [
        'REGARD 2023 - Festival international du court métrage au Saguenay (Tourner à tout prix)',
        'FANTASIA 2023 - Festival international de films Fantasia (Fantastiques week-end du cinéma québécois + Expérimentations celluloïdales) - Prix direction photo',
        'FILM SHORTAGE (online release)',
        'INDY FILM FEST 2023 - Indianapolis International Film Festival',
        'FIGARI MKT 2023 - Figari International Short Film Market',
        'RVQC 2024 - Les Rendez-vous Québec Cinéma (Tohu-bohu)',
        'NYCIndieFF 2024 - New York City Independent Film Festival',
        'SSFF 2026 - Shawna Shea Film Festival'
      ],
      link: 'https://filmshortage.com/dailyshortpicks/somnus/'
    },
    {
      title: 'LE RABOTEUR DE PARQUET',
      director: 'Directed by Samuel Ferland, written by Pascal Pelletier',
      year: '2020',
      duration: '4 minutes',
      language: 'Silent',
      location: 'Montreal',
      synopsis: 'A relationship develops between a worker and his employer.',
      poster: '/lovable-uploads/9f651040-938e-4ff2-8898-a0eb28f0147a.png',
      festivals: [
        'Action/Cut Short Film Competition 2023 - Meilleur film étranger',
        'Festival Fantazia 2023',
        'Gold Movie Awards Goddess NIKE 2023',
        'The Monkey Bread Tree Film Awards 2023'
      ],
      link: 'https://www.youtube.com/watch?v=Ny9l76dcBiA'
    }
  ];

  return (
    <div id="films" className="bg-dark-gray py-20">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-overpass font-bold text-5xl md:text-7xl mb-6 text-white text-center scroll-reveal">
          Our films
        </h2>
        
        <p className="font-poppins text-xl text-center text-gray-300 max-w-3xl mx-auto mb-16 scroll-reveal">
          Our catalog of independent short and feature films.
        </p>
        
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8">
          {films.map((film, index) => (
            <FilmCardEn key={index} {...film} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilmSectionEn;