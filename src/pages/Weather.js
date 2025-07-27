import './Weather.css';
import { useState } from 'react';

export default function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const apiKey = "eb82c72654be5c4812468ca46a496bd5";
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      
      const data = await res.json();
      
      if (data.cod !== 200) {
        throw new Error(data.message || 'Failed to fetch weather data');
      }
      
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // Get appropriate weather icon
  const getWeatherIcon = () => {
    if (!weather) return '🔍';
    
    const condition = weather.weather[0].main.toLowerCase();
    
    if (condition.includes('clear')) return '☀️';
    if (condition.includes('cloud')) return '☁️';
    if (condition.includes('rain')) return '🌧️';
    if (condition.includes('snow')) return '❄️';
    if (condition.includes('thunder')) return '⚡';
    if (condition.includes('mist') || condition.includes('fog')) return '🌫️';
    return '🌡️';
  };

  return (
    <div className="weather-page">
      <h2><i className="fas fa-search-location"></i> Search Weather</h2>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city name"
          className="city-input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && fetchWeather()}
        />
        <button 
          className="btn" 
          onClick={fetchWeather}
          disabled={loading || !city.trim()}
        >
          {loading ? (
            <span>Loading...</span>
          ) : (
            <>
              <span>Get Weather</span>
              <i className="fas fa-search"></i>
            </>
          )}
        </button>
      </div>

      {error && (
        <div className="error-message">
          <i className="fas fa-exclamation-circle"></i> {error}
        </div>
      )}

      {weather && weather.main && (
        <div className="weather-result">
          <h3>
            <i className="fas fa-city"></i> {weather.name}, {weather.sys.country}
          </h3>
          
          <div className="weather-icon">
            {getWeatherIcon()}
          </div>
          
          <div className="weather-description">
            {weather.weather[0].description}
          </div>
          
          <div className="weather-info">
            <div className="weather-detail">
              <span className="detail-label">Temperature</span>
              <span className="detail-value">{Math.round(weather.main.temp)}°C</span>
            </div>
            
            <div className="weather-detail">
              <span className="detail-label">Feels Like</span>
              <span className="detail-value">{Math.round(weather.main.feels_like)}°C</span>
            </div>
            
            <div className="weather-detail">
              <span className="detail-label">Humidity</span>
              <span className="detail-value">{weather.main.humidity}%</span>
            </div>
            
            <div className="weather-detail">
              <span className="detail-label">Wind</span>
              <span className="detail-value">{Math.round(weather.wind.speed * 3.6)} km/h</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}