/* eslint-disable no-unused-vars */
import React from "react";
import "../../styles/program.css";

import genAIImage1 from "../../assets/images/Gen AI.jpg";
import genAIImage2 from "../../assets/images/Gen AI1.png";

import genAIVideo1 from "../../assets/videos/GenAI.mp4";
import genAIVideo2 from "../../assets/videos/GenAI1.mp4";

const projects = [
  {
    number: "PROJECT 01",
    title: "Generative AI Fundamentals",
    subtitle: "Explore the Power of Artificial Intelligence",
    description:
      "Discover how Generative AI creates new content, including text, images, and creative ideas. Students explore AI tools and learn how to use them responsibly to solve problems and support innovation.",
    features: [
      "Understand the fundamentals of Generative AI.",
      "Explore AI-powered content creation tools.",
      "Learn effective prompt writing techniques.",
      "Understand responsible and ethical AI usage.",
    ],
    image: genAIImage1,
    video: genAIVideo1,
    videoCaption:
      "Explore how Generative AI tools transform ideas into creative outputs.",
  },
  {
    number: "PROJECT 02",
    title: "AI-Powered Creative Applications",
    subtitle: "Turn Ideas into Intelligent Solutions",
    description:
      "Learn how Generative AI can support creative projects, visual design, and everyday problem-solving. Students experiment with AI applications and develop innovative solutions through practical activities.",
    features: [
      "Create content using AI-powered applications.",
      "Experiment with AI image generation.",
      "Develop creative problem-solving skills.",
      "Build an understanding of real-world AI applications.",
    ],
    image: genAIImage2,
    video: genAIVideo2,
    videoCaption:
      "See Generative AI in action through creative and practical applications.",
  },
];

function GenerativeAI() {
  return (
    <main className="ai-projects-page">
      <header className="ai-projects-header">
        <span className="ai-projects-eyebrow">
          CROVIA TECHNOLOGY PROGRAMS
        </span>

        <h1>
          Generative <span>AI</span>
        </h1>

        <p>
          Discover the world of Generative AI through hands-on projects,
          creative experimentation, and intelligent problem-solving.
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
                GENERATIVE AI PROJECT
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

export default GenerativeAI;