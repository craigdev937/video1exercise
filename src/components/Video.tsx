import React from "react";
import "./Video.css";
import { Link } from "react-router-dom";
import space from "../assets/space.mp4";

export const Video = (): JSX.Element => {
    return (
        <React.Fragment>
            <main className="hero">
                <video autoPlay loop id="video">
                    <source src={space} type="video/mp4" />
                </video>
                <section className="content">
                    <h1>Galaxy. Travel.</h1>
                    <p>World's first civilian space travel.</p>
                    <aside>
                        <Link 
                            to="/training" 
                            className="btn"
                            >Training
                        </Link>
                        <Link 
                            to="/contact" 
                            className="btn btn-light"
                            >Launch
                        </Link>
                    </aside>
                </section>
            </main>
        </React.Fragment>
    );
};


