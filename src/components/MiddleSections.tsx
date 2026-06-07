import { useState, useRef, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ChevronRight, Sparkles, Building2, CalendarRange, Leaf, ShieldAlert, Award, Star, Compass } from "lucide-react";
import { ADVANTAGES_DATA, FLEET_CATEGORIES, BIZ_TABS, FLEET_FACILITIES } from "../data";

export default function MiddleSections() {
  const [activeBizTab, setActiveBizTab] = useState("biz-tab-1");
  
  // Custom drag carousel ref & state
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e: MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const handleDrag = (e: MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="bg-white text-gray-900 antialiased">
      
      {/* 2. Section "Une touche spéciale" */}
      <section id="confort" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2 text-emerald-600 font-bold tracking-widest text-xs uppercase">
              <Sparkles size={16} />
              L'Art du Déplacement de Luxe
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Une touche spéciale au départ et à l'arrivée
            </h2>
            <div className="h-1 w-20 bg-[#34d186] rounded" />
            <p className="text-gray-600 text-lg sm:text-xl font-normal leading-relaxed whitespace-pre-wrap pt-2">
              Véhicules haut de gamme, chauffeurs professionnels réputés, et réservations sans le moindre effort.
              {"\n\n"}
              Bolt Chauffeur transforme le transport privé moderne en une expérience d'accueil de prestige. Avec une couverture métropolitaine d'exception et un service de conciergerie hautement personnalisé disponible 24h/24 et 7j/7, un voyage de première classe attend chaque voyageur exigeant.
              {"\n\n"}
              N'importe où, n'importe quand.
            </p>
            <div className="pt-4">
              <a 
                href="#form-inscription" 
                className="inline-flex items-center gap-2 bg-[#34d186] text-black font-extrabold px-6 py-3.5 rounded-full hover:bg-[#22b86e] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg text-sm cursor-pointer"
              >
                <span>Réserver un véhicule Premium</span>
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Image pleine largeur d'ambiance avec effet Parallaxe moderne */}
      <section className="relative h-[320px] md:h-[500px] lg:h-[620px] w-full overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-95 scale-102 transition-transform duration-1000 select-none"
          style={{ backgroundImage: "url('https://assets.cms.bolt.eu/Bolt_Chauffeur_Media_4_c90cd7383d.webp')" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      </section>

      {/* 4 + 5. Section "Des chauffeurs experts" */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Column Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-emerald-600 font-bold tracking-widest text-xs uppercase">
                <Award size={16} />
                Protocoles d'Exception
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Des chauffeurs d'élite experts de la grande remise
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4">
                Chaque déplacement débute avec votre chauffeur. Bien plus qu'un simple conducteur d'autorité, il s'intègre comme un hôte attentionné et particulièrement discret.
                <br /><br />
                Rigoureusement sélectionnés par nos soins, détenteurs d'une carte VTC vérifiée et d'un brevet d'accueil, ils anticipent vos préférences à chaque instant. De la température optimale de l'habitacle au style musical embarqué, jusqu'à la totale confidentialité requise durant vos négociations téléphoniques.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <a 
                  href="#form-inscription"
                  className="bg-[#1a1a1a] text-white font-extrabold px-6 py-3.5 rounded-full hover:bg-[#333333] transition-all transform active:scale-95 text-xs uppercase tracking-wider"
                >
                  Postuler en tant que chauffeur
                </a>
              </div>
            </div>

            {/* Column Image Showcase */}
            <div className="lg:col-span-6">
              <motion.div 
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-3xl shadow-xl aspect-[4/3] bg-gray-200 group border border-gray-100"
              >
                <img 
                  src="https://assets.cms.bolt.eu/Bolt_Chauffeur_Media_5_cd0f32217c.webp" 
                  alt="Chauffeur partenaire d'élite Bolt" 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-black/75 px-3 py-1.5 rounded-full backdrop-blur-md text-[10px] text-white font-bold tracking-widest uppercase flex items-center gap-1">
                  <Star size={10} fill="#34d186" className="text-[#34d186]" />
                  Service Certifié 5 Étoiles
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== SECTION : LE CONFORT JUSQUE DANS LES MOINDRES DÉTAILS ===== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Le confort jusque dans les moindres détails
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Découvrez les aménagements et services premium inclus systématiquement pour chaque course avec Bolt Chauffeur.
            </p>
            <div className="h-0.5 w-16 bg-[#34d186] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FLEET_FACILITIES.map((facility, idx) => (
              <motion.div 
                key={facility.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative w-full aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#34d186] text-black text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded">
                    Détail 0{idx+1}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="font-display text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                      {facility.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION : POURQUOI ? (Avantages Chauffeurs) ===== */}
      <section id="avantages" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950 text-white relative">
        {/* Background mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 space-y-4">
            <span className="text-[#34d186] font-bold tracking-widest text-xs uppercase block">
              Générer des revenus premium
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white max-w-2xl">
              Pourquoi devenir chauffeur d'élite partenaire ?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-lg">
              Maximisez vos revenus d'indépendant tout en exerçant votre profession avec sérénité et accompagnement.
            </p>
          </div>

          {/* Desktop Advantage Cards */}
          <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-8">
            {ADVANTAGES_DATA.map((advantage, idx) => (
              <div 
                key={advantage.id}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/5 hover:border-[#34d186]/30 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] bg-white/5 overflow-hidden">
                  <img 
                    src={advantage.image} 
                    alt={advantage.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-white font-bold tracking-wide">
                    Avantage {idx+1}
                  </div>
                </div>
                <div className="p-6 space-y-2.5 flex-1 flex flex-col">
                  <h3 className="font-display text-xl font-bold text-white tracking-tight">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Drag-to-Scroll Carousel (as in the reference HTML) */}
          <div className="sm:hidden -mx-4 px-4 overflow-hidden">
            <div 
              ref={carouselRef}
              onMouseDown={startDragging}
              onMouseLeave={stopDragging}
              onMouseUp={stopDragging}
              onMouseMove={handleDrag}
              className={`flex gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              style={{ scrollbarWidth: "none" }}
            >
              {ADVANTAGES_DATA.map((advantage, idx) => (
                <div 
                  key={advantage.id}
                  className="shrink-0 w-[290px] snap-start bg-white/5 rounded-2xl overflow-hidden border border-white/5 flex flex-col"
                >
                  <div className="relative aspect-[16/10] bg-white/5 overflow-hidden">
                    <img 
                      src={advantage.image} 
                      alt={advantage.title} 
                      className="w-full h-full object-cover pointer-events-none"
                    />
                    <div className="absolute top-2 left-2 bg-black/50 px-2 py-0.5 rounded text-[9px] text-white">
                      Avantage {idx+1}
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="font-display text-base font-bold text-white">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Carousel Drag indicator */}
            <div className="flex justify-center items-center gap-1 text-gray-500 text-[10px] mt-2 select-none">
              <span>← Glisser pour faire défiler →</span>
            </div>
          </div>

        </div>
      </section>

      {/* ===== SECTION : FLOTTE - LE CONFORT POUR TOUTES LES CATÉGORIES ===== */}
      <section id="categories" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Le confort absolu pour toutes les catégories de flotte
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Chaque déplacement répond à des exigences uniques. Notre flotte d'exception se déploie en 3 classes de véhicules méticuleusement approuvées.
            </p>
            <div className="pt-4 flex justify-center">
              <a 
                href="#form-inscription"
                className="bg-white/10 hover:bg-white/15 px-6 py-2.5 rounded-full text-white text-xs font-bold tracking-widest uppercase transition-colors"
              >
                Simulation d'inscription
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {FLEET_CATEGORIES.map((category) => (
              <div 
                key={category.id}
                className="h-[400px] relative overflow-hidden rounded-3xl group border border-white/5 shadow-2xl bg-black"
              >
                <img 
                  src={category.image} 
                  alt={category.name} 
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 select-none pb-12 brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 select-none" />
                <div className="absolute bottom-0 inset-x-0 p-6 space-y-2 select-none">
                  <span className="text-[10px] text-[#34d186] font-black uppercase tracking-widest block bg-black/45 px-2.5 py-1 rounded backdrop-blur-md w-fit">
                    {category.tag}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {category.name}
                  </h3>
                  <p className="text-gray-300 text-xs font-normal leading-relaxed opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION : DES DÉPLACEMENTS CONÇUS POUR VOS ÉVÈNEMENTS ===== */}
      <section id="evenements" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex py-1 px-3 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full items-center gap-1">
              <CalendarRange size={14} />
              Service Événementiel Corporate
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Des déplacements conçus pour vos événements d'envergure
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto pt-2">
              Soignez la première et la dernière impression laissée à vos invités de marque ou à vos hauts dirigeants. Chaque trajet est assuré par un chauffeur privé qualifié au volant d'un véhicule de showroom impeccablement entretenu, avec possibilité de personnaliser le service à l'effigie de votre marque.
              <br /><br />
              Partenaire logistique de confiance du secteur hôtelier de luxe, des bases aériennes et des congrès internationaux, notre équipe gère chaque étape, de la planification initiale jusqu'au bon déroulement sur place. Toutes les réservations peuvent être pilotées directement via l'API Bolt Business.
            </p>
            <div className="pt-4">
              <a 
                href="#form-inscription"
                className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white font-extrabold px-6 py-3.5 rounded-full hover:bg-black transition-all shadow-md text-xs uppercase tracking-wider"
              >
                Contacter notre équipe Événements
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Full length event model image container with picture responsive sizes */}
      <section className="relative aspect-[16/9] max-h-[500px] w-full overflow-hidden bg-black select-none">
        <img
          src="https://assets.cms.bolt.eu/xl_Bolt_Chauffeur_Media_9_c001644222.webp"
          alt="Luxury chauffeur transportation scene"
          loading="lazy"
          className="w-full h-full object-cover filter brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
      </section>

      {/* ===== SECTION : Vos déplacements d'affaires avec Bolt Business ===== */}
      <section id="business" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-[#34d186] font-bold tracking-widest text-xs uppercase block">
              Gains corporatifs accrus
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Vos déplacements d'affaires avec Bolt Business
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Offrez à vos cadres dirigeants, clients VIP et partenaires de confiance un bureau en mouvement. Bénéficiez d'une automatisation complète des charges administratives grâce à la plateforme Bolt Business, un tableau de bord unifié intégrant dépenses de déplacement et réservations d'élite.
            </p>
            <div className="pt-2">
              <a 
                href="#form-inscription"
                className="bg-gray-100 hover:bg-gray-200 text-gray-950 font-bold text-xs uppercase py-2 px-5 rounded-full transition-colors inline-flex items-center gap-1.5"
              >
                <Building2 size={14} />
                Découvrir Bolt Business
              </a>
            </div>
          </div>

          {/* Sub-sections Bolt Business with Interactive Tabs */}
          <div className="bg-gray-50 rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm">
            
            {/* Interactive Tab Navigation */}
            <div className="flex gap-2 border-b border-gray-200 pb-0 overflow-x-auto scrollbar-none mb-10">
              {BIZ_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveBizTab(tab.id)}
                  className={`py-3 px-4.5 font-display text-sm font-bold tracking-tight border-b-2 whitespace-nowrap cursor-pointer transition-all ${
                    activeBizTab === tab.id
                      ? "border-[#34d186] text-emerald-800 font-extrabold"
                      : "border-transparent text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Tab Display Panel with Animations */}
            <div className="relative">
              {BIZ_TABS.map((tab) => (
                <div 
                  key={tab.id}
                  className={`${activeBizTab === tab.id ? "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center" : "hidden"}`}
                >
                  <div className="lg:col-span-6 space-y-4">
                    <span className="text-xs font-semibold text-gray-400 block uppercase tracking-wider">
                      {tab.subtitle}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-black text-gray-900">
                      {tab.heading}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {tab.description}
                    </p>
                    <div className="pt-4 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                      <CheckCircle2 size={16} />
                      Solution déployée en 24h sans frais d'installation
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-200">
                      <img 
                        src={tab.image} 
                        alt={tab.title} 
                        className="w-full h-full object-cover shadow-inner"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
