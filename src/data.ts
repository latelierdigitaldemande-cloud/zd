import { FAQItem, FleetCategory, BizTab, AdvantageItem, FleetFacility } from "./types";

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Comment s'inscrire en tant que chauffeur partenaire Bolt Elite ?",
    answer: "Remplissez simplement le formulaire d'inscription en haut de page avec vos coordonnées et votre ville. Notre équipe de relations partenaires vous contactera sous 24h afin de finaliser votre dossier, collecter vos documents professionnels (carte VTC, extrait Kbis) et planifier votre session de formation de luxe."
  },
  {
    id: "faq-2",
    question: "Quels sont les prérequis pour devenir chauffeur partenaire Chauffeur ?",
    answer: "Vous devez posséder une carte professionnelle VTC en cours de validité, un permis de conduire de plus de 3 ans, un casier judiciaire vierge, ainsi qu'un statut juridique actif (micro-entreprise ou société). Une attitude polie, discrète et professionnelle est requise pour assurer un service digne de notre clientèle haut de gamme."
  },
  {
    id: "faq-3",
    question: "Quels types de véhicules sont acceptés pour le service ?",
    answer: "Nous acceptons des berlines haut de gamme ou des vans récents (de moins de 5 ans), de couleur sombre (noir ou gris anthracite), à l'intérieur en cuir, méticuleusement entretenus et dépourvus de toute publicité. Les modèles phares incluent la Mercedes Classe E, Classe S, l'Audi A6, la BMW Série 5 ou le Mercedes Classe V pour la catégorie XL."
  },
  {
    id: "faq-4",
    question: "Quelle est la structure des commissions et quand suis-je payé ?",
    answer: "Les virements sont effectués automatiquement chaque semaine de manière sécurisée. Bolt Chauffeur propose des tarifs de course substantiellement plus élevés que les applications standards, pour tenir compte de la qualité de votre service. Les pourboires versés par les passagers d'affaires vous reviennent à 100%."
  },
  {
    id: "faq-5",
    question: "Puis-je m'inscrire si je possède une flotte de plusieurs véhicules ?",
    answer: "Absolument. Nous accueillons les chefs d'entreprise et les gestionnaires de flotte. Notre portail 'Gestionnaire de flotte' vous permet de suivre l'activité et le chiffre d'affaires de vos chauffeurs en temps réel, de centraliser la facturation et d'intégrer facilement vos nouveaux véhicules."
  }
];

export const ADVANTAGES_DATA: AdvantageItem[] = [
  {
    id: "adv-1",
    title: "Des revenus premium garantis",
    description: "Bénéficiez de tarifs haut de gamme calculés pour valoriser votre expertise et une clientèle d'affaires exigeante prête à payer pour l'excellence et la discrétion.",
    image: "https://assets.cms.bolt.eu/Driver_Phase_1_Media_8_4c88ac0de6.webp"
  },
  {
    id: "adv-2",
    title: "Flexibilité totale d'horaires",
    description: "Soyez votre propre patron. Choisissez vos heures d'activité, planifiez vos disponibilités et optimisez vos revenus selon votre emploi du temps personnel.",
    image: "https://assets.cms.bolt.eu/Driver_Phase_1_Media_7_0919ff4bca.webp"
  },
  {
    id: "adv-3",
    title: "Assistance dédiée 24h/24",
    description: "Une équipe support Premium dédiée aux chauffeurs de grande remise et un service de conciergerie vous accompagnent en temps réel à chaque étape du trajet.",
    image: "https://assets.cms.bolt.eu/Driver_Phase_1_Media_6_7b127818d3.webp"
  }
];

export const FLEET_CATEGORIES: FleetCategory[] = [
  {
    id: "cat-1",
    name: "Classe affaires",
    tag: "La référence absolue pour les déplacements de cadres et de dirigeants",
    description: "Berlines d'affaires intemporelles alliant discrétion, connectivité embarquée et confort suprême pour transformer chaque trajet en temps utile.",
    image: "https://assets.cms.bolt.eu/Bolt_Chauffeur_Media_3_22267cf7ad.webp"
  },
  {
    id: "cat-2",
    name: "Première classe",
    tag: "Pour les clients les plus exigeants",
    description: "Le sommet du voyage privé. Véhicules d'exception avec suspensions pneumatiques, espace jambes étendu et chauffeur d'élite hautement qualifié.",
    image: "https://assets.cms.bolt.eu/Bolt_Chauffeur_Media_2_69c84b2a56.webp"
  },
  {
    id: "cat-3",
    name: "Classe XL",
    tag: "Déplacements spacieux pour vos groupes et bagages",
    description: "Vans de luxe haut de gamme pouvant accueillir jusqu'à 7 passagers dans un salon mobile, idéal pour les transferts événementiels ou d'équipes.",
    image: "https://assets.cms.bolt.eu/Bolt_Chauffeur_Media_1_0fab06c99c.webp"
  }
];

