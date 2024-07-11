import { Link } from "react-router-dom";

const Hiring = () => {
  return (
    <section className="text-center it-advantages">
      <div className="about__headline d-flex flex-column  align-items-center">
        <h4 className="h4 font-bold mb-4">
          Hiring Remote Staff Was Never This Easy
        </h4>
        <div className="dash-design text-center"></div>
      </div>
      <div className="row hiring gap-4">
        <div className="col-lg-3 col-12">
          <div className="card">
            <span>STEP 01</span>
            <div className="icon">
              <i style={{ color: "#32a581" }} className="bi bi-list-task"></i>
            </div>
            <div className="card-body">
              <h5 className="card-title">Brief Us</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-12">
          <div className="card">
            <span style={{ background: "#EF6F63" }}>STEP 02</span>
            <div className="icon" style={{ borderColor: "#EF6F63" }}>
              <i
                className="bi bi-graph-up-arrow"
                style={{ color: "#EF6F63" }}
              ></i>
            </div>
            <div className="card-body">
              <h5 className="card-title">Hand-pick Resources</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-12">
          <div className="card">
            <span style={{ background: "#4154F1" }}>STEP 03</span>
            <div className="icon" style={{ borderColor: "#4154F1" }}>
              <i
                style={{ color: "#4154F1" }}
                className="bi bi-microsoft-teams"
              ></i>
            </div>
            <div className="card-body">
              <h5 className="card-title">Choose Your Team</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-12">
          <div className="card">
            <span style={{ background: "#0a1846" }}>STEP 04</span>
            <div className="icon" style={{ borderColor: "#0a1846" }}>
              <i
                style={{ color: "#0a1846" }}
                className="bi bi-rocket-takeoff-fill"
              ></i>
            </div>
            <div className="card-body">
              <h5 className="card-title">Get Going</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hiring;
