const Hero = ()=>{
    return(
        <main className="Hero">
        
        <div className="hero-content">
            <h1>Your feet deserves better</h1>
            <p>Shoes and similar garments ease locomotion and prevent injuries. Such footwear can also be used for fashion and adornment.</p>
            <div className="Hero-buttons">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>
            <div className="shopping">
                <p>Also Avialable on</p>
                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="logo" />
                    <img src="/images/flipkart.png" alt="flipkart-logo" />
                </div>
            </div>
        </div>
        <div className="hero-image">
            <img src="/images/hero-image.png" alt="hero-logo" />
        </div>
        </main>
    );
};
export default Hero;