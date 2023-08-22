import React from "react";

export default function Contact() {
    // const [name, setName] = useState("");
    // const [ email, setEmail] = useState("");
    // const [message, setMessage] = useState("");


    return (
        <form>
            <h2>Hire Me</h2>
            <div>
                <label>Name</label>
                <input type="text" id="name" />
            </div>
            <div>
                <label>Email</label>
                <input type="email" id="email" />
            </div>
            <div>
                <label>Message</label>
                <textarea id="message" />
            </div>
            <button type="submit"> Submit</button>
        </form>
    );
}