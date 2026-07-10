const technologies = [
  "🤖 Robotics",
  "🌐 IoT",
  "💻 Software Development",
  "🧠 Artificial Intelligence",
  "📊 Data Science",
  "📈 Data Analytics",
  "🔌 Basic Electronics"
];

function Technologies() {
  return (
    <section id="technology" className="py-5">

      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Technologies</h2>
        </div>

        <div className="row g-4">

          {technologies.map((tech, index) => (

            <div className="col-md-4" key={index}>

              <div className="card h-100 shadow-sm border-0 text-center p-4">

                <h4>{tech}</h4>

                <p className="text-muted mt-3">
                  Hands-on practical training with experienced engineers.
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Technologies;