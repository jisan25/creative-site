const Values = () => {
  return (
    // values section
    <section id="values" className="values">
      <div className="container-fluid container-xl">
        {/* section header */}
        <header className="section-header">
          <h2>Our Values</h2>
          <p>Odit est perspiciatis laborum et dicta</p>
        </header>

        <div className="row">
          {/* value 1 */}
          <div className="col-lg-4">
            <div className="box">
              <img src="assets/img/values-1.png" className="img-fluid" alt="" />
              <h3>Cloud Based Solution</h3>
              <p>
              A cloud based solution refers to on-demand services shared cloud computing.
              </p>
            </div>
          </div>
          {/* value 2 */}
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box">
              <img src="assets/img/values-2.png" className="img-fluid" alt="" />
              <h3>Mobile Friendly</h3>
              <p>
                Making pages mobile-friendly increases user engagement on mobile devices.
              </p>
            </div>
          </div>
          {/* value 3 */}
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box">
              <img src="assets/img/values-3.png" className="img-fluid" alt="" />
              <h3>
                Cost Minimize
                </h3>
              <p>
              Cost minimization simply implies that firms are maximizing their productivity produce a specific output.
              </p>
            </div>
          </div>
      
        </div>
      </div>
    </section>
  );
};

export default Values;
