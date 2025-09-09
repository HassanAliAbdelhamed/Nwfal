import { Calculator, CurlyBraces, FileText, Play, Settings, Target, Wrench } from "lucide-react";

export default function Skills() {
  return (
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
                  <CurlyBraces className="w-5 h-5" />
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
  );
}
