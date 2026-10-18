/* eslint-disable no-unused-vars */
import React from "react";
import "../../styles/program.css";

import softwareImage1 from "../../assets/images/software.jpg";
import softwareImage2 from "../../assets/images/software1.png";

import softwareVideo1 from "../../assets/videos/software.mp4";
import softwareVideo2 from "../../assets/videos/software1.mp4";

const projects = [
  {
    number: "PROJECT 01",
    title: "Software Engineering Fundamentals",
    subtitle: "From Ideas to Working Applications",
    description:
      "Discover how software applications are designed, developed, and tested. Students explore programming fundamentals, logical thinking, and the software development process while learning how to turn ideas into practical digital solutions.",
    features: [
      "Understand the software development life cycle.",
      "Explore programming logic and problem-solving.",
      "Learn the fundamentals of application development.",
      "Discover software testing and debugging.",
    ],
    image: softwareImage1,
    video: softwareVideo1,
    videoCaption:
      "Explore software development concepts and the process of building applications.",
  },
  {
    number: "PROJECT 02",
    title: "Application Development and Innovation",
    subtitle: "Design, Develop, and Improve",
    description:
      "Explore how developers transform ideas into useful applications. Students learn about user interfaces, application functionality, debugging, and iterative improvement while discovering how software solves everyday challenges.",
    features: [
      "Explore application design and user interfaces.",
      "Understand how software features work together.",
      "Learn basic debugging and testing techniques.",
      "Develop creative thinking through digital projects.",
    ],
    image: softwareImage2,
    video: softwareVideo2,
    videoCaption:
      "Discover the journey from application design to a working software solution.",
  },
];

function SoftwareDevelopment() {
  return (
    <main className="ai-projects-page">
      <header className="ai-projects-header">
        <span className="ai-projects-eyebrow">
          CROVIA TECHNOLOGY PROGRAMS
        </span>

        <h1>
          Software <span>Development</span>
        </h1>

        <p>
          Build a strong foundation in software engineering through
          programming, application development, testing, and
          practical problem-solving.
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
                SOFTWARE DEVELOPMENT PROJECT
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

export default SoftwareDevelopment;