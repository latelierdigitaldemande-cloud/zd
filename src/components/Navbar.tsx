import { useState } from "react";
import { ShieldCheck, Menu, X, ArrowUpRight, Check } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col">
      {/* ===== HEADER NAVIGATION PRINCIPALE ===== */}
      <nav className="bg-[#1a1a1a]/95 backdrop-blur-md border-b border-white/10 w-full text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <span className="font-display font-black text-2xl tracking-tighter text-[#34d186]">
              bolt<span className="text-white font-normal text-sm tracking-widest uppercase ml-1.5 px-1.5 py-0.5 bg-white/10 rounded">chauffeur</span>
            </span>
          </a>

          {/* Desktop Nav Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#faq" className="text-sm font-semibold text-white/80 hover:text-white transition-colors py-2 px-4 rounded-full hover:bg-white/5">
              Assistance & FAQ
            </a>
            <a href="#form-inscription" className="bg-white text-[#1a1a1a] text-sm font-semibold py-2 px-5 rounded-full hover:bg-[#f0f0f0] transition-all transform active:scale-95 duration-100 shadow-md">
              S'inscrire
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1a1a1a] border-b border-white/10 px-4 py-4 space-y-3 antialiased">
            <a
              href="#confort"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white/80 hover:text-white py-2"
            >
              Le Confort
            </a>
            <a
              href="#avantages"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white/80 hover:text-white py-2"
            >
              Avantages Chauffeur
            </a>
            <a
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white/80 hover:text-white py-2"
            >
              Nos Catégories
            </a>
            <a
              href="#evenements"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white/80 hover:text-white py-2"
            >
              Événements
            </a>
            <a
              href="#business"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white/80 hover:text-white py-2"
            >
              Bolt Business
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-white/85 hover:text-white py-2"
            >
              FAQ / Assistance
            </a>
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href="#form-inscription"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#34d186] text-black text-sm font-bold py-2.5 rounded-full hover:bg-[#22b86e] transition-colors"
              >
                Inscrivez-vous maintenant
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ===== SOUS-NAVIGATION ===== */}
      <div className="bg-white border-b border-gray-200 shadow-sm w-full relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-13 flex items-center justify-between">
          <div className="font-display font-bold text-sm tracking-tight text-gray-900 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#34d186] animate-pulse"></span>
            Partenariat Chauffeurs Volt
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <a href="#confort" className="text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider">
              Le confort
            </a>
            <a href="#avantages" className="text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider">
              Pourquoi nous ?
            </a>
            <a href="#categories" className="text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider">
              Catégories de flotte
            </a>
            <a href="#evenements" className="text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider">
              Prestations Événementielles
            </a>
            <a href="#business" className="text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider">
              Bolt Business
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#form-inscription"
              className="hidden sm:inline-flex bg-gray-100 text-gray-900 text-xs font-bold py-1.5 px-4 rounded-full hover:bg-gray-200 transition-colors"
            >
              Espace Partenaire
            </a>
            <a
              href="#form-inscription"
              className="bg-[#34d186] text-black text-xs font-bold py-1.5 px-4 rounded-full hover:bg-[#22b86e] transition-colors"
            >
              Demander l'inscription
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
