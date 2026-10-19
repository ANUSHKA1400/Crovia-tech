import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Robotics",
    icon: "🤖",
    image: "/project-assets/Robotics/Robot.jpg",
    video: "/project-assets/Robotics/Robot%20video.mp4",
    desc: "Build hands-on robotics projects using sensors, motors, and controllers.",
  },
  {
    title: "Artificial Intelligence",
    icon: "🧠",
    image: "/project-assets/AI/AI.jpg",
    video: "/project-assets/AI/AI%20video.mp4",
    desc: "Explore AI concepts and intelligent applications through practical learning.",
  },
  {
    title: "Internet of Things",
    icon: "🌐",
    image: "/project-assets/IoT/IoT.jpg",
    video: "/project-assets/IoT/IoT%20video.mp4",
    desc: "Develop connected devices using sensors, electronics, and IoT technologies.",
  },
  {
    title: "Software Development",
    icon: "💻",
    image: "/project-assets/Software/software.jpg",
    video: "/project-assets/Software/software%20video.mp4",
    desc: "Design and develop modern websites and software applications.",
  },
  {
    title: "Data Science",
    icon: "📊",
    image: "/project-assets/data%20science/data_science.jpg",
    video: "/project-assets/data%20science/data_science.mp4",
    desc: "Analyze datasets, visualize insights, and solve real-world problems.",
  },
  {
    title: "STEM Innovation",
    icon: "🚀",
    image: "/project-assets/STEM/STEM.jpg",
    video: "/project-assets/STEM/STEM%20video.mp4",
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
