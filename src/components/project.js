import React from "react";
import { Projects } from "../data/projects";

export default function Project() {
    return (
        <section id="projects">
            <div className="projectss">
                <div>
                    <h1>Apps I've Built</h1>
                </div>
                <div className="project-map">
                    {
                        Projects.map((project) => (
                            <div className="box">
                                <a href={project.link}>
                                    <div >
                                        <h1>{project.title}</h1>


                                    </div>
                                </a>
                                <h2>{project.subtitle}</h2>
                            </div>
                        ))
                    }

                </div>
            </div>

        </section>
    );
}