export const FLEET_FACILITIES: FleetFacility[] = [
  {
    id: "fac-1",
    title: "Une flotte digne de véhicules de showroom",
    description: "Des véhicules tout récents dans chaque catégorie, méticuleusement entretenus pour offrir une élégance souveraine et un confort inégalable.",
    image: "https://assets.cms.bolt.eu/Bolt_Chauffeur_Media_10_3553a41f99.webp"
  },
  {
    id: "fac-2",
    title: "Des chauffeurs de classe mondiale",
    description: "Des professionnels expérimentés, fiables et capables d'anticiper vos moindres besoins, que vous souhaitiez discuter ou voyager dans un silence complet.",
    image: "https://assets.cms.bolt.eu/Bolt_Chauffeur_Media_11_3ac1617e6b.webp"
  },
  {
    id: "fac-3",
    title: "Prise en charge aéroportuaire et FBO",
    description: "Suivi en direct des vols et service d'accueil personnalisé avec pancarte dans les terminaux commerciaux et les FBO pour jets privés à travers le monde.",
    image: "https://assets.cms.bolt.eu/Bolt_Chauffeur_Media_12_a538ae056a.webp"
  },
  {
    id: "fac-4",
    title: "Essentiels à bord attentionnés",
    description: "Eau de source fraîche purifiée, serviettes rafraîchissantes, confiseries fines et chargeurs multi-appareils disponibles à bord de chaque véhicule.",
    image: "https://assets.cms.bolt.eu/Bolt_Chauffeur_Media_24_41733cb186.webp"
  },
  {
    id: "fac-5",
    title: "Gestion des frais sans effort",
    description: "Intégration complète avec Bolt Business pour bénéficier de la facturation automatique centralisée de tous vos déplacements professionnels.",
    image: "https://assets.cms.bolt.eu/Bolt_Chauffeur_Media_14_ac91711153.webp"
  },
  {
    id: "fac-6",
    title: "Assistance et conciergerie 24h/24",
    description: "Notre équipe de conciergerie dédiée veille de jour comme de nuit pour planifier vos déplacements complexes et pallier tout imprévu instantanément.",
    image: "https://assets.cms.bolt.eu/Bolt_Chauffeur_Media_15_da925fff39.webp"
  }
];

export const BIZ_TABS: BizTab[] = [
  {
    id: "biz-tab-1",
    title: "Gestion de bout en bout",
    subtitle: "Bolt Chauffeur pour les déplacements d'affaires",
    heading: "Souveraineté budgétaire et visibilité totale",
    description: "Au sein d'une plateforme unique et intuitive, définissez vos politiques de voyage d'affaires par département, fixez des plafonds de coûts intelligents, et centralisez l'ensemble de vos factures mensuelles en un clic.",
    image: "https://assets.cms.bolt.eu/sm_Bolt_Chauffeur_Media_21_7554f4dd67.webp"
  },
  {
    id: "biz-tab-2",
    title: "Planification sans effort",
    subtitle: "Bolt Chauffeur pour les déplacements d'affaires",
    heading: "Commandez instantanément ou planifiez à l'avance",
    description: "Commandez un chauffeur d'élite en temps réel ou programmez vos courses à l'avance pour vos collaborateurs, vos clients de marque ou vos dirigeants, le tout via un portail ergonomique accessible en quelques secondes.",
    image: "https://assets.cms.bolt.eu/sm_Bolt_Chauffeur_Media_20_17af8eff21.webp"
  },
  {
    id: "biz-tab-3",
    title: "Gestion de compte dédiée",
    subtitle: "Bolt Chauffeur pour les déplacements d'affaires",
    heading: "Une conciergerie exclusive 24h/24",
    description: "Bénéficiez d'une assistance proactive par un gestionnaire de compte dédié. De la planification de trajets d'affaires complexes à l'assistance des VIP, nous veillons sur chacun de vos déplacements avec la plus haute rigueur.",
    image: "https://assets.cms.bolt.eu/sm_Bolt_Chauffeur_Media_19_3f5cc5549b.webp"
  },
  {
    id: "biz-tab-4",
    title: "Des déplacements éco-responsables",
    subtitle: "Bolt Chauffeur pour les déplacements d'affaires",
    heading: "Neutralité carbone intégrée sans surcoût",
    description: "Chaque trajet effectué avec un compte Bolt for Business est certifié CarbonNeutral®. Nous compensons l'intégralité des émissions générées, contribuant ainsi directement aux engagements RSE et de durabilité de votre entreprise.",
    image: "https://assets.cms.bolt.eu/sm_Bolt_Chauffeur_Media_18_41404c5b06.webp"
  }
];
