import React from "react";
function Contact() {
    return (


        <section className="section contact" id="contact">

            <div className="contact-box">

                <div className="section-title">

                    <p>
                        <span className="section-dot"></span>

                        CONNECT WITH ME
                    </p>

                    <h2>
                        Let's build something
                        <span> great.</span>
                    </h2>

                    <p className="contact-description">
                        I'm open to frontend development internships
                        and opportunities where I can learn, contribute
                        and grow.
                    </p>


                    <div className="contact-links">

                        <a href="mailto:lxt0067@gmail.com">

                            <div>
                                <img className="contact-icon" src="/image/mail.webp" />
                            </div>

                        </a>

                        <a href="https://github.com/lakshit-tak" target="_blank" rel="noreferrer">

                            <div>
                                <img className="contact-icon" src="/image/github.webp" />
                            </div>

                        </a>

                        <a href="https://linkedin.com/in/lakshit-tak" target="_blank" rel="noreferrer" >

                            <div>
                                <img className="contact-icon" src="/image/linkedin.webp" />
                            </div>

                        </a>
                    </div>

                </div>
            </div>


        </section >

    );
}

export default Contact;