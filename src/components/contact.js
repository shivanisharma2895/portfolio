import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error));
    }

    return (
        <section id="contact">
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
            <form onSubmit={handleSubmit}>
                <h2 className="hire-me">Hire Me</h2>
                <div>
                    <label>Name :</label>
                    <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email :</label>
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div id="msg">
                    <label>Message :</label>
                    <textarea id="message" onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button type="submit"> Submit</button>
            </form>
        </section>
    );
}