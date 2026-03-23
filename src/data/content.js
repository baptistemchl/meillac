// ============================================================
// CONTENT DATA — Mairie de Meillac
// Source: meillac.fr (données publiques de la commune)
// ============================================================

export const COMMUNE_STATS = [
  { value: 1543, label: 'Habitants',     suffix: '',   icon: '👥' },
  { value: 27,   label: 'km² de surface', suffix: '',  icon: '🗺️' },
  { value: 40,   label: 'Associations',  suffix: '+',  icon: '🤝' },
  { value: 25,   label: 'Professionnels', suffix: '+', icon: '🏪' },
]

export const ELUS = [
  {
    name: 'Georges DUMAS',
    role: 'Maire',
    photo: 'https://meillac.fr/wp-content/uploads/2020/07/Dumas-Georges.jpg',
    commissions: ['Vice-président Communauté de Communes Bretagne Romantique', 'Président de la chaufferie biomasse à Combourg', 'Vice-président du Smictom-Valcobreizh', 'Président du CCAS'],
    color: 'forest',
  },
  {
    name: 'Sarah LEGAULT-DENISOT',
    role: '1ère Adjointe',
    photo: 'https://meillac.fr/wp-content/uploads/2020/07/Denisot-Legault-Sarah.jpg',
    commissions: ['Conseillère communautaire Bretagne Romantique', 'Jeunesse, culture, école', 'Communication et ressources humaines'],
    color: 'emerald',
  },
  {
    name: 'Bruno RAMBERT',
    role: '2ème Adjoint',
    photo: 'https://meillac.fr/wp-content/uploads/2020/07/Rambert-Bruno.jpg',
    commissions: ['Urbanisme & environnement', 'Accessibilité', 'Marchés publics & achats divers'],
    color: 'teal',
  },
  {
    name: 'Maryline SAMSON',
    role: '3ème Adjointe',
    photo: 'https://meillac.fr/wp-content/uploads/2020/07/Samson-Maryline.jpg',
    commissions: ['Entretien & fonctionnement bâtiments communaux', 'Voirie municipale', 'Assainissement collectif'],
    color: 'green',
  },
  {
    name: 'Yves AFCHAIN',
    role: '4ème Adjoint',
    photo: 'https://meillac.fr/wp-content/uploads/2020/07/Afchain-Yves.jpg',
    commissions: ['Finances', 'Achats divers'],
    color: 'forest',
  },
  {
    name: 'Jacqueline REDOUTÉ',
    role: '5ème Adjointe',
    photo: 'https://meillac.fr/wp-content/uploads/2020/07/Redouté-Jacqueline.jpg',
    commissions: ['Périscolaire', 'Action sociale'],
    color: 'emerald',
  },
]

export const COMMISSIONS = [
  {
    name: 'Urbanisme & Environnement',
    president: 'Bruno RAMBERT',
    description: 'Gestion des permis de construire, plans d\'urbanisme, accessibilité des bâtiments publics, marchés publics.',
    membres: ['Bruno Rambert', 'Maryline Samson', 'Yves Afchain', 'Jacqueline Redouté', '3 conseillers'],
  },
  {
    name: 'Jeunesse, Culture & École',
    president: 'Sarah LEGAULT-DENISOT',
    description: 'Suivi de la vie scolaire, restaurant scolaire, activités jeunesse, médiathèque et événements culturels.',
    membres: ['Sarah Legault-Denisot', 'Jacqueline Redouté', '4 conseillers'],
  },
  {
    name: 'Finances',
    president: 'Yves AFCHAIN',
    description: 'Élaboration et suivi du budget communal, contrôle des dépenses, délibérations financières.',
    membres: ['Yves Afchain', 'Georges Dumas', '3 conseillers'],
  },
  {
    name: 'Voirie & Bâtiments',
    president: 'Maryline SAMSON',
    description: 'Entretien du réseau viaire communal, bâtiments communaux, assainissement collectif.',
    membres: ['Maryline Samson', 'Bruno Rambert', '4 conseillers'],
  },
  {
    name: 'Action Sociale & Périscolaire',
    president: 'Jacqueline REDOUTÉ',
    description: 'CCAS, aide aux personnes âgées, accueil périscolaire, garderie, liens avec les associations caritatives.',
    membres: ['Jacqueline Redouté', 'Sarah Legault-Denisot', '3 conseillers'],
  },
  {
    name: 'Communication',
    president: 'Sarah LEGAULT-DENISOT',
    description: 'Bulletin 100% Meillac, site internet, communication institutionnelle, relations avec la presse.',
    membres: ['Sarah Legault-Denisot', '4 conseillers'],
  },
]

