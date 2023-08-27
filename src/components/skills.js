import React from "react";
import { skill } from "../data/skill";

export default function Skills() {
    return (
        <section id="skills">
            <div>
                <div>
                    <h1> Skills</h1>
                    <p></p>
                </div>
                <div>
                    {skill.map((item) => (<span>{item}</span>))}
                </div>
            </div>
        </section>
    );
}