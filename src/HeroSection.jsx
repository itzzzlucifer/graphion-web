const HeroSection = () => {
    return (<>
      <div className="hero-section section">
        <h1 className="hero-title">Ignite Your Online Presence with Graphion</h1>
        <div className="hero-desc">
              <p>
                  We are a web development and digital marketing company that helps businesses thrive online.
                  {/*Our teams of experts create stunning websites and implement effective marketing strategies to drive traffic,
                  generate leads, and increase conversions.*/}
              </p>
              <div className="article-actions-box">
                  <button className="cta-button">Get Started</button>
                  <button className="neutral-button">Learn More</button>
              </div>
        </div>
        <aside className="article-image-container">
          <img alt="" />
        </aside>
        <div className="hero-background-mask"></div>
      </div>
    </>
    );
  };
  
  export default HeroSection;
  