import FilmCard from './FilmCard';

const FilmSection = () => {
  const films = [
    {
      title: 'YANG YANG',
      director: 'Réalisé et écrit par Guillaume Chabot',
      realizedBy: 'Réalisé par Calvin Liu',
      year: 'TBA',
      duration: 'Long métrage',
      language: 'Documentaire | Français & Mandarin',
      location: 'Chine et Montréal',
      synopsis: 'Une femme en deuil reçoit une série de correspondances provenant de son mari décédé. À mesure que ces messages changent de ton, la femme doit décider si elle veut continuer à communiquer avec un fantôme.',
      poster: '/lovable-uploads/ede7748b-fa53-4f13-8d20-e40a198b1bd6.png',
      festivals: [],
      hideHover: false,
      tba: true,
      isPostProduction: true,
      showCustomInfo: true
    },
    {
      title: 'AVEC LE VENT ET LES FEUILLES',
      director: 'Réalisé par Timur Aslaev',
      year: 'TBA',
      duration: '24 minutes',
      language: 'Documentaire | Français',
      location: 'Beauce et Montréal',
      synopsis: 'Une force mystérieuse nous attire vers le sommet d\'une colline où une vieille dame demeure, entourée de ses passions, de ses souvenirs et de sa solitude.',
      poster: '/lovable-uploads/avf-poster-new.png',
      isDistribution: true,
      tba: true
    },
    {
      title: 'THE CLEARING',
      director: 'Réalisé et écrit par Jacob Stefiuk',
      year: '2025',
      duration: '22 minutes',
      language: 'Fiction | Anglais',
      location: 'Gaspésie & Montréal',
      synopsis: 'Suite à l\'hospitalisation soudaine de sa femme et au retour subséquent de son beau-fils, John est contraint de faire face à la détérioration physique et mentale de sa femme, à sa propre mortalité, et à ses erreurs passées en tant que père.',
      poster: '/lovable-uploads/the-clearing-poster.png',
      festivals: [
        'LES PERCÉIDES 2025 - Festival international de cinéma et d\'art de Percé - Prix du meilleur film gaspésien',
        'NEVADA CITY Film Festival 2025 - Prix coup de coeur du jury',
        'CSC 2025 - Canadian Society of Cinematographers (Student Cinematography) - Nominé',
        'CINEMA ON THE BAYOU Film Festival 2025'
      ],
      link: 'https://vimeo.com/1144318778?share=copy&fl=sv&fe=ci',
      isTrailer: true
    },
    {
      title: 'ANASTASIA',
      director: 'Réalisé et écrit par Timur Aslaev',
      year: '2024',
      duration: '29 minutes',
      language: 'Fiction | Français & Anglais',
      location: 'Beauce & Montréal',
      synopsis: 'Après la mort tragique de sa mère, le jeune Antoine tente de comprendre le sens de son deuil au sein de celui de sa famille. Par l\'intermédiaire d\'un vase qui lui était particulièrement cher, Antoine retrouve des vestiges de sa mère.',
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
      title: 'CRÈME MOLLE',
      director: 'Réalisé et écrit par Charlotte St-Louis & Antony Boudreau Savoie',
      year: '2023',
      duration: '11 minutes',
      language: 'Fiction | Français',
      location: 'Laval & Montréal',
      synopsis: 'Ophélie, adolescente blasée, tue le temps à faire du vélo et à travailler dans le bar laitier d\'une petite banlieue sans histoire. Lorsqu\'une mystérieuse femme en moto arrive en ville, son été banal se voit bousculé.',
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
      director: 'Réalisé et écrit par Hicham Chérif d\'Ouazzane',
      year: '2023',
      duration: '13 minutes',
      language: 'Fiction | Français',
      location: 'Montréal',
      synopsis: 'Tard la nuit, un scénariste se remémore une rencontre déplaisante avec la réceptionniste du motel dans lequel il séjourne. À mesure que ce souvenir le hante, ses pensées se confondent avec l\'histoire qu\'il est entrain d\'écrire.',
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
    }
  ];

  return (
    <div id="films" className="bg-dark-gray py-20">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-overpass font-bold text-5xl md:text-7xl mb-6 text-white text-center scroll-reveal">
          Nos films
        </h2>
        
        <p className="font-poppins text-xl text-center text-gray-300 max-w-3xl mx-auto mb-16 scroll-reveal">
          Notre catalogue de courts et longs métrages indépendants.
        </p>
        
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8">
          {films.map((film, index) => (
            <FilmCard key={index} {...film} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilmSection;
