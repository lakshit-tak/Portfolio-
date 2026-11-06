function Hero() {

    if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual"
}

    return (
        <section className="hero" id="home">

            <div className="hero-content">

                <p className="small-text">

                    <span className="section-dot"></span>

                    FRONTEND DEVELOPER
                </p>

                <p className="hello">
                    Hello, I'm
                </p>

                <h1 className="hero-name">
                    LAKSHIT<br />TAK
                </h1>

                <h2>
                    I build <span>modern web experiences.</span>
                </h2>

                <p className="hero-description">
                    I'm a B.Sc. Computer Science graduate focused on
                    frontend development, React.js and creating clean,
                    responsive and interactive websites.
                </p>

                <div className="hero-btns">

                    <a href="#projects" className="primary-btn btn">
                        View My Work
                        <span>↗</span>
                    </a>

                    <a href="#contact" className="btn">
                        Connect With Me
                    </a>

                </div>

                <div className="availability">
                    <span className="status-dot"></span>
                    Available for opportunities
                </div>

            </div>


            <div className="hero-img">

                <img
                    src="/image/lakshit.webp"
                    alt="Lakshit Tak"
                />

            </div>

        </section>
    );
}

export default Hero;