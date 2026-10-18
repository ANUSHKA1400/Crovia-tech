/* eslint-disable no-unused-vars */
import React from "react";
import "../../styles/program.css";

import roboticsImage1 from "../../assets/images/Robotic.jpg";
import roboticsImage2 from "../../assets/images/Robotic1.jpg";

import roboticsVideo1 from "../../assets/videos/Robotic.mp4";
import roboticsVideo2 from "../../assets/videos/Robotic1.mp4";

const projects = [
  {
    number: "PROJECT 01",
    title: "Robotics Fundamentals",
    subtitle: "Discover the World of Intelligent Machines",
    description:
      "Explore the fundamentals of robotics, including robot components, movement, sensors, and automation. Students learn how robots interact with their surroundings through practical activities and hands-on experimentation.",
    features: [
      "Understand robot components and their functions.",
      "Explore sensors, motors, and control systems.",
      "Learn how robots move and respond to their environment.",
      "Develop logical thinking and problem-solving skills.",
    ],
    image: roboticsImage1,
    video: roboticsVideo1,
    videoCaption:
      "Explore robot movement and the fundamental principles of robotics.",
  },
  {
    number: "PROJECT 02",
    title: "Robotic Movement and Automation",
    subtitle: "Build, Control, and Innovate",
    description:
      "Discover how robotic systems move and perform tasks. Students explore movement, automation, and control while learning how robotics can be used to solve practical, real-world problems.",
    features: [
      "Explore robotic movement and navigation.",
      "Understand basic automation concepts.",
      "Learn about robotic control systems.",
      "Discover real-world applications of robotics.",
    ],
    image: roboticsImage2,
    video: roboticsVideo2,
    videoCaption:
      "See robotics concepts demonstrated through a practical project.",
  },
];

function Robotics() {
  return (
    <main className="ai-projects-page">
      <header className="ai-projects-header">
        <span className="ai-projects-eyebrow">
          CROVIA TECHNOLOGY PROGRAMS
        </span>

        <h1>
          <span>Robotics</span> Engineering
        </h1>

        <p>
          Discover robotics through hands-on projects, intelligent
          machines, automation, and creative problem-solving.
        </p>
      </header>

      <section className="ai-projects-list">
        {projects.map((project) => (
          <article className="ai-project-row" key={project.number}>
            <div className="ai-project-image-wrap">
              <img
                className="ai-project-image"
                src={project.image}
                alt={project.title}
                loading="lazy"
              />

              <span className="ai-image-number">
                {project.number}
              </span>
            </div>

            <div className="ai-project-details">
              <span className="ai-project-label">
                ROBOTICS PROJECT
              </span>

              <h2>{project.title}</h2>

              <h3>{project.subtitle}</h3>

              <p className="ai-project-description">
                {project.description}
              </p>

              <ul className="ai-project-features">
                {project.features.map((feature) => (
                  <li key={feature}>
                    <span className="ai-check" aria-hidden="true">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ai-project-video-wrap">
              <div className="ai-video-heading">
                <span className="ai-video-indicator" />
                PROJECT DEMONSTRATION
              </div>

              <video
                className="ai-project-video"
                src={project.video}
                controls
                preload="metadata"
                playsInline
              >
                Your browser does not support video playback.
              </video>

              <p className="ai-project-video-caption">
                {project.videoCaption}
              </p>
            </div>
          </article>
        ))}
      </section>

      <footer className="ai-projects-footer">
        <p>
          © {new Date().getFullYear()} CROVIA Technology. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

export default Robotics;