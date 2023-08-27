import React from "react";
import { useState } from "react";

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
        <form onSubmit={handleSubmit}>
            <h2>Hire Me</h2>
            <div>
                <label>Name</label>
                <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Email</label>
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Message</label>
                <textarea id="message" onChange={(e) => setMessage(e.target.value)} />
            </div>
            <button type="submit"> Submit</button>
        </form>
    );
}