/* eslint-disable no-unused-vars */
import React from "react";
import "../../styles/program.css";

import blockCodingImage1 from "../../assets/images/block coding.png";
import blockCodingImage2 from "../../assets/images/block coding1.jpg";

import blockCodingVideo1 from "../../assets/videos/block coding.mp4";
import blockCodingVideo2 from "../../assets/videos/block coding1.mp4";

const projects = [
  {
    number: "PROJECT 01",
    title: "Introduction to Block Coding",
    subtitle: "Learn Programming Visually",
    description:
      "Discover programming through a visual, drag-and-drop coding environment. Students arrange colorful code blocks to create instructions, understand programming logic, and bring interactive ideas to life without needing to memorize complex syntax.",
    features: [
      "Understand sequences and programming logic.",
      "Explore events, loops, and conditional blocks.",
      "Create simple animations and interactive projects.",
      "Develop computational thinking and problem-solving skills.",
    ],
    image: blockCodingImage1,
    video: blockCodingVideo1,
    videoCaption:
      "Explore how visual programming blocks are used to create interactive projects.",
  },
  {
    number: "PROJECT 02",
    title: "Block Coding for Robotics",
    subtitle: "Turn Visual Code into Real-World Actions",
    description:
      "Explore how block-based programming can control robotic devices and simulated machines. Students connect visual instructions with movement, actions, and sensor-based responses to understand the relationship between coding and robotics.",
    features: [
      "Build programs using drag-and-drop code blocks.",
      "Learn how commands control robotic movement.",
      "Explore sequences, loops, and conditional actions.",
      "Develop logical thinking through practical challenges.",
    ],
    image: blockCodingImage2,
    video: blockCodingVideo2,
    videoCaption:
      "Discover how block-based instructions can be used in robotics and automation.",
  },
];

function BlockCoding() {
  return (
    <main className="ai-projects-page">
      <header className="ai-projects-header">
        <span className="ai-projects-eyebrow">
          CROVIA TECHNOLOGY PROGRAMS
        </span>

        <h1>
          Block <span>Coding</span>
        </h1>

        <p>
          Learn programming through visual creativity, interactive
          challenges, and hands-on coding projects that make
          computational thinking accessible and fun.
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
                BLOCK CODING PROJECT
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

export default BlockCoding;