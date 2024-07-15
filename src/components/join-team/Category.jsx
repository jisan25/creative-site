const Category = ({ jobList }) => {
  // switch tab functionality
  const handleChange = (e, tabContent) => {
    // get all nav buttons & remove active class
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((element) => {
      element.classList.remove("active");
    });
    // set active class to selected tab
    e.currentTarget.classList.add("active");

    // get all tab contents
    const allTabs = document.querySelectorAll(".tab-pane");
    // remove show & active class from all tabs
    allTabs.forEach((element) => {
      element.classList.remove("show");
      element.classList.remove("active");
    });
    // add show & active class to selected tabs
    document.getElementById(tabContent).classList.add("show");
    document.getElementById(tabContent).classList.add("active");
  };
  return (
    <div
      className="nav flex-column nav-pills me-3 tab-button"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      {jobList.map((job, index) => (
        <button
          className={`nav-link ${index == 0 && "active"}`}
          type="button"
          role="tab"
          onClick={(e) => handleChange(e, job.job_title)}
          style={{ fontSize: "20px" }}
        >
          {job.job_title}
        </button>
      ))}

      
    </div>
  );
};

export default Category;
