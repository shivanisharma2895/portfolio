import React from "react";
import { Resume } from "../data/Resume";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <section id="abt">
            <header>
                <div className="navbar">

                    <nav>
                        <Link to="/">Shivani Sharma</Link>
                        <Link to="/projects">Past Work</Link>
                        <Link to="/skills">Skills</Link>
                        <Link to="/contact">Hire me</Link>
                    </nav>


                </div>
            </header>
            <main>
                <div className="intro">
                    <div className="content">
                        <h1>Hi , I'm Shivani Sharma.<br /> Frontend Developer(Immediate Joiner)</h1>
                        <p id="me">Frontend developer with knowledge of cutting edge technology such as React.js . <br />Seeking to use my technical skills to contribute to an organization's success.</p>
                        <div className="extras">
                            <a href="#contact">Work With Me</a>
                            <a href="#projects">See My Past Work</a>
                        </div>
                        <div>
                            <a href={Resume} download>
                                <button>Download CV</button>
                            </a>
                        </div>
                    </div>

                </div>
            </main>
        </section>
    );
}