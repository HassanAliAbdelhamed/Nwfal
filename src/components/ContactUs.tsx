import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Youtube,
  Settings,
  Wrench,
  Target,
  Box,
  Layers,
} from "lucide-react";

type FormData = {
  nom: string;
  email: string;
  telephone: string;
  sujet: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.nom.trim()) {
      newErrors.nom = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        nom: "",
        email: "",
        telephone: "",
        sujet: "",
        message: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 overflow-x-hidden">
      {/* Enhanced 3D Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              {i % 3 === 0 && (
                <Box
                  size={20 + Math.random() * 30}
                  className="text-red-500 transform rotate-45"
                />
              )}
              {i % 3 === 1 && (
                <Settings
                  size={15 + Math.random() * 25}
                  className="text-red-500 transform rotate-12"
                />
              )}
              {i % 3 === 2 && (
                <Layers
                  size={18 + Math.random() * 28}
                  className="text-red-500 transform -rotate-12"
                />
              )}
            </div>
          ))}
        </div>

        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-red-400 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Fixed YouTube Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://www.youtube.com/@studio3dconcept"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl flex items-center gap-3 shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-red-500/25 backdrop-blur-sm border border-red-200"
        >
          <Youtube size={24} className="animate-pulse" />
          <span className="hidden sm:inline font-semibold">Subscribe</span>
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Large 3D Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-20 left-10 animate-bounce opacity-20"
              style={{ animationDelay: "0s", animationDuration: "4s" }}
            >
              <Box size={80} className="text-red-500 transform rotate-45" />
            </div>
            <div
              className="absolute top-40 right-20 animate-bounce opacity-15"
              style={{ animationDelay: "1s", animationDuration: "5s" }}
            >
              <Settings size={70} className="text-red-500 transform rotate-12" />
            </div>
            <div
              className="absolute bottom-40 left-20 animate-bounce opacity-25"
              style={{ animationDelay: "2s", animationDuration: "3.5s" }}
            >
              <Layers
                size={90}
                className="text-red-500 transform -rotate-12"
              />
            </div>
            <div
              className="absolute top-60 right-40 animate-spin opacity-10"
              style={{ animationDuration: "20s" }}
            >
              <Target size={60} className="text-red-500" />
            </div>
            <div className="absolute bottom-60 right-10 animate-pulse opacity-20">
              <Wrench
                size={50}
                className="text-red-500 transform rotate-45"
              />
            </div>
          </div>

          <div className="relative z-10 text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-black mb-6 animate-fade-in-up">
              <span className="text-red-600">Contactez</span>-Nous
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Nous sommes là pour vous aider. N'hésitez pas à nous contacter pour toute question ou demande d'information.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Nos <span className="text-red-600">Coordonnées</span>
                </h2>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
                  Notre équipe dédiée est prête à répondre à toutes vos questions et à vous accompagner dans vos projets.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-red-200 hover:border-red-300 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  <div className="p-3 bg-red-600 rounded-xl">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Adresse Email</h3>
                    <p className="text-gray-700">nawfal.bouy.1@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-red-200 hover:border-red-300 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  <div className="p-3 bg-red-600 rounded-xl">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Téléphone</h3>
                    <p className="text-gray-700">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-red-200 hover:border-red-300 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  <div className="p-3 bg-red-600 rounded-xl">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Adresse</h3>
                    <p className="text-gray-700">Québec, CANADA</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl border-2 border-red-200 shadow-xl">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Envoyez-nous un <span className="text-red-600">Message</span>
                </h2>
                <p className="text-gray-700 text-lg">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>
              </div>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-2xl">
                  <div className="flex items-center">
                    <div className="bg-red-600 p-2 rounded-full mr-3">
                      <Send className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-red-800 font-semibold">
                      Merci ! Votre message a été envoyé avec succès.
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-bold text-gray-700 mb-2">
                      Nom Complet *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border-2 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 ${
                          errors.nom ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Votre nom complet"
                      />
                    </div>
                    {errors.nom && <p className="mt-1 text-sm text-red-600 font-semibold">{errors.nom}</p>}
                  </div>

                  <div>
                    <label htmlFor="telephone" className="block text-sm font-bold text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                        placeholder="Votre numéro de téléphone"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    Adresse Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="votre.email@exemple.fr"
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-red-600 font-semibold">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="sujet" className="block text-sm font-bold text-gray-700 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 resize-none ${
                        errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Décrivez votre demande ou question en détail..."
                    />
                  </div>
                  {errors.message && <p className="mt-1 text-sm text-red-600 font-semibold">{errors.message}</p>}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-2xl font-bold text-white text-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-red-600 hover:bg-red-700 hover:shadow-2xl hover:shadow-red-500/25 transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Envoyer le Message</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 font-semibold">
                  * Champs obligatoires
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
