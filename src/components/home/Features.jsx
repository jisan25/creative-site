const Features = () => {
  // to handle tab change
  const toggleTab = (e, id) => {
    const tab = document.getElementById(id);

    // get all tabls
    const allTabs = document.querySelectorAll(".tab-pane");
    // remove active class from other tabs
    allTabs.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });

    // get all tab buttons

    const tabButtons = document.querySelectorAll(".nav-link");

    // remove active class from other tab buttons
    tabButtons.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });

    // apply active class to the selected tab
    if (tab) {
      tab.classList.add("active");
    }
  };

  return (
    // features section
    <section id="features" className="features">
      <div className="container-fluid container-xl">
        {/* tab section */}
        <div className="row feture-tabs">
          <div className="col-lg-6">
            {/* tab section heading */}
            <h3>
              We focus on offering high quality services to create real value
              for our customers, assuring they can maximise the profits obtained
              from the machines they bought.
            </h3>

            {/* tab buttons */}
            <ul className="nav nav-pills mb-3">
              {/* tab button */}
              <li>
                <a
                  className="nav-link active"
                  style={{ cursor: "pointer" }}
                  onClick={(e) => toggleTab(e, "tab1")}
                >
                  Our Mission
                </a>
              </li>
              {/* tab button */}
              <li>
                <a
                  className="nav-link"
                  onClick={(e) => toggleTab(e, "tab2")}
                  style={{ cursor: "pointer" }}
                >
                  Our Vision
                </a>
              </li>
            </ul>
            {/* tab content */}
            <div className="tab-content">
              {/* tab */}
              <div className="tab-pane fade show active" id="tab1">
                <p>
                  Our mission is to enhance business growth of our customers
                  with creative design, development and to deliver market
                  defining high quality solutions that create value and reliable
                  competitive advantage to customers around the globe.
                </p>
              </div>
              {/* tab */}
              <div className="tab-pane fade show" id="tab2">
                <h2 style={{ fontSize: "1.5rem", fontWeight: "500" }}></h2>
                <p>
                  Our Vision at Creative Software is to be the most innovative
                  software company in any market. we choose to operate in, no
                  matter what country or industry.
                </p>
              </div>
              {/* tab */}
            </div>
          </div>
          {/* tab section image */}
          <div className="col-lg-6">
            <img src="/img/features-2.png" className="img-fluid" alt="" />
          </div>
        </div>
        {/* section header */}

        <header className="section-header features-wrapper">
          <h2>Features</h2>
          <p>
            We are highly experienced in offering offshore software,Website &
            Apps development. We make up the various busines industry
            automation.
          </p>
        </header>

        <div className="row">
          {/* feature image */}
          <div className="col-lg-6">
            <img src="/img/features.png" className="img-fluid" alt="" />
          </div>
          {/* feature contents */}
          <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
            <div className="row align-self-center gy-4">
              {/* feature */}
              <div className="col-md-6">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Customizability</h3>
                </div>
              </div>
              {/* feature */}
              <div className="col-md-6">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Integration Capabilities</h3>
                </div>
              </div>
              {/* feature */}
              <div className="col-md-6">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Security and Compliance</h3>
                </div>
              </div>
              {/* feature */}
              <div className="col-md-6">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Sustainable performance</h3>
                </div>
              </div>
              {/* feature */}
              <div className="col-md-6">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>User-Friendly Interface</h3>
                </div>
              </div>
              {/* feature */}
              <div className="col-md-6">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Scalability</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* after tab section */}
      </div>
    </section>
  );
};

export default Features;
