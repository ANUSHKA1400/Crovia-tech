import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
      <a className="navbar-brand d-flex align-items-center" href="#">
  <img
    src={logo}
    alt="Violet Spark Logo"
    width="65"
    height="65"
    className="me-3"
  />
  <div className="d-flex flex-column">
  <span className="fw-bold fs-4" style={{ color: "#2A165D" }}>
    Violet Spark
  </span>

  <span
    className="text-uppercase"
    style={{
      fontSize: "11px",
      letterSpacing: "1px",
      color: "#6c757d",
    }}
  >
    Technologies Pvt. Ltd.
  </span>
</div>
</a>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">

          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#technology">Technologies</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#partners">Partners</a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="#whychooseus">
             Why Choose US
             </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/admin/login">
            Leadership
            </a>
            </li>

            <li className="nav-item ms-lg-3">
            <button className="btn btn-violet rounded-pill px-4 py-2">
             Book Meeting
             </button>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;