export const PATRIMOINE = [
  {
    title: "L'Église Saint-Martin de Tours",
    description: 'Monument remarquable du bourg, l\'église Saint-Martin de Tours témoigne de l\'histoire religieuse de la commune depuis le Moyen Âge.',
    image: 'https://meillac.fr/wp-content/uploads/2018/01/IMG_5577.jpg',
  },
  {
    title: 'La Croix du Bourgneuf',
    description: 'Croix ancienne emblématique de Meillac, située au lieu-dit du Bourgneuf, ancien manoir de la famille De Gravé.',
    image: 'https://meillac.fr/wp-content/uploads/2018/01/IMG_5596.jpg',
  },
  {
    title: 'La Grotte de Lourdes',
    description: "Copie de la grotte de Lourdes créée en 1870, lieu de recueillement et de patrimoine religieux populaire de la commune.",
    image: 'https://meillac.fr/wp-content/uploads/2017/12/IMG_5579-300x2001.jpg',
  },
  {
    title: 'Le Manoir des Gâts',
    description: "Manoir rural typiquement breton, témoignage de l'architecture seigneuriale locale qui a marqué l'histoire de Meillac.",
    image: 'https://meillac.fr/wp-content/uploads/2018/01/IMG_5591.jpg',
  },
]

export const RANDONNEES = [
  {
    name: 'Chemin des Rochers',
    distance: '8 km',
    difficulty: 'Modéré',
    duration: '2h30',
    description: 'Circuit pédestre au cœur des paysages granitiques meillacois. Praticable à pied, à vélo et à cheval.',
    pdf: 'https://meillac.fr/wp-content/uploads/2018/03/circuit-des-rochers.pdf',
    color: '#40916C',
  },
  {
    name: 'Circuit des Écrouteaux',
    distance: '11 km',
    difficulty: 'Facile',
    duration: '3h',
    description: 'Boucle découverte des bocages et des écarts ruraux de la commune. Idéal pour les familles.',
    pdf: 'https://meillac.fr/wp-content/uploads/2017/10/circuit261.pdf',
    color: '#52B788',
  },
]

export const BULLETINS = [
  { year: 2026, month: 'Janvier',   cover: 'https://meillac.fr/wp-content/uploads/2026/03/bulletin_janv26-212x300.jpg',   pdf: 'https://meillac.fr/wp-content/uploads/2026/03/Meillac-bulletin-decembre-2025-150dpi-compresse.pdf' },
  { year: 2025, month: 'Juillet',   cover: 'https://meillac.fr/wp-content/uploads/2025/08/Meillac-bulletin-juillet-2025-web-01-212x300.jpg', pdf: 'https://meillac.fr/wp-content/uploads/2025/08/Meillac-bulletin-juillet-2025-web.pdf' },
  { year: 2024, month: 'Décembre',  cover: 'https://meillac.fr/wp-content/uploads/2025/01/202412_0052-Meillac-bulletin-dec2024-01-1-212x300.jpg', pdf: 'https://meillac.fr/wp-content/uploads/2025/01/202412_0052-Meillac-bulletin-dec2024.pdf' },
  { year: 2024, month: 'Juin',      cover: 'https://meillac.fr/wp-content/uploads/2025/01/bulletin_juin24-01-212x300-1.jpg', pdf: 'https://meillac.fr/wp-content/uploads/2025/01/bulletin_juin24.pdf' },
  { year: 2023, month: 'Décembre',  cover: 'https://meillac.fr/wp-content/uploads/2024/01/bulletin_decembre23-01-1-213x300.jpg', pdf: 'https://meillac.fr/wp-content/uploads/2024/01/bulletin_decembre23.pdf' },
  { year: 2023, month: 'Juin',      cover: 'https://meillac.fr/wp-content/uploads/2023/08/bulletin_juin23-01-212x300.jpg', pdf: 'https://meillac.fr/wp-content/uploads/2023/08/bulletin_juin23.pdf' },
  { year: 2022, month: 'Décembre',  cover: 'https://meillac.fr/wp-content/uploads/2023/01/bulletin_dec22-01-212x300.jpg', pdf: 'https://meillac.fr/wp-content/uploads/2023/01/bulletin_dec22_compressed-1.pdf' },
  { year: 2022, month: 'Juin',      cover: 'https://meillac.fr/wp-content/uploads/2022/08/bulletin_juin22-01-212x300.jpg', pdf: 'https://meillac.fr/wp-content/uploads/2022/09/Meillac-bulletin-juin-2022-TBD.pdf' },
]

export const ACTUALITES = [
  {
    id: 1,
    title: "Inscription au système d'alerte population",
    excerpt: "La commune propose un système de notification d'urgence par SMS. Inscrivez-vous dès maintenant pour rester informé en cas d'événement exceptionnel.",
    category: 'Information',
    date: '15 mars 2026',
    image: 'https://meillac.fr/wp-content/uploads/2025/03/img_alerte_pop.png',
    link: 'https://www.cli.inscription-volontaire.com/meillac/index.php?lang=fr',
  },
  {
    id: 2,
    title: 'Travaux de voirie — Rue de la Motte',
    excerpt: "Des travaux de réfection de chaussée seront réalisés rue de la Motte du 7 au 21 avril 2026. Une déviation sera mise en place pendant la durée des travaux.",
    category: 'Travaux',
    date: '10 mars 2026',
    image: null,
  },
  {
    id: 3,
    title: 'Fête communale 2026 — Appel aux bénévoles',
    excerpt: "Le comité des fêtes lance un appel à bénévoles pour l'organisation de la fête communale du 14 juin. Rejoignez l'équipe et contribuez à ce beau rendez-vous.",
    category: 'Événement',
    date: '5 mars 2026',
    image: null,
  },
]

