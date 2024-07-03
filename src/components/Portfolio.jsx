

import React from "react";

import image from "../images/BG3.png";

const imageAltText = "Snippet from my Github Account";

const projectList = [
  {
    title: "Full stack Social media Application",
    description:
      "Developed a social media application using MERN. It includes features like Posting,Commenting,viewing friends and a lot.",
    url: "https://github.com/Araviind07/social-media",
  },
  {
    title: "Amazon Clone",
    description:
      "Developed a Amazon Clone for a university project. It includes features like product management, user management, and cart management.",
    url: "https://github.comAraviind07/Amazon",
  },
  
  {
    title: "Chat Application",
    description:
      "Developed a Chat application using MERN. It includes features like real time chat with friends.",
    url: "https://github.com/Araviind07/chat-application",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;