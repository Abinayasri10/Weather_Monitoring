import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-header">
          <h1 className="about-title">
            <i className="fas fa-info-circle"></i> About WeatherView
          </h1>
          <p className="about-subtitle">
            Your elegant companion for exploring weather conditions around the globe,
            delivering real-time forecasts with style and precision.
          </p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <h2 className="section-title">Our Mission</h2>
            <p>
              WeatherView was created with a simple but powerful mission: to provide
              users with accurate, easy-to-understand weather information in a
              beautiful and intuitive interface.
            </p>
            <p>
              Whether you're planning your day, organizing travel, or simply curious
              about conditions in another part of the world, WeatherView delivers
              the information you need at a glance.
            </p>
          </div>

          <div className="about-section">
            <h2 className="section-title">How It Works</h2>
            <p>
              Our application leverages the robust OpenWeatherMap API to fetch
              real-time weather data from thousands of weather stations worldwide.
              The data is then processed and presented in a clean, user-friendly
              format that makes it easy to understand at a glance.
            </p>
            <p>
              Simply enter any city name, and WeatherView will instantly display
              current conditions including temperature, humidity, wind speed, and
              a forecast description.
            </p>
          </div>

          <div className="about-section">
            <h2 className="section-title">Key Features</h2>
            <div className="feature-grid">
              <div className="feature-item">
                <div className="feature-icon">🔍</div>
                <h3 className="feature-title">Global Coverage</h3>
                <p className="feature-description">
                  Search for weather data in cities across the entire globe.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <h3 className="feature-title">Real-time Updates</h3>
                <p className="feature-description">
                  Get the latest weather information updated in real-time.
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">📱</div>
                <h3 className="feature-title">Responsive Design</h3>
                <p className="feature-description">
                  Enjoy a seamless experience on any device - desktop, tablet, or mobile.
                </p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2 className="section-title">Technology Stack</h2>
            <p>
              WeatherView is built using modern web technologies to ensure
              performance, reliability, and a smooth user experience:
            </p>
            <div className="technology-list">
              <span className="technology-item">
                <i className="fab fa-react"></i> React
              </span>
              <span className="technology-item">
                <i className="fab fa-js-square"></i> JavaScript
              </span>
              <span className="technology-item">
                <i className="fab fa-css3-alt"></i> CSS3
              </span>
              <span className="technology-item">
                <i className="fas fa-cloud-download-alt"></i> OpenWeatherMap API
              </span>
              <span className="technology-item">
                <i className="fas fa-route"></i> React Router
              </span>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <h2 className="section-title" style={{ marginLeft: 'auto', marginRight: 'auto' }}>Connect With Us</h2>
          <p>
            Have questions, feedback, or suggestions? We'd love to hear from you!
          </p>
          <div className="social-links">
            <a href="#" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}