// cspell:ignore crovia
import heroVideo from "../assets/videos/hero.mp4";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-6">
            <span className="badge bg-primary mb-3">
              STEM Education | AI | Robotics | IoT
            </span>

            <h1 className="display-4 fw-bold mb-4">
              Learn.
              <span className="text-primary"> Build.</span>
              <br />
              Innovate.
            </h1>

            <p className="lead text-muted mb-4">
              Empowering students from KG to Higher Education through
              Artificial Intelligence, Robotics, IoT, Coding,
              Data Science and Software Development.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSctD2_nIBmQvmfC97X-Ly1X2XIbfCRUUV4pNd3MA42tCcKP6g/viewform?usp=sharing&ouid=109154905606320212042"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-violet"
              >
                Book Meeting
              </a>

              <a
                href="#technology"
                className="btn btn-outline-dark"
              >
                Explore Programs
              </a>
            </div>
          </div>

          {/* Right Video */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="video-card">
              <video
                className="hero-video"
                controls
                playsInline
                preload="metadata"
              >
                <source
                  src={heroVideo}
                  type="video/mp4"
                />
                Your browser does not support video playback.
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
