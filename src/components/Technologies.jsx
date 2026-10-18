
import { Link } from "react-router-dom";

const technologies = [
  {
    slug: "ai",
    icon: "bi-cpu",
    name: "Artificial Intelligence (AI)",
    description:
      "Explore intelligent systems, machine learning, and AI-powered applications.",
  },
  {
    slug: "claude-ai",
    icon: "bi-chat-square-text",
    name: "Claude AI",
    description:
      "Discover AI assistance for reasoning, writing, coding, and productivity.",
  },
  {
    slug: "generative-ai",
    icon: "bi-stars",
    name: "Generative AI",
    description:
      "Explore AI-powered text, image, and creative content generation.",
  },
  {
    slug: "robotics",
    icon: "bi-robot",
    name: "Robotics",
    description:
      "Discover robotics, sensors, automation, and intelligent machines.",
  },
  {
    slug: "iot",
    icon: "bi-router",
    name: "Internet of Things (IoT)",
    description:
      "Explore connected devices, smart sensors, and IoT applications.",
  },
  {
    slug: "software-development",
    icon: "bi-code-slash",
    name: "Software Development",
    description:
      "Learn about programming, application development, and software engineering.",
  },
  {
    slug: "web-development",
    icon: "bi-globe",
    name: "Web Development",
    description:
      "Explore modern websites, responsive interfaces, and web applications.",
  },
  {
    slug: "data-analysis",
    icon: "bi-bar-chart-line",
    name: "Data Analysis",
    description:
      "Turn data into meaningful insights through analysis and visualization.",
  },
  {
    slug: "block-coding",
    icon: "bi-puzzle",
    name: "Block Coding",
    description:
      "Discover visual programming and beginner-friendly coding projects.",
  },
  {
    slug: "aerospace",
    icon: "bi-rocket-takeoff",
    name: "Aerospace",
    description:
      "Explore aerospace engineering, aircraft, satellites, and space systems.",
  },
];

function Technologies() {
  return (
    <section id="technology" className="technologies-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="technologies-eyebrow">
            EXPLORE OUR EXPERTISE
          </span>

          <h2 className="technologies-title fw-bold mt-2">
            Our Technologies
          </h2>

          <p className="technologies-subtitle mt-3 mx-auto">
            Discover the technologies shaping the future through
            innovation, creativity, and practical projects.
          </p>
        </div>

        <div className="row g-4">
          {technologies.map((tech) => (
            <div
              className="col-sm-6 col-lg-4 col-xl-3"
              key={tech.slug}
            >
              <Link
                to={`/technology/${tech.slug}`}
                className="technology-card-link"
                aria-label={`Explore ${tech.name}`}
              >
                <div className="technology-card h-100">
                  <div className="technology-icon">
                    <i
                      className={`bi ${tech.icon}`}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="technology-card-title">
                    {tech.name}
                  </h3>

                  <p className="technology-card-description">
                    {tech.description}
                  </p>

                  <span className="technology-explore">
                    Explore Technology
                    <i
                      className="bi bi-arrow-right ms-2"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
