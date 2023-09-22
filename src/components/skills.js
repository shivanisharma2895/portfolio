import React from "react";
import { skill } from "../data/skill";
import { GiSkills } from "react-icons/gi"

export default function Skills() {
    return (
        <>
            <header>
                <div className="navbar">

                    <nav>
                        <a className="name" href="/">Shivani Sharma</a>
                        <a className="work" href="/projects">Past Work</a>
                        <a className="skl" href="/skills">Skills</a>
                        <a className="hire" href="/contact">Hire Me</a>
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