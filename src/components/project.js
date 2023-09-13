import React from "react";
import { Projects } from "../data/projects";

export default function Project() {
    return (
        <section id="projects">
            <div className="projectss">
                <div>
                    <h1 id="ap">Apps I've Built :-</h1>
                </div>
                <div className="project-map">
                    {
                        Projects.map((project) => (
                            <div className="box">
                                <a href={project.link}>
                                    <div >
                                        <h1 className="my=projects">{project.title}</h1>


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