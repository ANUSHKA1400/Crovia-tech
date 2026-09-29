import P2 from "../assets/images/P2.jpeg";
import P3 from "../assets/images/P3.jpeg";
import P4 from "../assets/images/P4.jpeg";
import P5 from "../assets/images/P5.jpeg";
import P6 from "../assets/images/P6.jpeg";

const projects = [
  {
    title: "Robotics",
    icon: "🤖",
    image: P2,
    desc: "Hands-on robotics projects using sensors, motors and controllers."
  },
  {
    title: "Artificial Intelligence",
    icon: "🧠",
    image: P3,
    desc: "Build AI models and intelligent applications through practical learning."
  },
  {
    title: "Internet of Things",
    icon: "🌐",
    image: P4,
    desc: "Create smart devices with IoT sensors and cloud connectivity."
  },
  {
    title: "Software Development",
    icon: "💻",
    image: P6,
    desc: "Design modern web and software applications using industry tools."
  },
  {
    title: "Data Science",
    icon: "📊",
    image: P5,
    desc: "Analyze datasets, visualize insights and solve real-world problems."
  },
  {
    title: "Data Analytics",
    icon: "📈",
    image: P6,
    desc: "Learn business intelligence and data-driven decision making."
  },
  {
    title: "Basic Electronics",
    icon: "🔌",
    image: P4,
    desc: "Understand electronic circuits and hardware fundamentals."
  },
  {
    title: "STEM Innovation",
    icon: "🚀",
    image: P5,
    desc: "Creative project-based STEM learning for future innovators."
  }
];

function Projects() {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">200+ Hands-on Projects</h2>

          <p className="section-subtitle">
            Students learn through real-world projects guided by experienced engineers.
          </p>
        </div>

        <div className="row g-4">

          {projects.map((item, index) => (

            <div className="col-lg-3 col-md-6" key={index}>

              <div className="card h-100 shadow-sm">

                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top"
                    style={{
                      height: "220px",
                      objectFit: "cover"
                    }}
                  />
                )}

                <div className="card-body text-center">

                  <div style={{ fontSize: "45px" }}>
                    {item.icon}
                  </div>

                  <h5 className="mt-3 fw-bold">
                    {item.title}
                  </h5>

                  <p className="text-muted">
                    {item.desc}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;