import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img
            src={logo}
            alt="Violet Spark Logo"
            width="65"
            height="65"
            className="me-3"
          />

          <div className="d-flex flex-column">
            <span
              className="fw-bold fs-4"
              style={{ color: "#2A165D" }}
            >
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

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="menu">

          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#technology">
                Technologies
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#partners">
                Partners
              </a>
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

            {/* Book Meeting Button */}
            <li className="nav-item ms-lg-3">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSctD2_nIBmQvmfC97X-Ly1X2XIbfCRUUV4pNd3MA42tCcKP6g/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-violet rounded-pill px-4 py-2"
              >
                Book Meeting
              </a>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;