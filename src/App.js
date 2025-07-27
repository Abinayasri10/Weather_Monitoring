import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Weather from './pages/Weather';
import About from './pages/About';
import './App.css';


export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');
  
  // Close mobile menu when route changes or window resizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    setCurrentPath(window.location.pathname);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Update current path when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
      setMobileMenuOpen(false);
    };
    
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
  
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <Link to="/" className="navbar-brand">
            <span className="navbar-brand-icon">🌤️</span>
            WeatherView
          </Link>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
          
          <div className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            
            <NavLink 
              to="/weather" 
              className={({ isActive }) => 
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Weather
            </NavLink>
            
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </NavLink>

           

          </div>
        </nav>
        
        <main className="main-content page-transition">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        
        <footer className="app-footer">
          <p>© {new Date().getFullYear()} WeatherView | Created with ❤️</p>
        </footer>
      </div>
    </Router>
  );
}