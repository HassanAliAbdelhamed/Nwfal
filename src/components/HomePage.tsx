import React from "react";
import { Link } from "react-router-dom";
import {
  Play,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Youtube,
  Settings,
  Wrench,
  Target,
  Cuboid as Cube,
  Layers,
  Box,
  MousePointer,
  ExternalLink,
  Calculator,
  FileText,
} from "lucide-react";
import customerImg from "../img/customer.jpg";
import chanelImg from "../img/logo.jpg";
import { YouTubePlayer } from "react-youtube";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 overflow-x-hidden">
      {/* Enhanced 3D Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Geometric shapes floating */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${
                  3 + Math.random() * 4
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              {i % 3 === 0 && (
                <Cube
                  size={20 + Math.random() * 30}
                  className="text-red-500 transform rotate-45"
                />
              )}
              {i % 3 === 1 && (
                <Box
                  size={15 + Math.random() * 25}
                  className="text-blue-500 transform rotate-12"
                />
              )}
              {i % 3 === 2 && (
                <Layers
                  size={18 + Math.random() * 28}
                  className="text-purple-500 transform -rotate-12"
                />
              )}
            </div>
          ))}
        </div>

        {/* Grid pattern */}
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

        {/* Floating particles */}
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
      <section
        id="home"
        className="relative z-10 min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-6xl mx-auto">
          {/* Large 3D Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-20 left-10 animate-bounce opacity-20"
              style={{ animationDelay: "0s", animationDuration: "4s" }}
            >
              <Cube size={80} className="text-red-500 transform rotate-45" />
            </div>
            <div
              className="absolute top-40 right-20 animate-bounce opacity-15"
              style={{ animationDelay: "1s", animationDuration: "5s" }}
            >
              <Box size={70} className="text-blue-500 transform rotate-12" />
            </div>
            <div
              className="absolute bottom-40 left-20 animate-bounce opacity-25"
              style={{ animationDelay: "2s", animationDuration: "3.5s" }}
            >
              <Layers
                size={90}
                className="text-purple-500 transform -rotate-12"
              />
            </div>
            <div
              className="absolute top-60 right-40 animate-spin opacity-10"
              style={{ animationDuration: "20s" }}
            >
              <Settings size={60} className="text-green-500" />
            </div>
            <div className="absolute bottom-60 right-10 animate-pulse opacity-20">
              <Wrench
                size={50}
                className="text-orange-500 transform rotate-45"
              />
            </div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            {/* Left side - Main content */}
            <div className="md:w-1/2 text-left">
              <div
                className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <p className="mb-4">
                  <span className="text-red-600 font-bold">
                    Technicien en conception mécanique
                  </span>{" "}
                  mécanique doté d’une solide maîtrise des logiciels de CAO/DAO
                  (SolidWorks, AutoCAD, CATIA), spécialisé dans la conception et
                  l’optimisation de pièces et d’assemblages mécaniques. Capable
                  de lire et interpréter des plans techniques,
                </p>
                <p>
                  d’appliquer les normes industrielles et de collaborer
                  étroitement avec les ingénieurs et les équipes de production.
                  Rigoureux, créatif et orienté solutions, je contribue au
                  développement de produits fiables, innovants et adaptés aux
                  besoins de l’entreprise.
                </p>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-6 justify-start animate-fade-in-up"
                style={{ animationDelay: "0.9s" }}
              >
                <button className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25 flex items-center gap-3">
                  <MousePointer
                    size={24}
                    className="group-hover:animate-pulse"
                  />
                  Explore My Work
                </button>
              </div>
            </div>

            {/* Right side - Customer Image */}
            <div
              className="md:w-1/2 flex items-center justify-center animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl border-2 border-red-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img
                  src={customerImg}
                  alt="Customer"
                  className="w-72 h-72 object-cover rounded-full mb-6 shadow-lg border-4 border-red-500"
                />
                <h4 className="text-3xl font-bold text-red-600 text-center mb-2">
                  Nawfal
                </h4>
                <p className="text-gray-700 text-center text-lg">
                  Technicien en conception mécanique
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="chanel"
        className="relative z-10 min-h-screen flex items-center justify-center px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mt-10 mb-16">
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              My <span className="text-red-600">Channel</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            {/* Left side - Main content */}
            <div className="md:w-1/2 text-left">
              <div
                className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <p>
                  Plongez dans mon univers créatif ! Découvrez toutes mes vidéos
                  démonstratives et laissez-vous inspirer par mon savoir-faire.{" "}
                </p>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-6 justify-start animate-fade-in-up"
                style={{ animationDelay: "0.9s" }}
              >
                <a href="https://www.youtube.com/@studio3dconcept" target="_blank">
                <button className="group bg-red-600 hover:bg-red-700 text-white text-center px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25 flex items-center gap-3">
                  <Youtube size={24} />
                  Subscribe to Channel
                </button>
                </a>

              </div>
            </div>

            {/* Right side - Customer Image */}
            <div
              className="md:w-1/2 flex items-center justify-center animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl border-2 border-red-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img
                  src={chanelImg}
                  alt="Customer"
                  className="w-72 h-72 object-cover rounded-full mb-6 shadow-lg border-4 border-red-500"
                />
                <h4 className="text-3xl font-bold text-red-600 text-center mb-2">
                  3DConceptMecha
                </h4>
                <p className="text-gray-700 text-center text-lg">
                  Plongez dans mon univers créatif{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section
        id="Skills"
        className="relative z-10 py-20 bg-white/50 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              My <span className="text-red-600">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* CONCEPTION MECANIQUE 3D/2D */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl border-2 border-red-200 hover:border-red-300 transition-all duration-300 shadow-xl hover:shadow-2xl group h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl">
                  <Settings className="w-8 h-8 text-white animate-spin-slow" />
                </div>
                <h3 className="text-3xl font-bold">
                  CONCEPTION <span className="text-red-600">MECANIQUE</span>
                </h3>
              </div>

              <div className="space-y-8">
                {/* Expertise */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-red-600 flex items-center gap-2">
                    <Cube className="w-5 h-5" />
                    Expertise
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>
                        Conception assistée par ordinateur (CAO) : SolidWorks,
                        CATIA, AutoCAD
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>
                        Lecture et interprétation de plans techniques (2D/3D)
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>
                        Connaissance des matériaux (métalliques, plastiques,
                        composites)
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>Tolérances et ajustements : Normes ISO</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>
                        Assemblage mécanique et compréhension des mécanismes
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>
                        Résistance des matériaux (RDM) et calculs mécaniques
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>Normes et standards industriels : ISO, ANSI</span>
                    </li>
                  </ul>
                </div>

                {/* Compétences logicielles */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-red-600 flex items-center gap-2">
                    <Wrench className="w-5 h-5" />
                    Compétences logicielles
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>CAO/DAO : conception et dessin technique</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>FAO : MasterCam pour la fabrication</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>Simulation : SolidWorks & CATIA Simulation</span>
                    </li>
                  </ul>
                </div>

                {/* Compétences transversales */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-red-600 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Compétences transversales
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>Analyse et résolution de problèmes techniques</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>Communication technique et travail d'équipe</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>Gestion du temps et veille technologique</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* BUREAUTIQUE */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl border-2 border-red-200 hover:border-red-300 transition-all duration-300 shadow-xl hover:shadow-2xl group h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl">
                  <Settings className="w-8 h-8 text-white animate-spin-slow" />
                </div>
                <h3 className="text-3xl font-bold">
                  SUITE <span className="text-red-600">OFFICE</span>
                </h3>
              </div>

              <div className="space-y-8">
                {/* Excel */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-red-600 flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Microsoft Excel
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>Tableaux et bases de données avancées</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>
                        Formules complexes et tableaux croisés dynamiques
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>Tableaux de bord et macros VBA</span>
                    </li>
                  </ul>
                </div>

                {/* Word */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-red-600 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Microsoft Word
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>Mise en page professionnelle et styles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>Rapports techniques avancés</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>Publipostage et collaboration</span>
                    </li>
                  </ul>
                </div>

                {/* PowerPoint */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-red-600 flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    PowerPoint
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>Présentations professionnelles et design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>Animations et transitions avancées</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>Mode présentateur et interactivité</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="relative z-10 bg-gray-900 text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-4xl font-bold mb-6">
                <span className="text-red-500">Get</span> In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-red-600 rounded-xl group-hover:bg-red-700 transition-colors">
                    <Mail className="text-white" size={20} />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    sav.designer@email.com
                  </span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-red-600 rounded-xl group-hover:bg-red-700 transition-colors">
                    <Phone className="text-white" size={20} />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-red-600 rounded-xl group-hover:bg-red-700 transition-colors">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    San Francisco, CA
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-4xl font-bold mb-6 text-white">
                Quick Links
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Home", path: "/" },
                  { name: "Videos", path: "/videos" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block text-gray-300 hover:text-red-500 transition-colors text-lg hover:translate-x-2 transform duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-4xl font-bold mb-6 text-white">
                Connect & Subscribe
              </h3>

              <a
                href="https://youtube.com/@studio3dconcept"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 px-6 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 text-white"
              >
                <Youtube size={24} className="animate-pulse" />
                Subscribe to Channel
              </a>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-16 pt-8 text-center">
            <p className="text-gray-400 text-lg">
              © 2025 Nawfal 3D/2D Designer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

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
};

export default HomePage;
