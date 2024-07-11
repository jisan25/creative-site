const Resources = () => {
  return (
    <section className="resource__sec">
      <div className="d-flex gap-5 justify-content-between">
        {/* column */}
        <div className="all-resources">
          {/* col heading */}
          <h2 className="mb-3 h4 font-bold">LEARN MORE</h2>
          {/* column content */}
          {/* <a href={"#"}>
            <h4 className={`${"mb-3"} ${roboto.className}`}>
              <i className="bi bi-asterisk"></i> All Resources
            </h4>
          </a> */}
          <a href={"/documentation"}>
            <h4 className={`${"mb-3"}`}>
              <i className="bi bi-asterisk"></i> Documentation
            </h4>
          </a>
          <a href={"#"}>
            <h4 className={`${"mb-3"}`}>
              <i className="bi bi-pen-fill"></i> Blog
            </h4>
          </a>
          <a href={"/faqs"}>
            <h4 className={`${"mb-3"}`}>
              <i className="bi bi-patch-question-fill"></i> FAQS
            </h4>
          </a>
        </div>

        {/* column */}
        <div className="resource-col-middle d-flex align-items-center justify-content-center text-center mr-3">
          <div className="">
            <h4 className="mb-1 h6">
              24/7 support from Createive Software internal experts
            </h4>
            <a
              className="company-a"
              href="#"
              style={{
                color: "ghostwhite",
                display: "inline",
                marginLeft: "0px",
                paddingLeft: "0px",
              }}
            >
              Let's talk <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
