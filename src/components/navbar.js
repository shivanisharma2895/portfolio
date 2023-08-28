import React from "react";

export default function Navbar() {
    return (
        <header>
            <div className="navbar">
                <a className="name" href="#about">Shivani Sharma</a>
                <nav>
                    <a className="work" href="#projects">Past Work</a>
                    <a className="skl" href="#skills">Skills</a>
                </nav>
                <a className="hire" href="#contact">Hire Me</a>

            </div>
        </header>
    );
}