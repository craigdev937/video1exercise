import React from "react";
import "./Footer.css";
import { FaSearchLocation, FaLinkedin, FaMailBulk, 
    FaPhone, FaTwitter, FaFacebook } from "react-icons/fa";

export const Footer = (): JSX.Element => {
    return (
        <React.Fragment>
            <main className="footer">
                <section className="footer__container">
                    <aside className="left">
                        <div className="location">
                            <FaSearchLocation 
                                size={20}
                                style={{ color: "#fff", 
                                    marginRight: "2rem" }}
                            />
                            <div>
                                <p>123 Acme St.</p>
                                <h4>Houston, TX</h4>
                            </div>
                        </div>
                        <div className="phone">
                            <h4>
                                <FaPhone 
                                    size={20} 
                                    style={{ color: "#fff", 
                                        marginRight: "2rem" }} 
                                />
                                1-800-123-1234
                            </h4>
                        </div>
                        <div className="email">
                            <h4>
                                <FaMailBulk 
                                    size={20}
                                    style={{ color: "#fff", 
                                    marginRight: "2rem" }}
                                />
                                trips@galaxy.com
                            </h4>
                        </div>
                    </aside>
                    <aside className="right">
                        <h4>About the company</h4>
                        <p>"Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam"</p>
                        <div className="social">
                            <a href="https://www.facebook.com/" 
                            target="_blank">
                                <FaFacebook 
                                    size={30} 
                                    style={{ color: "#fff", 
                                        marginRight: "1rem" }} />
                            </a>
                            <a href="https://www.twitter.com/"
                            target="_blank">
                                <FaTwitter 
                                    size={30} 
                                    style={{ color: "#fff", 
                                        marginRight: "1rem" }} />
                            </a>
                            <a href="https://www.linkedin.com/"
                            target="_blank">
                                <FaLinkedin 
                                    size={30} 
                                    style={{ color: "#fff", 
                                        marginRight: "1rem" }} />
                            </a>
                        </div>
                    </aside>
                </section>
            </main>
        </React.Fragment>
    );
};


