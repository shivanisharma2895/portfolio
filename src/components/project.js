import React from "react";
import { Projects } from "../data/projects";
import { MdOutlineAppRegistration } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Project() {
    return (
        <section id="projects">
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
            <div className="projectss">
                <div>
                    <h1 id="ap"><MdOutlineAppRegistration /> Apps I've Built </h1>
                </div>
                <div className="project-map">
                    {
                        Projects.map((project) => (
                            <div className="box">
                                <a href={project.link}>
                                    <div >
                                        <h2 className="my=projects">{project.title}</h2>


                                    </div>
                                </a>
                                <h2 id="sub">{project.subtitle}</h2>
                            </div>
                        ))
                    }

                </div>
            </div>

        </section>
    );
}