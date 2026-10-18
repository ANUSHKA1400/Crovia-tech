function Stats() {
  const stats = [
    ["150+", "Projects"],
    ["KG to Higher", "Education Programs"],
    ["Industry Experts", "Real Engineer Mentors"],
    ["7+", "Technologies"],
  ];

  return (
    <section className="stats-section py-5">
      <div className="container">
        <div className="row text-center g-4">
          {stats.map((item, index) => (
            <div className="col-6 col-lg-3" key={index}>
              <div className={`counter counter-${index + 1}`}>
                <h2>{item[0]}</h2>
                <p>{item[1]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;