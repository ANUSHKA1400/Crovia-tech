/* eslint-disable no-unused-vars */

import React from "react";
import "../../styles/program.css";

import aiImage from "../../assets/images/AI1.jpg";
import aiAssistanceImage from "../../assets/images/AI_assistance.jpg";

import aiVideo1 from "../../assets/videos/AI.mp4";
import aiVideo2 from "../../assets/videos/AI1.mp4";

import "../../styles/theme.css";

const projects = [
  {
    number: "01",
    title: "Artificial Intelligence Fundamentals",
    subtitle: "Building a smarter future with AI",
    description:
      "Discover how artificial intelligence enables computers to recognize patterns, understand information, and solve real-world problems. Explore the fundamentals of intelligent systems and their practical applications.",
    image: aiImage,
    imageAlt: "Artificial intelligence technology",
    video: aiVideo1,
    videoTitle: "Introduction to Artificial Intelligence",
    features: [
      "Understand AI fundamentals",
      "Explore machine learning concepts",
      "Discover real-world AI applications",
      "Learn how intelligent systems work",
    ],
  },
  {
    number: "02",
    title: "AI Assistance and Applications",
    subtitle: "Intelligence that helps people",
    description:
      "Explore how AI assistants and intelligent applications support people in everyday tasks. Learn about chatbots, language understanding, automation, and the possibilities of AI-powered solutions.",
    image: aiAssistanceImage,
    imageAlt: "Artificial intelligence assistance",
    video: aiVideo2,
    videoTitle: "AI Assistance in Action",
    features: [
      "Explore AI assistants and chatbots",
      "Understand language processing",
      "Discover automation opportunities",
      "Identify practical AI use cases",
    ],
  },
];

function AI() {
  return (
    <main className="ai-projects-page">
      <header className="ai-projects-header">
        <span className="ai-projects-eyebrow">
          CROVIA TECHNOLOGY
        </span>

        <h1>
          Artificial Intelligence <span>(AI)</span>
        </h1>

        <p>
          Discover intelligent technologies transforming the way
          we learn, create, and solve problems.
        </p>
      </header>

      <section className="ai-projects-list">
        {projects.map((project) => (
          <article className="ai-project-row" key={project.number}>
            {/* Left: Project Image */}
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

            {/* Middle: Project Description */}
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

            {/* Right: Project Video */}
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

export default AI;
