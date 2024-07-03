
import React from "react";


import image from "../images/BG2.avif";

const imageAltText = "Background image";

const description =
  " I am a self learned Full stack developer looking for oppurtunities  to learn and grow.";


const skillsList = [
  "Web design",
  "Innovative design",
  "Web Development",
  "Content creation",
  "Mobile user interfaces",

];


const detailOrQuote =
  "I am a passionate learner and curious  guy. I am a self motivated full stack developer.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;