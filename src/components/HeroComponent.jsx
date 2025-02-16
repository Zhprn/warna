import "../styles/main.css"

const HeroComponent = () => {
    return (
        <section className="hero-section">
        <div className="hero-circle"></div>
        <div className="hero-content">
          <h1>we create stories <br /> beyond visuals</h1>
          <button className="hero-button">Get Started →</button>
        </div>
      </section>
      );
};

export default HeroComponent;