import React, { useState, useEffect } from 'react';
import { Home, Search, User, Moon, Sun, Undo } from 'lucide-react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [navigationHistory, setNavigationHistory] = useState([window.location.pathname]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Track navigation
  const handleNavigation = (path, e) => {
    e.preventDefault();
    const newHistory = [...navigationHistory.slice(0, currentIndex + 1), path];
    setNavigationHistory(newHistory);
    setCurrentIndex(newHistory.length - 1);
    window.location.href = path;
  };

  // Handle undo
  const handleUndo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      const previousPath = navigationHistory[currentIndex - 1];
      window.location.href = previousPath;
    }
  };

  const canUndo = currentIndex > 0;

  return (
    <nav className="bg-violet-600 dark:bg-violet-900 text-white p-4 transition-colors duration-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a 
          href="/" 
          className="text-2xl font-bold"
          onClick={(e) => handleNavigation('/', e)}
        >
          RoommateFinder
        </a>
        
        <div className="flex items-center gap-6">
          <a 
            href="/" 
            className="flex items-center gap-2 hover:text-violet-200"
            onClick={(e) => handleNavigation('/', e)}
          >
            <Home size={20} />
            <span className="hidden sm:inline">Home</span>
          </a>
          
          <a 
            href="/search" 
            className="flex items-center gap-2 hover:text-violet-200"
            onClick={(e) => handleNavigation('/search', e)}
          >
            <Search size={20} />
            <span className="hidden sm:inline">Find</span>
          </a>
          
          <a 
            href="/profile" 
            className="flex items-center gap-2 hover:text-violet-200"
            onClick={(e) => handleNavigation('/profile', e)}
          >
            <User size={20} />
            <span className="hidden sm:inline">Profile</span>
          </a>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-violet-500 dark:hover:bg-violet-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun size={20} className="text-yellow-300" />
            ) : (
              <Moon size={20} />
            )}
          </button>

          <button
            onClick={handleUndo}
            disabled={!canUndo}
            className={`p-2 rounded-full transition-colors ${
              canUndo 
                ? 'hover:bg-violet-500 dark:hover:bg-violet-800' 
                : 'opacity-50 cursor-not-allowed'
            }`}
            aria-label="Undo navigation"
          >
            <Undo size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;