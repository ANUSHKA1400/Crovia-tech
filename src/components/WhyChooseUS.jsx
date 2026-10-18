import { Award, BookOpen, Cpu, Users } from "lucide-react";

function WhyChooseUS() {
  const features = [
    {
      icon: <Award size={45} className="text-primary" />,
      title: "150+ Projects",
      desc: "Hands-on project-based learning with real-world applications."
    },
    {
      icon: <Users size={45} className="text-primary" />,
      title: "Real Engineers",
      desc: "Training conducted by experienced engineers and industry professionals."
    },
    {
      icon: <Cpu size={45} className="text-primary" />,
      title: "Latest Technologies",
      desc: "Explore AI, Robotics, IoT, Software Development, Data Science and emerging technologies."
    },
    {
      icon: <BookOpen size={45} className="text-primary" />,
      title: "KG to Higher Education",
      desc: "Specialized learning programs designed for every stage of education."
    }
  ];

  return (
    <section id="whychooseus" className="py-5 bg-light">
      <div className="container">

        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="section-title">
            Why Choose Crovia Tech?
          </h2>

          <p className="section-subtitle">
            Delivering industry-focused STEM education through practical
            learning, innovation, and experienced engineering mentors.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="row g-4">

          {features.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>

              <div className="card border-0 shadow h-100 p-4 text-center">

                <div className="mb-3 d-flex justify-content-center">
                  {item.icon}
                </div>

                <h5 className="fw-bold">
                  {item.title}
                </h5>

                <p className="text-muted mb-0">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUS;