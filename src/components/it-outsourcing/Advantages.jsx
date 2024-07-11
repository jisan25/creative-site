const Advantages = () => {
  return (
    <section className="text-center it-advantages">
      <div className="about__headline d-flex flex-column  align-items-center">
        <h4 className="h4 font-bold mb-4">
          3 key advantages of a remote workforce
        </h4>
        <div className="dash-design text-center"></div>
      </div>
      <div className="row advantages">
        <div className="col-lg-4">
          <div className="card">
            <div className="icon">
              <i className="bi bi-person-check-fill"></i>
            </div>
            <div className="card-body">
              <h5 className="card-title">Talent on-demand</h5>
              <p className="card-text">
                Hire a dedicated, skilled remote employee in less than 8 hours
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card">
            <div className="icon">
              <i className="bi bi-cash-coin"></i>
            </div>
            <div className="card-body">
              <h5 className="card-title">Zero overheads</h5>
              <p className="card-text">
                Say goodbye to profit-guzzing expenses like office rent, taxes,
                hardware, etc.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card">
            <div className="icon">
              <i className="bi bi-phone-fill"></i>
            </div>
            <div className="card-body">
              <h5 className="card-title">24&#215;7 support</h5>
              <p className="card-text">
                No downtime, no being standed midway in a project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
