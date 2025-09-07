import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
              <nav className="relative z-40 bg-white/80 backdrop-blur-md border-b border-red-100 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 py-4">
                  <div className="flex justify-between items-center">
                    <div className="text-3xl font-black">
                      <span className="text-gray-900">Nawfal</span>
                    </div>
                    
                    <div className="hidden md:flex space-x-8">
                      {[
                        { name: 'Home', path: '/' },
                        { name: 'Videos', path: '/videos' },
                      ].map((item) => (
                        <Link 
                          key={item.name}
                          to={item.path}
                          className="relative group text-gray-700 hover:text-red-600 transition-colors duration-300 font-semibold text-lg"
                        >
                          {item.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
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
                        {[
                        { name: 'Home', path: '/' },
                        { name: 'Videos', path: '/videos' },
                      ].map((item) => (
                          <Link
                            key={item.name}
                            to={`${item.path}`} 
                            className="text-gray-700 hover:text-red-600 transition-colors duration-300 font-semibold"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </nav>
        
    )
}
export default NavBar;