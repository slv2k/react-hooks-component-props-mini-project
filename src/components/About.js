import React from "react";

function About({ imgSrc="https://via.placeholder.com/215", text }) {
    return (
        <aside>
            <img src={imgSrc} alt="blog logo" />
            <p>{text}</p>
        </aside>
    )
}

export default About;