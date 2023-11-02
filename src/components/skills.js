import React from "react";
import { skill } from "../data/skill";
import { GiSkills } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Skills() {
    return (
        <>
            <header>
                <div className="navbar">

                    <nav>
                        <Link to="/"> Shivani Sharma</Link>
                        <Link to="/projects">  Past Work</Link>
                        <Link to="/skills">Skills</Link>
                        <Link to="/contact">Hire Me</Link>
                    </nav>


                </div>
            </header>
            <section id="skills">

                <div>
                    <div>
                        <h1 id="hd"><GiSkills /> Skills</h1>

                    </div>
                    <div className="skills-name">
                        {skill.map((item) => (<span className="item-skill">{item}</span>))}
                    </div>
                </div>
            </section>
        </>
    );
}