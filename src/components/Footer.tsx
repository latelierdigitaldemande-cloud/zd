import { Facebook, Instagram, Linkedin, Twitter, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-0 overflow-hidden font-sans">
      
      {/* ===== SECTION : REDIRECTION VERS LE SITE OFFICIEL ===== */}
      <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2b2b2b] border-b border-white/10 py-16 px-4 md:px-8 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#34d186]/5 rounded-full blur-[80px]" />
        
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <span className="text-[#34d186] font-bold tracking-widest text-xs uppercase block">
            Espace d'entraînement Partenaire
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Prêt à rejoindre l'excellence Bolt Chauffeur ?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Cette interface de maquette vous permet de simuler votre demande d'inscription. Pour rejoindre définitivement nos équipes sur le terrain, déposez votre candidature officielle.
          </p>
          <div className="pt-2">
            <a 
              href="https://bolt.eu/fr-fr/driver/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-[#34d186] text-black font-extrabold px-8 py-4 rounded-full hover:bg-[#22b86e] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg cursor-pointer"
            >
              <span>Déposer ma candidature sur bolt.eu</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-white/5 pb-12">
          
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Prestations
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#categories" className="text-gray-400 hover:text-white transition-colors">Berlines Classe Affaires</a></li>
              <li><a href="#categories" className="text-gray-400 hover:text-white transition-colors">Limousines Première Classe</a></li>
              <li><a href="#categories" className="text-gray-400 hover:text-white transition-colors">Vans Prestige XL</a></li>
              <li><a href="#evenements" className="text-gray-400 hover:text-white transition-colors">Transferts Aéroport & FBO</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Générer des revenus
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#form-inscription" className="text-[#34d186] hover:underline font-semibold transition-colors">Devenir chauffeur d'élite ↗</a></li>
              <li><a href="#form-inscription" className="text-gray-400 hover:text-white transition-colors">Gestionnaire de flotte</a></li>
              <li><a href="#form-inscription" className="text-gray-400 hover:text-white transition-colors">Sociétés de VTC partenaires</a></li>
              <li><a href="#form-inscription" className="text-gray-400 hover:text-white transition-colors">Parrainages</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              L'Entreprise
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="https://bolt.eu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">À propos de Bolt</a></li>
              <li><a href="https://bolt.eu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Nos engagements Green</a></li>
              <li><a href="https://bolt.eu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Cabinet de Presse</a></li>
              <li><a href="https://bolt.eu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Carrières</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Assistance & FAQ
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">Espace Chauffeurs FAQ</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">Service Clientèle Business</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">Réglementation VTC</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">Contact Médias</a></li>
            </ul>
          </div>

          <div className="space-y-4 col-span-2 md:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Informations Légales
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">Conditions Générales (CGU)</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">Politique de Confidentialité</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">Gestion des Cookies</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">Mentions Légales</a></li>
            </ul>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="text-gray-400 text-xs font-medium">
              © 2026 Bolt Chauffeur Élite Partner.
            </span>
            <span className="inline-flex bg-white/10 text-gray-300 text-[10px] uppercase font-black px-2 py-0.5 rounded tracking-widest">
              Maquette Interactive
            </span>
          </div>

          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-gray-400 hover:text-[#34d186] transition-colors" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-gray-400 hover:text-[#34d186] transition-colors" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-gray-400 hover:text-[#34d186] transition-colors" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-gray-400 hover:text-[#34d186] transition-colors" aria-label="Twitter">
              <Twitter size={16} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
