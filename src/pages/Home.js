import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  const [greeting, setGreeting] = useState('Welcome');
  
  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) setGreeting('Good morning');
    else if (hours < 15) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);
  
  return (
    <div className="home">
      <div className="card">
        <div className="header">
          <div className="app-icon">🌤️</div>
          <h1>WeatherView</h1>
        </div>
        
        <h2 className="greeting">{greeting}! Ready to explore the weather?</h2>
        
        <p className="description">
          Get real-time weather updates for any city around the world with our intuitive and beautiful interface.
        </p>
        
        <button className="cta-button">
            <Link to="/weather" className="hidden-link">
          <span>Explore Now</span>
          <i className="fas fa-arrow-right"></i>
          </Link>
          
        </button>
        
        <div className="features">
          <div className="feature">
            <div className="feature-icon">🔍</div>
            <div className="feature-text">Search any city</div>
          </div>
          <div className="feature">
            <div className="feature-icon">🌡️</div>
            <div className="feature-text">Detailed forecasts</div>
          </div>
          <div className="feature">
            <div className="feature-icon">📱</div>
            <div className="feature-text">Mobile friendly</div>
          </div>
        </div>
      </div>
      
      <div className="footer">
        © 2025 WeatherView | Real-time weather data at your fingertips
      </div>
    </div>
  );
}