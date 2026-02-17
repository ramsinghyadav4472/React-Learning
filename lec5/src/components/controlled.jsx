import { useState } from "react";


export default function CForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit() {
        e.preventDefault();

        const name = e.target.elements[0].value;
        const email = e.target.elements[1].value;

        setSubmittedName(name);
        alert(`Uncontrolled Submitted: ${name} (${email})`);

        return (
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <button type="submit">Submit</button>
            </form>
        );

    }
}