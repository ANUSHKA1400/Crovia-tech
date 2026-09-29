import img1 from "../assets/images/P1.jpg";
import img2 from "../assets/images/P2.jpg";
import img3 from "../assets/images/P3.jpg";
import img4 from "../assets/images/P4.jpg";
import img5 from "../assets/images/P5.jpg";
import img6 from "../assets/images/P6.jpg";
import img7 from "../assets/images/P7.jpg";
import img8 from "../assets/images/P8.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8
];

function Gallery() {
  return (
    <section id="gallery" className="py-5">

      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">
            Activity Gallery
          </h2>

          <p className="section-subtitle">
            Explore our workshops, robotics sessions, coding classes and
            STEM activities conducted across schools.
          </p>
        </div>

        <div className="row g-4 gallery">

          {images.map((image, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={index}>

              <div className="gallery-card">

                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="img-fluid"
                />

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Gallery;