export const AGENDA_EVENTS = [
  { id: 1, title: 'Conseil Municipal', date: '28 mars 2026', time: '20h30', lieu: 'Salle des fêtes', category: 'Municipal', description: 'Séance ordinaire du conseil municipal. Ouvert au public.' },
  { id: 2, title: 'Marché de Printemps', date: '5 avril 2026', time: '9h – 13h', lieu: 'Place de la Mairie', category: 'Commerce', description: 'Producteurs locaux, artisans et créateurs vous donnent rendez-vous.' },
  { id: 3, title: 'Permanence CAF', date: '9 avril 2026', time: '9h – 12h', lieu: 'Mairie', category: 'Social', description: 'Permanence de la Caisse d\'Allocations Familiales à la mairie.' },
  { id: 4, title: 'Club de Randonnée — Sortie mensuelle', date: '12 avril 2026', time: '8h30', lieu: 'Parking de la Mairie', category: 'Sport', description: 'Sortie rando mensuelle, circuit des Écrouteaux. Tout niveau. Inscription recommandée.' },
  { id: 5, title: 'Commémoration 8 mai 1945', date: '8 mai 2026', time: '10h30', lieu: 'Monument aux Morts', category: 'Cérémonie', description: 'Cérémonie officielle commémorant la victoire des Alliés.' },
  { id: 6, title: 'Fête de la Commune', date: '14 juin 2026', time: '14h', lieu: 'Salle des fêtes', category: 'Événement', description: 'Grande fête annuelle de la commune avec animations, repas et spectacle.' },
]

export const ASSOCIATIONS = [
  { name: 'Amicale Laïque de Meillac', secteur: 'Éducation & Culture', contact: '' },
  { name: 'APE — Association des Parents d\'Élèves', secteur: 'École', contact: '' },
  { name: 'Club de Football de Meillac', secteur: 'Sport', contact: '' },
  { name: 'Club de Randonnée Meillacois', secteur: 'Sport & Loisirs', contact: '' },
  { name: 'Comité des Fêtes', secteur: 'Animation locale', contact: '' },
  { name: 'ADMR — Aide à Domicile', secteur: 'Social', contact: '' },
  { name: 'Club de l\'Âge d\'Or', secteur: 'Séniors', contact: '' },
  { name: 'Association Sportive Scolaire', secteur: 'Sport Scolaire', contact: '' },
  { name: 'Méli-Mélo Médiathèque', secteur: 'Culture', contact: '' },
  { name: 'Chorale Madeleine Cécile', secteur: 'Musique', contact: '' },
  { name: 'Association de Chasse de Meillac', secteur: 'Nature', contact: '' },
  { name: 'Tennis Club Meillacois', secteur: 'Sport', contact: '' },
]

export const PROFESSIONNELS = [
  { name: 'Boulangerie du Bourg', secteur: 'Alimentation', type: 'Commerce' },
  { name: 'Garage de la Rance', secteur: 'Automobile', type: 'Artisan' },
  { name: 'Menuiserie Bourdais', secteur: 'Bâtiment', type: 'Artisan' },
  { name: 'Électricité Bertrand', secteur: 'Bâtiment', type: 'Artisan' },
  { name: 'Plomberie Chartier', secteur: 'Bâtiment', type: 'Artisan' },
  { name: 'Coiffure Nathalie', secteur: 'Service', type: 'Commerce' },
  { name: 'Gîte du Manoir des Gâts', secteur: 'Hébergement', type: 'Gîte' },
  { name: 'Chambres d\'hôtes La Ronce', secteur: 'Hébergement', type: 'Gîte' },
  { name: 'Ferme de la Vieuville', secteur: 'Agriculture', type: 'Producteur' },
  { name: 'Maçonnerie Deshayes', secteur: 'Bâtiment', type: 'Artisan' },
]

export const HORAIRES = [
  { day: 'Lundi',    matin: 'Fermé',         apmidi: '14h15 – 17h15' },
  { day: 'Mardi',    matin: '09h00 – 12h30', apmidi: '14h00 – 17h15' },
  { day: 'Mercredi', matin: '09h00 – 12h30', apmidi: 'Fermé' },
  { day: 'Jeudi',    matin: '09h00 – 12h30', apmidi: '14h00 – 17h15' },
  { day: 'Vendredi', matin: '09h00 – 12h30', apmidi: '14h00 – 17h15' },
  { day: 'Samedi',   matin: '09h45 – 12h00', apmidi: 'Sem. paires uniquement' },
]
