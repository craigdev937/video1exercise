import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = (): JSX.Element => {
    const [click, setClick] = React.useState(false);
    const handleClick = (): void => setClick(!click);

    const [color, setColor] = React.useState(false);
        const changeColor = () => {
            if (window.scrollY >= 100) {
                setColor(true);
            } else {
                setColor(false);
            }
        };
        window.addEventListener("scroll", changeColor);

    return (
        <React.Fragment>
            <main 
                className={color ? "header header-bg" : "header"}>
                <Link to="/"><h1>GLX TRavel</h1></Link>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/training">Training</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <section 
                    className="hamburger" 
                    onClick={handleClick}>
                    {click ? 
                        (   
                            <FaTimes 
                                size={20} 
                                style={{color: "#fff"}} 
                            /> 
                        ) :
                        (
                            <FaBars 
                                size={20} 
                                style={{color: "#fff"}} 
                            />
                    )}
                </section>
            </main>
            <Outlet />
        </React.Fragment>
    );
};


