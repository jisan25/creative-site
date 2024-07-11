const GoodCompany = () => {
  return (
    <section style={{ padding: "30px 0px" }}>
      <h2 className="h2 font-bold mb-4">Get For Free</h2>
      <div
        className="d-flex gap-3 text-center"
        style={{
          borderBottom: "1px solid #d3d3d3",
          maxWidth: "397px",
          maxHeight: "200px",
        }}
      >
        <div className="pe-4 pb-2" style={{ borderRight: "1px solid #d3d3d3" }}>
          <h4
            style={{ color: "#32a581", marginBottom: "0px" }}
            className="h4 font-bold"
          >
            2015
          </h4>
          <p>Est</p>
        </div>
        <div className="pe-4" style={{ borderRight: "1px solid #d3d3d3" }}>
          <h4
            style={{ color: "#32a581", marginBottom: "0px" }}
            className="h4 font-bold"
          >
            BASIS
          </h4>
          <p>MEMBER</p>
        </div>
        <div className="pe-4" style={{ borderRight: "1px solid #d3d3d3" }}>
          <h4
            style={{ color: "#32a581", marginBottom: "0px" }}
            className="h4 font-bold"
          >
            2
          </h4>
          <p>Offices</p>
        </div>
        <div className="pe-4" style={{ borderRight: "1px solid #d3d3d3" }}>
          <h4
            style={{ color: "#32a581", marginBottom: "0px" }}
            className="h4 font-bold"
          >
            100+
          </h4>
          <p>Staff</p>
        </div>
      </div>
    </section>
  );
};

export default GoodCompany;
