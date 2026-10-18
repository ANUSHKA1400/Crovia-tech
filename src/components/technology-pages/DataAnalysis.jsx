/* eslint-disable no-unused-vars */
import React from "react";
import "../../styles/program.css";

import dataAnalysisImage1 from "../../assets/images/Data analysis.jpg";
import dataAnalysisImage2 from "../../assets/images/Data analysis1.jpg";

import dataAnalysisVideo1 from "../../assets/videos/Data analysis.mp4";
import dataAnalysisVideo2 from "../../assets/videos/Data analysis1.mp4";

const projects = [
  {
    number: "PROJECT 01",
    title: "Data Analysis Fundamentals",
    subtitle: "Turn Raw Data into Meaningful Insights",
    description:
      "Discover how data helps us understand information and make better decisions. Students explore data collection, organization, visualization, and interpretation while learning how to identify patterns and transform raw information into meaningful insights.",
    features: [
      "Understand the fundamentals of data collection and organization.",
      "Explore charts, graphs, and data visualization.",
      "Learn to identify patterns and trends in datasets.",
      "Develop analytical thinking and decision-making skills.",
    ],
    image: dataAnalysisImage1,
    video: dataAnalysisVideo1,
    videoCaption:
      "Explore the fundamentals of data analysis and discover how information becomes meaningful insights.",
  },
  {
    number: "PROJECT 02",
    title: "Data Visualization and Insights",
    subtitle: "Discover Patterns. Communicate Insights.",
    description:
      "Explore how data can reveal patterns, explain trends, and solve real-world problems. Students learn to interpret information, compare datasets, and present findings through visualizations while developing practical analytical and problem-solving skills.",
    features: [
      "Explore data interpretation and comparison techniques.",
      "Understand how to recognize patterns and trends.",
      "Learn to present information through visualizations.",
      "Develop problem-solving skills using data-driven insights.",
    ],
    image: dataAnalysisImage2,
    video: dataAnalysisVideo2,
    videoCaption:
      "Discover how data visualization helps communicate patterns, trends, and useful insights.",
  },
];

function DataAnalysis() {
  return (
    <main className="ai-projects-page">
      <header className="ai-projects-header">
        <span className="ai-projects-eyebrow">
          CROVIA TECHNOLOGY PROGRAMS
        </span>

        <h1>
          Data <span>Analysis</span>
        </h1>

        <p>
          Discover the power of data through analysis, visualization,
          pattern recognition, and practical problem-solving.
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
                DATA ANALYSIS PROJECT
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

export default DataAnalysis;