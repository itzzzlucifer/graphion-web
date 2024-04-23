function NewsLetter(){
    return<>
        <div className="newsletter">
            <h1 className="newsletter-title">
                Stay Informed with Our Newsletter
            </h1>
            <p className="newsletter-desc">
                Get the latest updates, tips and insights delivered straight to your inbox.
            </p>
            <form className="newsletter-form form">
                <input className="input-field" placeholder="Your Email Address" name="email" type="email"/>
                <button type="submit" className="cta-button">Subscribe Now!</button>
            </form>
            <h6 className="newsletter-subtitle">By subscribing you agree to our terms and conditions</h6>
            <div className="newsletter-image-container"><img src="" alt="" /></div>
        </div>
    </>
}
export default NewsLetter;