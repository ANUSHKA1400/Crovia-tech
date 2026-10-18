/* eslint-disable no-unused-vars */

import React from "react";
import "../../styles/program.css";

import claudeImage from "../../assets/images/claude_AI.png";
import claudeAIImage2 from "../../assets/images/claude_AI 2.jpg";

import claudeVideo1 from "../../assets/videos/Claude_AI 1.mp4";
import claudeVideo2 from "../../assets/videos/Claude_AI.mp4";
const projects = [
  {
    number: "01",
    title: "Claude AI Fundamentals",
    subtitle: "Exploring conversational artificial intelligence",
    description:
      "Discover Claude, an AI assistant designed to help people understand information, work with text, analyze ideas, and solve problems. Explore how conversational AI can support learning, creativity, and productivity.",
    image: claudeImage,
    imageAlt: "Claude AI project",
    video: claudeVideo1,
    videoTitle: "Introduction to Claude AI",
    features: [
      "Understand conversational AI",
      "Explore natural language interactions",
      "Learn how AI assists with information",
      "Discover responsible AI use",
    ],
  },
  {
    number: "02",
    title: "Claude AI Assistance and Applications",
    subtitle: "Turning ideas into practical solutions",
    description:
      "Explore how Claude can assist with writing, summarization, brainstorming, coding, and analyzing information. Learn how to communicate clear instructions and evaluate AI-generated responses.",
    image: claudeAIImage2,
    imageAlt: "Claude AI assistance and applications",
    video: claudeVideo2,
    videoTitle: "Claude AI in Action",
    features: [
      "Explore writing and summarization",
      "Practice prompt writing",
      "Discover coding and research assistance",
      "Evaluate AI-generated responses",
    ],
  },
];

function Claude() {
  return (
    <main className="ai-projects-page">
      <header className="ai-projects-header">
        <span className="ai-projects-eyebrow">
          CROVIA TECHNOLOGY
        </span>

        <h1>
          Claude <span>AI</span>
        </h1>

        <p>
          Explore conversational AI and discover how intelligent
          assistants can support learning, creativity, and problem-solving.
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

export default Claude;