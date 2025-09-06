import React from 'react';
import { Menu, X, Play, Mail, Phone, MapPin, Linkedin, Github, Youtube, Settings, Wrench, Zap, Target, Award, Users, ChevronRight, Cuboid as Cube, Layers, Box, MousePointer, Download, ExternalLink, Cpu, Cog, Compass, Ruler, Calculator, Palette } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSkill, setActiveSkill] = React.useState(0);

  const skills = [
    { name: 'SolidWorks', icon: Settings, color: 'from-red-500 to-red-600' },
    { name: 'AutoCAD', icon: Target, color: 'from-orange-500 to-red-500' },
    { name: 'CATIA', icon: Wrench, color: 'from-yellow-500 to-orange-500' },
    { name: '3D Modeling', icon: Cube, color: 'from-green-500 to-blue-500' },
    { name: 'FEA Analysis', icon: Layers, color: 'from-blue-500 to-purple-500' },
    { name: 'Project Management', icon: Users, color: 'from-purple-500 to-pink-500' },
    { name: 'Mechanical Design', icon: Cog, color: 'from-indigo-500 to-purple-500' },
    { name: 'CAM Programming', icon: Cpu, color: 'from-teal-500 to-blue-500' },
    { name: 'Technical Drawing', icon: Compass, color: 'from-emerald-500 to-teal-500' },
    { name: 'Precision Engineering', icon: Ruler, color: 'from-cyan-500 to-blue-500' },
    { name: 'Simulation', icon: Calculator, color: 'from-violet-500 to-purple-500' },
    { name: 'Product Design', icon: Palette, color: 'from-pink-500 to-red-500' }
  ];

  const catiaProjects = [
    {
      title: 'Advanced Engine Block Design',
      description: 'Complete V8 engine block modeling with thermal analysis and optimization',
      thumbnail: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoId: 'sample-video-1',
      tags: ['Thermal Analysis', 'V8 Engine', 'Optimization']
    },
    {
      title: 'Aircraft Wing Structure',
      description: 'Commercial aircraft wing design with advanced stress analysis',
      thumbnail: 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoId: 'sample-video-2',
      tags: ['Aerospace', 'Stress Analysis', 'Commercial']
    },
    {
      title: 'Industrial Gearbox Assembly',
      description: 'Heavy-duty gearbox design for manufacturing equipment',
      thumbnail: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoId: 'sample-video-3',
      tags: ['Industrial', 'Heavy-duty', 'Manufacturing']
    }
  ];

  const solidworksProjects = [
    {
      title: 'Robotic Arm Mechanism',
      description: '6-DOF industrial robotic arm with kinematic simulation',
      thumbnail: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoId: 'sample-video-4',
      tags: ['Robotics', '6-DOF', 'Simulation']
    },
    {
      title: 'Medical Device Component',
      description: 'Precision medical instrument housing and mechanism',
      thumbnail: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoId: 'sample-video-5',
      tags: ['Medical', 'Precision', 'Healthcare']
    },
    {
      title: 'Consumer Product Design',
      description: 'Ergonomic power tool design with manufacturing analysis',
      thumbnail: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoId: 'sample-video-6',
      tags: ['Consumer', 'Ergonomic', 'Power Tools']
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {i % 3 === 0 && <Cube size={20 + Math.random() * 30} className="text-red-500 transform rotate-45" />}
              {i % 3 === 1 && <Box size={15 + Math.random() * 25} className="text-blue-500 transform rotate-12" />}
              {i % 3 === 2 && <Layers size={18 + Math.random() * 28} className="text-purple-500 transform -rotate-12" />}
            </div>
          ))}
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
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
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Fixed YouTube Button */}
      <div className="fixed top-6 right-6 z-50">
        <a 
          href="https://youtube.com/@yourtechchannel" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl flex items-center gap-3 shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-red-500/25 backdrop-blur-sm border border-red-200"
        >
          <Youtube size={24} className="animate-pulse" />
          <span className="hidden sm:inline font-semibold">Subscribe</span>
        </a>
      </div>

      {/* Navigation */}
      <nav className="relative z-40 bg-white/80 backdrop-blur-md border-b border-red-100 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-black">
              <span className="text-gray-900">Sav</span>
              <span className="text-red-600 ml-1">3D</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="relative group text-gray-700 hover:text-red-600 transition-colors duration-300 font-semibold text-lg"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <button 
              className="md:hidden text-gray-700 hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-red-100">
              <div className="flex flex-col space-y-4">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-700 hover:text-red-600 transition-colors duration-300 font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Large 3D Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 animate-bounce opacity-20" style={{ animationDelay: '0s', animationDuration: '4s' }}>
              <Cube size={80} className="text-red-500 transform rotate-45" />
            </div>
            <div className="absolute top-40 right-20 animate-bounce opacity-15" style={{ animationDelay: '1s', animationDuration: '5s' }}>
              <Box size={70} className="text-blue-500 transform rotate-12" />
            </div>
            <div className="absolute bottom-40 left-20 animate-bounce opacity-25" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
              <Layers size={90} className="text-purple-500 transform -rotate-12" />
            </div>
            <div className="absolute top-60 right-40 animate-spin opacity-10" style={{ animationDuration: '20s' }}>
              <Settings size={60} className="text-green-500" />
            </div>
            <div className="absolute bottom-60 right-10 animate-pulse opacity-20">
              <Wrench size={50} className="text-orange-500 transform rotate-45" />
            </div>
          </div>

          <div className="relative z-10">
            <h1 className="text-7xl md:text-9xl font-black mb-8 leading-tight">
              <span className="block text-gray-900 animate-fade-in-up drop-shadow-lg">3D</span>
              <span className="block text-red-600 animate-fade-in-up drop-shadow-lg" style={{ animationDelay: '0.3s' }}>DESIGNER</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <p className="mb-4">
                Passionate <span className="text-red-600 font-bold">Mechanical Design Engineer</span> with 8+ years of experience 
                transforming innovative concepts into precise mechanical solutions.
              </p>
              <p>
                Specializing in advanced <span className="text-red-600 font-bold">CAD/CAM technologies</span> including 
                SolidWorks, AutoCAD, and CATIA for automotive, aerospace, and industrial applications.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              <button className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25 flex items-center gap-3">
                <MousePointer size={24} className="group-hover:animate-pulse" />
                Explore My Work
              </button>
              <button className="group border-2 border-red-600 hover:bg-red-600 text-red-600 hover:text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-3 bg-white/50 backdrop-blur-sm">
                <Download size={24} className="group-hover:animate-bounce" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              About <span className="text-red-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-red-100 hover:border-red-300 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <h3 className="text-4xl font-bold mb-6 text-red-600">Professional Journey</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                  <p>
                    With over 8 years of experience in mechanical design engineering, I specialize in 
                    creating innovative solutions for complex engineering challenges across automotive, 
                    aerospace, and industrial applications.
                  </p>
                  <p>
                    I have successfully led cross-functional teams in developing cutting-edge products 
                    from concept to manufacturing, utilizing advanced CAD/CAM software and simulation tools 
                    to ensure optimal performance and cost-effectiveness.
                  </p>
                  <p>
                    My passion for sharing knowledge has led me to create educational content on YouTube, 
                    where I demonstrate advanced modeling techniques and share industry best practices 
                    with aspiring engineers worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-gray-900">Technical Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  const isActive = index === activeSkill;
                  return (
                    <div 
                      key={index} 
                      className={`group transition-all duration-500 transform ${isActive ? 'scale-110 z-10' : 'hover:scale-105'}`}
                    >
                      <div className={`bg-white/90 backdrop-blur-sm p-6 rounded-2xl border-2 transition-all duration-300 shadow-lg hover:shadow-xl ${
                        isActive 
                          ? 'border-red-400 shadow-red-200' 
                          : 'border-gray-200 hover:border-red-300'
                      }`}>
                        <div className={`p-4 rounded-xl bg-gradient-to-r ${skill.color} mb-4 ${isActive ? 'animate-pulse' : ''}`}>
                          <Icon size={32} className="text-white mx-auto" />
                        </div>
                        <h4 className="font-bold text-center text-gray-800 text-sm leading-tight">
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              Featured <span className="text-red-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore my portfolio of mechanical design projects showcasing expertise in 
              various CAD platforms and engineering applications.
            </p>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
          </div>

          {/* CATIA Projects */}
          <div className="mb-20">
            <div className="flex items-center gap-6 mb-12">
              <div className="p-6 bg-red-600 rounded-3xl shadow-xl">
                <Settings className="text-white" size={50} />
              </div>
              <div>
                <h3 className="text-5xl font-bold text-gray-900">CATIA Projects</h3>
                <p className="text-gray-600 text-xl">Advanced surface modeling and analysis</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {catiaProjects.map((project, index) => (
                <div key={index} className="group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200 hover:border-red-300 transition-all duration-500 transform hover:-translate-y-6 hover:shadow-2xl hover:shadow-red-100">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-3 py-1 bg-red-600/90 text-white text-xs rounded-full font-semibold">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="text-white animate-pulse" size={60} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">{project.title}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <a 
                      href={`https://youtube.com/watch?v=${project.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors group/link"
                    >
                      <Youtube size={18} />
                      Watch on YouTube 
                      <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SolidWorks Projects */}
          <div>
            <div className="flex items-center gap-6 mb-12">
              <div className="p-6 bg-red-600 rounded-3xl shadow-xl">
                <Wrench className="text-white" size={50} />
              </div>
              <div>
                <h3 className="text-5xl font-bold text-gray-900">SolidWorks Projects</h3>
                <p className="text-gray-600 text-xl">Parametric modeling and simulation</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solidworksProjects.map((project, index) => (
                <div key={index} className="group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200 hover:border-red-300 transition-all duration-500 transform hover:-translate-y-6 hover:shadow-2xl hover:shadow-red-100">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-3 py-1 bg-red-600/90 text-white text-xs rounded-full font-semibold">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="text-white animate-pulse" size={60} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">{project.title}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <a 
                      href={`https://youtube.com/watch?v=${project.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors group/link"
                    >
                      <Youtube size={18} />
                      Watch on YouTube 
                      <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative z-10 bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-4xl font-bold mb-6">
                <span className="text-red-500">Get</span> In Touch
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Ready to collaborate on your next mechanical design project? 
                Let's discuss how I can bring your innovative ideas to life with cutting-edge 3D design solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-red-600 rounded-xl group-hover:bg-red-700 transition-colors">
                    <Mail className="text-white" size={20} />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">sav.designer@email.com</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-red-600 rounded-xl group-hover:bg-red-700 transition-colors">
                    <Phone className="text-white" size={20} />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-red-600 rounded-xl group-hover:bg-red-700 transition-colors">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-4xl font-bold mb-6 text-white">Quick Links</h3>
              <div className="space-y-4">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <a 
                    key={link}
                    href={`#${link.toLowerCase()}`} 
                    className="block text-gray-300 hover:text-red-500 transition-colors text-lg hover:translate-x-2 transform duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-4xl font-bold mb-6 text-white">Connect & Subscribe</h3>
              <div className="flex gap-4 mb-8">
                <a 
                  href="https://linkedin.com/in/savdesigner" 
                  className="p-4 bg-gray-800 hover:bg-red-600 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-500/25"
                >
                  <Linkedin size={24} className="text-white" />
                </a>
                <a 
                  href="https://github.com/savdesigner" 
                  className="p-4 bg-gray-800 hover:bg-red-600 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-500/25"
                >
                  <Github size={24} className="text-white" />
                </a>
                <a 
                  href="https://youtube.com/@savdesigner3d" 
                  className="p-4 bg-gray-800 hover:bg-red-600 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-500/25"
                >
                  <Youtube size={24} className="text-white" />
                </a>
              </div>
              
              <a 
                href="https://youtube.com/@savdesigner3d" 
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
              © 2024 Sav 3D Designer. All rights reserved. | Mechanical Design Engineer & 3D Specialist
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
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

export default App;