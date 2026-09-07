/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";
import image from "../images/motion-background.jpg";
import { TAGS } from "../data/portfolioData";
import "../styles.css";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Highly motivated Master's student with a track record of international robotics competitions and hackathons. Dedicated team player who is known for sharing knowledge. Passionate about physics, robotics and everything around and in-between."
;

/**
 * Skills, grouped by theme. Each group re-uses a color from the TAGS
 * palette in ../data/portfolioData.js so this section visually matches
 * the tag pills in the Portfolio timeline below.
 */
const skillGroups = [
  {
    title: "Quantum Computing",
    tagKey: "quantum",
    items: [
      "Quantum Annealing & Optimization",
      "QML with PennyLane, QuTiP, Amplify",
      "Quantum Key Distribution (prepare-and-measure)",
    ],
  },
  {
    title: "Nanophotonics & Fabrication",
    tagKey: "photonics",
    items: [
      "PIC simulation & design",
      "Cleanroom fabrication (AMO, FZ Jülich)",
      "Raman spectroscopy, SEM, PXRD",
    ],
  },
  {
    title: "Machine Learning & AI",
    tagKey: "ml",
    items: [
      "PyTorch, MMPretrain",
      "Physics-informed generative models",
      "Conditional image & structure generation",
    ],
  },
  {
    title: "Robotics",
    tagKey: "robotics",
    items: [
      "ROS with Python and C++",
      "Robot Vision with PointCloud analysis",
      "Microcontroller programming",
    ],
  },
  {
    title: "Software & Systems",
    tagKey: "software",
    items: [
      "Docker, parallel programming (OpenMP)",
      "Linux and basics of DevOps",
      "SQL and NoSQL",
    ],
  },
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div className="about-section">
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <div className="skills-grid">
          {skillGroups.map((group) => {
            const tag = TAGS[group.tagKey];
            return (
              <div
                key={group.title}
                className="skill-card"
                style={{ borderTopColor: tag.color }}
              >
                <h3 className="skill-card__title" style={{ color: tag.color }}>
                  {group.title}
                </h3>
                <ul className="skill-card__list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <hr />
        <p className="about-quote">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
