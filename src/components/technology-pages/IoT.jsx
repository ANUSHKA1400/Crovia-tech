/* eslint-disable no-unused-vars */
import React from "react";
import "../../styles/program.css";

import iotImage1 from "../../assets/images/IoT1.jpg";
import iotImage2 from "../../assets/images/IoT2.jpg";

import iotVideo1 from "../../assets/videos/IoT1.mp4";
import iotVideo2 from "../../assets/videos/IoT2.mp4";

const projects = [
  {
    number: "PROJECT 01",
    title: "Smart Home Automation",
    subtitle: "Connect Devices and Control Your Environment",
    description:
      "Explore how the Internet of Things connects everyday devices to create smart environments. Students learn how sensors, controllers, and connected devices can work together to automate tasks and improve convenience.",
    features: [
      "Understand the fundamentals of IoT.",
      "Explore sensors and connected devices.",
      "Learn the basics of automation and control.",
      "Discover practical smart-home applications.",
    ],
    image: iotImage1,
    video: iotVideo1,
    videoCaption:
      "Explore how connected devices can automate everyday tasks.",
  },
  {
    number: "PROJECT 02",
    title: "Smart Monitoring System",
    subtitle: "Collect Data and Respond Intelligently",
    description:
      "Discover how IoT systems use sensors to collect information and monitor real-world conditions. Students explore how data can be used to trigger actions, display readings, and support smarter decisions.",
    features: [
      "Explore sensor-based monitoring.",
      "Understand how devices collect and share data.",
      "Learn the basics of real-time monitoring.",
      "Develop practical problem-solving skills.",
    ],
    image: iotImage2,
    video: iotVideo2,
    videoCaption:
      "See how IoT devices can monitor conditions and respond to data.",
  },
];

function IoT() {
  return (
    <main className="ai-projects-page">
      <header className="ai-projects-header">
        <span className="ai-projects-eyebrow">
          CROVIA TECHNOLOGY PROGRAMS
        </span>

        <h1>
          Internet of <span>Things (IoT)</span>
        </h1>

        <p>
          Discover connected devices, smart automation, sensors, and
          intelligent monitoring through practical Internet of Things
          projects.
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
                IoT PROJECT
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

export default IoT;