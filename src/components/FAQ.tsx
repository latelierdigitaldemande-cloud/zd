import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle, ChevronDown } from "lucide-react";
import { FAQ_DATA } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-b border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex p-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full items-center gap-1.5">
            <HelpCircle size={14} />
            Centre d'Assistance Partenaire
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Des réponses à toutes vos questions
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Tout ce qu'un chauffeur professionnel doit savoir pour démarrer son activité avec Bolt Chauffeur.
          </p>
          <div className="h-0.5 w-12 bg-[#34d186] mx-auto" />
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:border-gray-300 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left px-6 py-5.5 flex items-center justify-between gap-4 font-display font-bold text-gray-900 text-base sm:text-lg focus:outline-none focus:bg-gray-50/50 transition-colors cursor-pointer"
                >
                  <span className="leading-snug">{item.question}</span>
                  <div className={`p-1.5 rounded-full bg-gray-50 text-gray-400 group-hover:text-gray-900 transition-transform duration-300 shrink-0 ${
                    isOpen ? "rotate-180 bg-emerald-50 text-emerald-600" : ""
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 font-normal">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Dynamic support helper card */}
        <div className="mt-12 bg-[#1a1a1a] rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative shadow-lg">
          <div className="absolute top-1/2 right-10 w-44 h-44 bg-[#34d186]/10 rounded-full blur-[40px] pointer-events-none" />
          <div className="space-y-1.5 relative z-10 text-center sm:text-left">
            <h4 className="font-display text-lg font-bold">Besoin d'un accompagnement personnalisé ?</h4>
            <p className="text-gray-400 text-xs sm:text-sm">Notre équipe de relations partenaires VTC est à votre écoute immédiate.</p>
          </div>
          <a
            href="#form-inscription"
            className="shrink-0 bg-[#34d186] hover:bg-[#22b86e] text-black text-xs font-black uppercase tracking-wider px-5 py-3 rounded-full transition-colors relative z-10 active:scale-95"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}
