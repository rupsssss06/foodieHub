import { Link } from "react-router-dom";
import "./About.css";
const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-content">
          <p className="about-tagline">GOOD FOOD, GOOD MOOD</p>
          <h1>Your cravings, our priority.</h1>
          <p className="about-description">
            {" "}
            Discover delicious food from restaurants around you. Explore menus,
            find your favourites, and make your next meal special.
          </p>
          <Link to="/" className="explore-btn">
            Explore Restaurants
          </Link>
        </div>

        <div className="about-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-ZTstUk7UO6aJe2URdYZh-u4Ce3QnPsORvwmR2DWTutiSYOSdALirOw&s=10"
            alt="food-served-image"
          />
        </div>
      </section>
      <section className="about-features">
        <h2>What Makes Us Special?</h2>

        <p className="features-subtitle">
          Everything you need to discover your next favourite meal.
        </p>

        <div className="features-container">
          <div className="feature-card">
            <span className="feature-icon">🍽️</span>
            <h3>Explore Restaurants</h3>
            <p>Discover restaurants and explore different cuisines.</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🔎</span>
            <h3>Quick Search</h3>
            <p>Find restaurants that match your cravings.</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">⭐</span>
            <h3>Top Rated Picks</h3>
            <p>Discover highly rated places to eat.</p>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          We believe finding your next favourite meal should be simple,
          enjoyable, and exciting. We're here to make exploring food a
          delightful experience.
        </p>
      </section>

      {/* Developer Section */}
      <section className="developer-section">
        {/* <h2>Meet the Developer</h2> */}
        <p className="developer-label">THE CREATOR</p>
        <div className="developer-card">
          <img
            className="developer-image"
            src="https://github.com/rupsssss06.png"
            alt="Rupa's profile"
          />

          <h3>Rupa Kumari</h3>
          <p className="developer-role">Developer of FoodieHub</p>

          <p className="developer-description">
            Passionate about web development, learning new technologies, and
            building user-friendly experiences.
          </p>

          <div className="developer-links">
            <a
              href="https://github.com/rupsssss06"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rupa-kumari-6b21182a6/?isSelfProfile=true"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rupakumari18105@gmail.com">
              Email Me
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Created with ❤️ by Rupa © 2026 FoodieHub</p>
      </footer>
    </div>
  );
};
export default About;
