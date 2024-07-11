const Counts = () => {
  return (
    // counts section
    <section id="counts" className="counts">
      <div className="container-fluid container-xl">
        <div className="row gy-4">
          {/* count 1 */}
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <div>
                <span>233</span>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          {/* count 2 */}
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i
                className="bi bi-journal-richtext"
                style={{ color: "#ee6c20" }}
              ></i>
              <div>
                <span>521</span>
                <p>Projects</p>
              </div>
            </div>
          </div>
          {/* count 3 */}
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-headset" style={{ color: "#ee6c20" }}></i>
              <div>
                <span>1463</span>
                <p>Hours Of Support</p>
              </div>
            </div>
          </div>

          {/* count 4 */}

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-people" style={{ color: "#ee6c20" }}></i>
              <div>
                <span>15</span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
          {/* end count 4 */}
        </div>
      </div>
    </section>
  );
};

export default Counts;
