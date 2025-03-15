/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

    
import image from "../images/minh-pham-lB9ylP8e9Sg-unsplash.jpg";

const imageAltText = "Photo by @minhphamdesign on Unsplash";
/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Developing Generative Algorithms for Quantum Annealing",
    description:
      "Investigated the integration of stochastic hardware with probabilistic software algorithms to reduce resource consumption in training and using generative models. Explored the feasibility of implementing these solutions using widely available technologies.",
    url: "#",
    skills: ["Quantum Computing", "Algorithms", "Machine Learning"],
  },
  {
    title: "Effective Nonlinear Optical Response of Colloidal Solutions of Dielectric Nanoparticles",
    description:
      "Investigated artificial nonlinearity in colloidal solutions of dielectric nanoparticles and the occurrence of hysteresis under total internal reflection. Conducted both experimental and numerical studies to describe these effects.",
    url: "#",
    skills: ["Optics", "Nanotechnology", "Experimental Physics"],
  },
  {
    title: "Research of the Narrowband IR Sensors for Spectroscopy",
    description:
      "Designed narrow-band filters based on metal resonant nanostructures to enhance the accuracy and reliability of measurements in a new sensing technique. Conducted experimental implementation and obtained transmission spectra of glucose and human blood.",
    url: "#",
    skills: ["Spectroscopy", "Nanotechnology", "Biomedical Engineering"],
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
          <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
            Photo by <a href="https://unsplash.com/@minhphamdesign?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Minh Pham</a> on <a href="https://unsplash.com/photos/brown-and-white-wooden-desk-with-chair-and-laptop-lB9ylP8e9Sg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </p>
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: "#4CAF50",
                      borderRadius: "5px",
                      padding: "0.2rem 0.5rem",
                      fontSize: "0.8rem",
                      color: "#fff",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
