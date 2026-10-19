import { useEffect, useRef, useState } from "react";

import roboticsImage from "../assets/images/Robotics.jpg";
import aiImage from "../assets/images/ai.jpg";
import iotImage from "../assets/images/IoT1.jpg";
import softwareImage from "../assets/images/software.jpg";
import dataScienceImage from "../assets/images/data science.jpg";
import stemImage from "../assets/images/STEM.jpg";

import roboticsVideo from "../assets/videos/Toy_robot_rolls_across.mp4";
import aiVideo from "../assets/videos/Animate_forest_scene.mp4";
import iotVideo from "../assets/videos/Robotic_vehicle_rolling.mp4";
import softwareVideo from "../assets/videos/Drone_powering_on.mp4";
import dataVideo from "../assets/videos/Self-balancing_robot.mp4";
import stemVideo from "../assets/videos/Toy_drone_lifting_off.mp4";

const projects = [
  {
    title: "Robotics",
    icon: "🤖",
    image: roboticsImage,
    video: roboticsVideo,
    desc: "Build hands-on robotics projects using sensors, motors, and controllers.",
  },
  {
    title: "Artificial Intelligence",
    icon: "🧠",
    image: aiImage,
    video: aiVideo,
    desc: "Explore AI concepts and intelligent applications through practical learning.",
  },
  {
    title: "Internet of Things",
    icon: "🌐",
    image: iotImage,
    video: iotVideo,
    desc: "Develop connected devices using sensors, electronics, and IoT technologies.",
  },
  {
    title: "Software Development",
    icon: "💻",
    image: softwareImage,
    video: softwareVideo,
    desc: "Design and develop modern websites and software applications.",
  },
  {
    title: "Data Science",
    icon: "📊",
    image: dataScienceImage,
    video: dataVideo,
    desc: "Analyze datasets, visualize insights, and solve real-world problems.",
  },
  {
    title: "STEM Innovation",
    icon: "🚀",
    image: stemImage,
    video: stemVideo,
    desc: "Turn creative ideas into practical projects through hands-on STEM learning.",
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const videoRefs = useRef({});

  const showProjectVideo = (title) => {
    setActiveProject(title);
  };

  const showProjectImage = (title) => {
    const video = videoRefs.current[title];

    if (video) {
      video.pause();
      video.currentTime = 0;
    }

    setActiveProject(null);
  };

  // Play the selected video after React renders it.
  useEffect(() => {
    if (!activeProject) return;

    const video = videoRefs.current[activeProject];
    if (!video) return;

    video.muted = false;

    video.play().catch(() => {
      // The visitor can press Play if autoplay is blocked.
    });
  }, [activeProject]);

  // Pause videos when this component unmounts.
  useEffect(() => {
    const videos = videoRefs.current;

    return () => {
      Object.values(videos).forEach((video) => {
        if (video) {
          video.pause();
        }
      });
    };
  }, []);

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <div className="projects-heading text-center mb-5">
          <span className="projects-eyebrow">
            LEARN • CREATE • INNOVATE
          </span>

          <h2 className="section-title">150+ Hands-on Projects</h2>

          <p className="section-subtitle">
            From intelligent robots to connected devices, students turn
            ideas into reality through practical learning guided by
            experienced engineers.
          </p>

          <div className="projects-heading-line" />
        </div>

        <div className="row g-4">
          {projects.map((item) => {
            const isPlaying = activeProject === item.title;

            return (
              <div className="col-12 col-md-6 col-lg-4" key={item.title}>
                <article
                  className={`project-card ${
                    isPlaying ? "project-card-playing" : ""
                  }`}
                >
                  {isPlaying ? (
                    <div className="project-media project-media-video">
                      <video
                        ref={(element) => {
                          videoRefs.current[item.title] = element;
                        }}
                        src={item.video}
                        className="project-video"
                        controls
                        autoPlay
                        playsInline
                        preload="metadata"
                        aria-label={`${item.title} demonstration video`}
                      >
                        Your browser does not support video playback.
                      </video>

                      <button
                        type="button"
                        className="project-back-control"
                        onClick={() => showProjectImage(item.title)}
                        aria-label={`Return to ${item.title} project image`}
                      >
                        <span aria-hidden="true">↩</span> Project details
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="project-image-trigger"
                      onClick={() => showProjectVideo(item.title)}
                      aria-label={`Play ${item.title} project video`}
                    >
                      <img
                        src={item.image}
                        alt={`${item.title} project`}
                        className="project-card-image"
                        loading="lazy"
                      />

                      <span
                        className="project-image-shade"
                        aria-hidden="true"
                      />

                      <span className="project-play-icon" aria-hidden="true">
                        <span>▶</span>
                      </span>

                      <span className="project-image-label">
                        Explore project <span aria-hidden="true">↗</span>
                      </span>
                    </button>
                  )}

                  <div className="project-card-content">
                    <div className="project-card-topline">
                      <span className="project-icon" aria-hidden="true">
                        {item.icon}
                      </span>

                      <span className="project-category-label">
                        Technology Program
                      </span>
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.desc}</p>

                    <div className="project-card-footer">
                      <span className="project-learning-label">
                        <span className="project-status-dot" />
                        Hands-on learning
                      </span>

                      {!isPlaying && (
                        <span className="project-open-hint">
                          View demo <span aria-hidden="true">→</span>
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
