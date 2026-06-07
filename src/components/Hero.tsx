import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight, ShieldCheck, HelpCircle, Loader2, Info } from "lucide-react";

export default function Hero() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    prefix: "+33",
    countryName: "France",
    city: "",
    termsAccepted: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [showPrefixDropdown, setShowPrefixDropdown] = useState(false);

  const countries = [
    { name: "France", code: "FR", prefix: "+33", flag: "🇫🇷" },
    { name: "Belgique", code: "BE", prefix: "+32", flag: "🇧🇪" },
    { name: "Suisse", code: "CH", prefix: "+41", flag: "🇨🇭" },
    { name: "Luxembourg", code: "LU", prefix: "+352", flag: "🇱🇺" },
  ];

  const suggestedCities = [
    "Paris", "Lyon", "Marseille", "Nice", "Bordeaux", "Genève", "Bruxelles", "Toulouse", "Nantes"
  ];

  const handleCitySelect = (cityName: string) => {
    setFormData({ ...formData, city: cityName });
  };

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.email) {
      setError("Veuillez entrer votre adresse e-mail.");
      return;
    }
    if (!formData.phone || formData.phone.length < 6) {
      setError("Veuillez saisir un numéro de téléphone valide.");
      return;
    }
    if (!formData.city) {
      setError("Veuillez indiquer votre ville d'exercice.");
      return;
    }
    if (!formData.termsAccepted) {
      setError("Vous devez accepter les conditions d'utilisation.");
      return;
    }

    setLoading(true);
    // Simulate API registration call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      email: "",
      phone: "",
      prefix: "+33",
      countryName: "France",
      city: "",
      termsAccepted: false,
    });
    setSubmitted(false);
    setError("");
  };

  return (
    <section id="form-inscription" className="relative bg-[#111111] text-white overflow-hidden min-h-[720px] lg:min-h-[760px] flex items-center py-16 px-4 md:px-8">
      {/* Background image & gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity scale-105 transition-all duration-1000 object-cover"
        style={{ backgroundImage: "url('https://assets.cms.bolt.eu/Bolt_Chauffeur_Media_25_8918c30f22.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent pointer-events-none" />

      {/* Decorative green accent blur */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#34d186]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-[#34d186]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left column: Hero copy */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:space-y-8 antialiased">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#34d186]/15 border border-[#34d186]/30 px-3.5 py-1.5 rounded-full text-[#34d186] text-xs font-semibold tracking-wider uppercase backdrop-blur-sm self-start"
          >
            <ShieldCheck size={14} />
            Programme Partenaires Chauffeurs Élite
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
              Valorisez votre expertise de chauffeur indépendant <br className="hidden sm:inline" />
              <span className="text-[#34d186]">avec Bolt Chauffeur</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl font-normal leading-relaxed max-w-xl">
              Devenez chauffeur d'élite pour la plus prestigieuse des flottes de grande remise. Accédez à une clientèle corporative premium, augmentez vos revenus et planifiez en toute liberté.
            </p>
          </motion.div>

          {/* Key metrics / bullet descriptors points */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10"
          >
            <div className="bg-white/5 py-4 px-5 rounded-2xl border border-white/5 backdrop-blur-sm hover:border-[#34d186]/30 transition-all duration-300">
              <span className="block text-3xl font-display font-extrabold text-[#34d186]">Premium</span>
              <span className="text-xs text-gray-400 mt-1 block">Tarifs de grande remise & pourboires de 100%</span>
            </div>
            <div className="bg-white/5 py-4 px-5 rounded-2xl border border-white/5 backdrop-blur-sm hover:border-[#34d186]/30 transition-all duration-300">
              <span className="block text-3xl font-display font-extrabold text-[#34d186]">24h / 7j</span>
              <span className="text-xs text-gray-400 mt-1 block">Support chauffeur & conciergerie VIP dédié</span>
            </div>
            <div className="bg-white/5 py-4 px-5 rounded-2xl border border-white/5 backdrop-blur-sm hover:border-[#34d186]/30 transition-all duration-300">
              <span className="block text-3xl font-display font-extrabold text-[#34d186]">Hebdo</span>
              <span className="text-xs text-gray-400 mt-1 block">Versements automatiques de vos gains</span>
            </div>
          </motion.div>
        </div>

        {/* Right column: Interactive Sign-up Card */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white text-gray-950 rounded-3xl p-6 sm:p-8 w-full max-w-[440px] shadow-2xl relative overflow-hidden flex flex-col border border-gray-100"
          >
            {/* Top decorative bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#34d186] to-[#22b86e]" />

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="signup-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleRegister} 
                  className="space-y-5"
                >
                  <div>
                    <h2 className="font-display text-2xl font-extrabold text-gray-900 tracking-tight flex items-center justify-between">
                      Rejoignez-nous
                      <span className="inline-block bg-[#fef3c7] text-[#92400e] text-[10px] uppercase px-2 py-0.5 rounded font-black tracking-widest border border-[#fde68a]">
                        Maquette
                      </span>
                    </h2>
                    <p className="text-gray-500 text-xs mt-1">
                      Finalisez votre dossier de chauffeur d'élite en quelques minutes.
                    </p>
                  </div>

                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 text-red-700 text-xs px-4 py-2.5 rounded-xl border border-red-200 mt-2 flex items-center gap-1.5 font-medium"
                    >
                      <Info size={14} className="shrink-0" />
                      {error}
                    </motion.div>
                  )}

                  {/* Input Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider flex justify-between items-center">
                      Adresse e-mail
                      <span className="text-[10px] text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 font-semibold lowercase">formulaire interactif</span>
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      placeholder="exemple@chauffeur.fr"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-250 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#34d186] text-sm text-gray-900 transition-all font-medium"
                      required
                    />
                  </div>

                  {/* Input Phone */}
                  <div className="space-y-1.5 relative">
                    <label htmlFor="form-phone" className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Numéro de téléphone
                    </label>
                    <div className="flex gap-2">
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setShowPrefixDropdown(!showPrefixDropdown)}
                          className="px-3.5 py-3 bg-gray-50 border border-gray-250 rounded-xl text-sm font-bold text-gray-800 hover:bg-gray-100 flex items-center gap-1.5"
                        >
                          <span>{countries.find(c => c.prefix === formData.prefix)?.flag}</span>
                          <span>{formData.prefix}</span>
                        </button>

                        {showPrefixDropdown && (
                          <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl z-50 w-44 py-1.5 text-xs text-gray-700 overflow-hidden">
                            {countries.map((c) => (
                              <button
                                key={c.code}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, prefix: c.prefix, countryName: c.name });
                                  setShowPrefixDropdown(false);
                                }}
                                className="w-full text-left px-3 py-2 hover:bg-gray-50 flex items-center gap-2"
                              >
                                <span>{c.flag}</span>
                                <span className="font-semibold">{c.prefix}</span>
                                <span className="text-gray-400">({c.name})</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      <input
                        id="form-phone"
                        type="tel"
                        placeholder="06 12 34 56 78"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="flex-1 px-4 py-3 bg-gray-50 border border-gray-250 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#34d186] text-sm text-gray-900 transition-all font-medium"
                        required
                      />
                    </div>
                  </div>

                  {/* Input City */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-city" className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Ville d'exercice
                    </label>
                    <input
                      id="form-city"
                      type="text"
                      placeholder="Sélectionnez ou saisissez votre ville"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-250 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#34d186] text-sm text-gray-900 transition-all font-medium"
                      required
                    />

                    {/* Quick suggest tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1.5">
                      {suggestedCities.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => handleCitySelect(item)}
                          className={`text-[10px] px-2.5 py-1 rounded-full border transition-all font-semibold ${
                            formData.city.toLowerCase() === item.toLowerCase()
                              ? "bg-[#34d186] text-black border-[#34d186]"
                              : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex gap-2.5 items-start py-1">
                    <input
                      id="terms-checkbox"
                      type="checkbox"
                      checked={formData.termsAccepted}
                      onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded text-[#34d186] border-gray-300 focus:ring-[#34d186] cursor-pointer"
                    />
                    <label htmlFor="terms-checkbox" className="text-[11px] text-gray-500 leading-snug select-none cursor-pointer">
                      En vous inscrivant, vous acceptez nos{" "}
                      <a href="#faq" className="text-[#22b86e] hover:underline font-semibold">Conditions d'utilisation</a> et notre{" "}
                      <a href="#faq" className="text-[#22b86e] hover:underline font-semibold">Politique de confidentialité</a>.
                      <span className="inline-block bg-amber-50 text-amber-700 border border-amber-200 text-[9px] font-bold px-1 rounded ml-1 mt-0.5">Placeholder Liens</span>
                    </label>
                  </div>

                  <p className="text-[10px] text-gray-400 text-center">
                    Nous vous envoyons occasionnellement des offres. Vous pouvez toujours vous désabonner. 
                    <span className="inline-block bg-amber-50 text-amber-700 border border-amber-250 text-[9px] font-bold px-1 rounded ml-1">Placeholder</span>
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#34d186] text-black font-extrabold text-sm py-4.5 rounded-full hover:bg-[#22b86e] transition-all transform active:scale-98 shadow-md flex items-center justify-center gap-2 cursor-pointer select-none"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin" size={18} />
                        <span>Création du espace partenaire...</span>
                      </>
                    ) : (
                      <>
                        <span>S'inscrire en tant que chauffeur</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  <div className="pt-2 text-center text-xs text-gray-500 space-y-2 border-t border-gray-100">
                    <p>
                      Vous avez déjà un compte ?{" "}
                      <a href="https://partners.bolt.eu/login" target="_blank" rel="noopener noreferrer" className="text-[#22b86e] hover:underline font-bold">
                        Connectez-vous ↗
                      </a>
                    </p>
                    <p>
                      Plusieurs véhicules ?{" "}
                      <a href="#faq" className="text-[#22b86e] hover:underline font-semibold text-[11px]">
                        Gestionnaire de flotte <span className="text-[9px] bg-amber-50 text-amber-700 border border-amber-200 px-1 py-0.5 rounded ml-0.5">Placeholder</span>
                      </a>
                    </p>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-8 text-center space-y-6"
                >
                  <div className="w-16 h-16 bg-[#34d186]/10 text-[#34d186] rounded-full flex items-center justify-center mx-auto border border-[#34d186]/30 animate-bounce">
                    <Check size={32} strokeWidth={3} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-black text-gray-900">Demande Enregistrée !</h3>
                    <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
                      Félicitations ! Votre pré-inscription pour la ville de <span className="font-extrabold text-[#22b86e]">{formData.city}</span> a bien été simulée de manière interactive.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-2xl text-[12px] text-gray-600 text-left border border-gray-100 space-y-1.5 font-medium">
                    <p><strong>📍 Email :</strong> {formData.email}</p>
                    <p><strong>📞 Téléphone :</strong> {formData.prefix} {formData.phone}</p>
                    <p><strong>🚗 Statut du dossier :</strong> <span className="text-amber-600 font-bold bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded">En attente des justificatifs professionnels</span></p>
                  </div>

                  <button
                    onClick={resetForm}
                    className="w-full bg-[#1a1a1a] text-white hover:bg-black font-semibold text-xs py-3.5 rounded-full transition-colors"
                  >
                    Réinitialiser le formulaire interactif
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
