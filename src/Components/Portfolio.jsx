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
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

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
      "Investigated the integration of stochastic hardware with probabilistic software algorithms to reduce resource consumption in training and using generative models. Explored the feasibility of implementing these solutions using widely available technologies. (Research Physics Projects, 2023)",
    url: "#",
  },
  {
    title: "Effective Nonlinear Optical Response of Colloidal Solutions of Dielectric Nanoparticles",
    description:
      "Investigated artificial nonlinearity in colloidal solutions of dielectric nanoparticles and the occurrence of hysteresis under total internal reflection. Conducted both experimental and numerical studies to describe these effects. (Collaborative Integration Challenge, 2023)",
    url: "#",
  },
  {
    title: "Research of the Narrowband IR Sensors for Spectroscopy",
    description:
      "Designed narrow-band filters based on metal resonant nanostructures to enhance the accuracy and reliability of measurements in a new sensing technique. Conducted experimental implementation and obtained transmission spectra of glucose and human blood. (Skills Keynotes, 2023)",
    url: "#",
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
