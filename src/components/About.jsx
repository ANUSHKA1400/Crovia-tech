import aboutImage from "../assets/images/P1.jpeg";

function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">About Violet Spark Technologies</h2>
          <p className="text-muted">
            Empowering students with practical, industry-focused technology
            education.
          </p>
        </div>

        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-6">

            <h4 className="fw-bold mb-3">
              Building Future Innovators
            </h4>

            <p>
              Violet Spark Technologies Pvt. Ltd. is dedicated to providing
              practical, project-based learning in Artificial Intelligence,
              Robotics, IoT, Coding, Data Science, and Software Development.
            </p>

            <p>
              We bridge the gap between classroom education and industry by
              offering hands-on STEM programs from KG to Higher Education,
              conducted by experienced engineers.
            </p>

          </div>

          {/* Right Image */}
          <div className="col-lg-6 text-center">

            <img
              src={aboutImage}
              alt="Violet Spark Technologies"
              className="about-image"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;