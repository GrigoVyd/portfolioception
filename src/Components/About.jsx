/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";
import image from "../images/motion-background.jpg";
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
  "Highly motivated Master's student with a track-record of international robotics competitions. Dedicated team player who is known for sharing knowledge. Passionate about physics, robotics and everything around and in-between."
;

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Machine Learning with PyTorch",
  "Quantum Annealing",
  "ROS with Python and C++",
  "Robot Vision with PointCloud analysis",
  "SQL and no SQL",
  "Microcontroller programming",
  "Linux and basics of DevOps",
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
        <ul className="about-description">
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p className="about-quote">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
