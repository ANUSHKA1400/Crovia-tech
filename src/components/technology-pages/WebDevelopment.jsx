/* eslint-disable no-unused-vars */

import React from "react";
import "../../styles/program.css";

import webImage1 from "../../assets/images/web.jpg";
import webImage2 from "../../assets/images/web1.jpg";

import webVideo1 from "../../assets/videos/web.mp4";
import webVideo2 from "../../assets/videos/web1.mp4";

const projects = [
  {
    number: "01",
    title: "Responsive Website Design",
    subtitle: "Create Websites for Every Screen",
    description:
      "Learn how to design and build responsive websites that work smoothly on desktops, tablets, and mobile devices. Students explore the fundamentals of HTML, CSS, and modern web design.",
    features: [
      "Learn HTML page structure and semantic elements",
      "Style web pages using CSS, layouts, and colors",
      "Build responsive designs for different screen sizes",
      "Create user-friendly website interfaces",
    ],
    image: webImage1,
    video: webVideo1,
    videoCaption:
      "Explore the process of designing and building a responsive website.",
  },
  {
    number: "02",
    title: "Interactive Web Development",
    subtitle: "Bring Websites to Life",
    description:
      "Discover how to create interactive web experiences using JavaScript and modern development techniques. Students learn to make websites more engaging and useful through dynamic features.",
    features: [
      "Understand JavaScript fundamentals",
      "Add interactive elements to web pages",
      "Respond to user actions and events",
      "Develop and test functional web projects",
    ],
    image: webImage2,
    video: webVideo2,
    videoCaption:
      "See how interactive web development turns ideas into working experiences.",
  },
];

function WebDevelopment() {
  return (
    <main className="ai-projects-page">
      <header className="ai-projects-header">
        <span className="ai-projects-eyebrow">
          CROVIA TECHNOLOGY PROGRAMS
        </span>

        <h1>Web Development</h1>

        <p>
          Design, develop, and bring ideas to life through websites.
          Explore practical projects that introduce students to web design,
          coding, and interactive digital experiences.
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
                WEB DEVELOPMENT PROJECT
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
          © {new Date().getFullYear()} CROVIA Technology. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}

export default WebDevelopment;
