import React from "react";
import { skill } from "../data/skill";

export default function Skills() {
    return (
        <section id="skills">
            <div>
                <div>
                    <h1 id="hd"> Skills</h1>

                </div>
                <div className="skills-name">
                    {skill.map((item) => (<span className="item-skill">{item}</span>))}
                </div>
            </div>
        </section>
    );
}