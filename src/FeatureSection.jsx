const FeatureSection = () => {
    return (
        <div className="feature-section section">
            <div className="feature-left-article">
                <span className="feature-sub-title sub-title">Innovative</span>
                <h1 className="feature-title title">
                    Transforming Businesses with Cutting-Edge Web Development
                </h1>
                <p className="feature-desc">
                    At Graphion, we offer top-notch web development services that are designer to meet the unique needs of businesses. Our team of experts combines creativity and technical expertise to deliver stunning websites that drive results.
                </p>
                <div className="feature-details">
                    <span className="detail-text-bold">Expertise</span>
                    <span className="detail-text-bold">Quality</span>
                    <span className="detail-text">We have a deep understanding of the latest web development trends and technologies.</span>
                    <span className="detail-text">Our website are built with precision and attention to detail, ensuring a seamless user experience</span>
                </div>
                <div className="article-actions-box">
                    <button className="cta-button">Get In Touch</button>
                    <button className="neutral-button">Learn More</button>
                </div>
            </div>
            <aside className="feature-image-container article-image-container">
                <img alt="" />
            </aside>
      </div>
    );
  };
  
  export default FeatureSection;