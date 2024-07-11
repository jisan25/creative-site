const GetFree = () => {
  return (
    <section style={{ padding: "0px" }}>
      <h2 className="h2 font-bold mb-3">Get For Free</h2>
      <ul className="get-free">
        <li className="d-flex gap-2">
          <i
            className="bi bi-check-lg font-bold"
            style={{ color: "#32a581" }}
          ></i>{" "}
          <span>Resumes within 24 hours with Quote</span>
        </li>
        <li className="d-flex gap-2">
          <i className="bi bi-check-lg" style={{ color: "#32a581" }}></i>{" "}
          Bespoke Recruitment
        </li>
        <li className="d-flex gap-2">
          <i className="bi bi-check-lg" style={{ color: "#32a581" }}></i>
          Detailed analysis, technical consultation & documentation of your
          project by a senior Tech Lead(for technical domains)
        </li>
      </ul>
    </section>
  );
};

export default GetFree;
