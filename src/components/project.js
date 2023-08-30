import React from "react";
import { Projects } from "../data/projects";

export default function Project() {
    return (
        <section id="projects">
            <div>
                <div>
                    <h1>Apps I've Built</h1>
                </div>
                <div className="project-map">
                    {
                        Projects.map((project) => (
                            <a href={project.link}>
                                <div>
                                    <h2>{project.subtitle}</h2>
                                    <h1>{project.title}</h1>
                                </div>
                            </a>
                        ))
                    }

                </div>
            </div>

        </section>
    );
}