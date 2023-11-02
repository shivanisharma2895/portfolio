import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <div className="navbar">


                <nav>
                    <Link to="/">Shivani Sharma</Link>
                    <Link to="/projects">Past Work</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/contact">Hire Me</Link>
                </nav>


            </div>

        </header>
    );
}