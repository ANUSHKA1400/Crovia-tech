/* eslint-disable no-unused-vars */

import React from "react";
import "../../styles/program.css";


import aerospaceImage1 from "../../assets/images/aerospace1.jpg";
import aerospaceImage2 from "../../assets/images/aerospace.jpg";

import aerospaceVideo1 from "../../assets/videos/Aerospace 1.mp4";
import aerospaceVideo2 from "../../assets/videos/Aerospace.mp4";
const projects = [
  {
    number: "01",
    title: "Aerospace Engineering Fundamentals",
    subtitle: "Understanding the science of flight",
    description:
      "Discover the principles of aerospace engineering, including aerodynamics, aircraft design, lift, thrust, and flight mechanics. Explore how engineers use science and technology to design aircraft and improve flight performance.",
    image: aerospaceImage1,
    imageAlt: "Aerospace engineering project",
    video: aerospaceVideo1,
    videoTitle: "Introduction to Aerospace Engineering",
    features: [
      "Understand the principles of flight",
      "Explore aerodynamics and lift",
      "Discover aircraft design concepts",
      "Learn aerospace engineering fundamentals",
    ],
  },
  {
    number: "02",
    title: "Aircraft and Space Technology",
    subtitle: "Exploring the future of flight",
    description:
      "Explore aerospace technologies used in aircraft, drones, and spacecraft. Discover how propulsion systems, navigation, materials, and engineering innovations support modern aviation and space exploration.",
    image: aerospaceImage2,
    imageAlt: "Aircraft and space technology",
    video: aerospaceVideo2,
    videoTitle: "Aerospace Technology in Action",
    features: [
      "Explore aircraft and spacecraft",
      "Learn about propulsion systems",
      "Discover drone technologies",
      "Understand aerospace applications",
    ],
  },
];

function Aerospace() {
  return (
    <main className="ai-projects-page">
      <header className="ai-projects-header">
        <span className="ai-projects-eyebrow">
          CROVIA TECHNOLOGY
        </span>

        <h1>
          Aerospace <span>Engineering</span>
        </h1>

        <p>
          Explore the science of flight and discover the aerospace
          technologies shaping aviation and space exploration.
        </p>
      </header>

      <section className="ai-projects-list">
        {projects.map((project) => (
          <article className="ai-project-row" key={project.number}>
            <div className="ai-project-image-wrap">
              <img
                className="ai-project-image"
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
              />

              <span className="ai-image-number">
                PROJECT {project.number}
              </span>
            </div>

            <div className="ai-project-details">
              <span className="ai-project-label">
                PROJECT {project.number}
              </span>

              <h2>{project.title}</h2>
              <h3>{project.subtitle}</h3>

              <p className="ai-project-description">
                {project.description}
              </p>

              <ul className="ai-project-features">
                {project.features.map((feature) => (
                  <li key={feature}>
                    <span className="ai-check">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ai-project-video-wrap">
              <div className="ai-video-heading">
                <span className="ai-video-indicator" />
                <span>PROJECT VIDEO</span>
              </div>

              <video
                className="ai-project-video"
                controls
                playsInline
                preload="metadata"
                aria-label={project.videoTitle}
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support video playback.
              </video>

              <p className="ai-project-video-caption">
                {project.videoTitle}
              </p>
            </div>
          </article>
        ))}
      </section>

      <footer className="ai-projects-footer">
        <p>
          © {new Date().getFullYear()} CROVIA Technology.
          All rights reserved.
        </p>
      </footer>
    </main>
  );
}

export default Aerospace;