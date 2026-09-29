import { Navigate, useNavigate } from "react-router-dom";

import Anurag from "../assets/images/Leadership/Anurag.png";
import kashish from "../assets/images/Leadership/Kashish.png";
import riyaj from "../assets/images/Leadership/Riyaj.png";
import arvind from "../assets/images/Leadership/Arvind.png";
import mritunjay from "../assets/images/Leadership/Mritunjay.png";

function Leadership() {

  const navigate = useNavigate();

  // Protect the page
  if (!localStorage.getItem("isAdmin")) {
    return <Navigate to="/admin/login" replace />;
  }

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin/login");
  };

  // Featured CEO
  const ceo = {
    image: Anurag,
    name: "Er. Anurag Singh",
    role: "Chief Executive Officer (CEO)",
    desc: "As CEO of Violet Spark Technologies Pvt. Ltd., he is passionate about empowering the next generation through hands-on learning in AI, Robotics, Coding, IoT, and STEM. With expertise in Artificial Intelligence, Machine Learning, and Software Development, he is committed to bridging the gap between education and industry through innovation-driven learning."
  };

  // Leadership Team
  const leaders = [
    {
      image: riyaj,
      name: "Er. Riyaj Mohammad",
      role: "Founder & Director",
      desc: "Leading Violet Spark Technologies with a vision to provide practical STEM education through AI, Robotics, IoT, Data Science and Engineering."
    },

    {
      image: mritunjay,
      name: "Er. Mritunjay Awasthi",
      role: "Managing Director",
      desc: "Committed to bridging classroom learning and industry through practical, project-based STEM education."
    },

    {
      image: kashish,
      name: "Er. Kashish Tiwari",
      role: "Co-Founder & Manager",
      desc: "Driving innovation in AI, Full Stack Development, Product Engineering and hands-on technical education for future innovators."
    },

    {
      image: arvind,
      name: "Er. Arvind Yadav",
      role: "Research & Development Manager",
      desc: "Focused on AI, Generative AI, Robotics, IoT and Software Development while inspiring students to build real-world solutions."
    }
  ];

  return (

    <section className="py-5 bg-light">

      <div className="container">

        {/* Logout Button */}
        <div className="d-flex justify-content-end mb-4">
          <button
            className="btn btn-outline-danger"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

        <div className="text-center mb-5">

          <h2 className="section-title">
            Leadership Team
          </h2>

          <p className="section-subtitle">
            Meet the experienced professionals driving innovation and practical technology education.
          </p>

        </div>

        {/* CEO */}

        <div className="row justify-content-center mb-5">

          <div className="col-lg-6 col-md-8">

            <div className="card border-0 shadow h-100 text-center">

              <img
                src={ceo.image}
                alt={ceo.name}
                className="leader-image"
              />

              <div className="card-body">

                <span className="badge bg-primary mb-3 fs-6">
                  Chief Executive Officer
                </span>

                <h3 className="fw-bold">
                  {ceo.name}
                </h3>

                <h5 className="text-primary mb-3">
                  {ceo.role}
                </h5>

                <p className="text-muted">
                  {ceo.desc}
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Leadership Team */}

        <div className="row g-4">

          {leaders.map((leader, index) => (

            <div className="col-lg-3 col-md-6" key={index}>

              <div className="card border-0 shadow h-100 text-center">

                <img
                  src={leader.image}
                  alt={leader.name}
                  className="leader-image"
                />

                <div className="card-body">

                  <h5 className="fw-bold">
                    {leader.name}
                  </h5>

                  <h6 className="text-primary mb-3">
                    {leader.role}
                  </h6>

                  <p className="text-muted">
                    {leader.desc}
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

export default Leadership;