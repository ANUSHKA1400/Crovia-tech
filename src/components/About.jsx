import aboutImage from "../assets/images/V3.png";

function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">About CROVIA TECH</h2>
          <p className="text-muted">
            Empowering students through practical, industry-focused
            technology education.
          </p>
        </div>

        <div className="row align-items-center g-4">
          {/* Left Content */}
          <div className="col-lg-6">
            <h4 className="fw-bold mb-3">
              Building Future Innovators
            </h4>

            <p>
              CROVIA TECH is committed to making technology education
              practical, engaging, and industry-relevant. We offer
              hands-on learning experiences in Artificial Intelligence
              (AI), Robotics, the Internet of Things (IoT), Coding,
              Data Science, and Software Development.
            </p>

            <p>
              We bridge the gap between classroom learning and
              real-world applications through project-based STEM
              programs for learners from Kindergarten (KG) to higher
              education. Guided by experienced engineers, students
              develop problem-solving skills, creativity, and
              confidence in technology.
            </p>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 text-center">
            <img
              src={aboutImage}
              alt="Students exploring robotics and hands-on STEM projects"
              className="about-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;