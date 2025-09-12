import { Box, CurlyBraces, Layers, MousePointer, Settings, Wrench } from "lucide-react";
import customerImg from "../img/customer.jpg";

export default function Proposal() {
  return (
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
                  <CurlyBraces size={80} className="text-red-500 transform rotate-45" />
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
                      doté d’une solide maîtrise des logiciels de CAO/DAO
                      (SolidWorks, AutoCAD, CATIA), spécialisé dans la conception et
                      l’optimisation de pièces et d’assemblages mécaniques. Capable
                      de lire et interpréter des plans techniques,d’appliquer les normes industrielles et de collaborer
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
                    <a href="https://www.youtube.com/@studio3dconcept" target="_blank">
                    <button className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25 flex items-center gap-3">
                      <MousePointer
                        size={24}
                        className="group-hover:animate-pulse"
                        />
                      Explore My Work
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
    
  )
}
