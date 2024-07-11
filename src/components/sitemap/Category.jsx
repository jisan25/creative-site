const Category = () => {
  // site map switch tabs functionality
  const handleChane = (e, page) => {
    // get all tab buttons & remove active class & show active class to selected
    const allTabButtons = document.querySelectorAll(".nav-link");
    allTabButtons.forEach((element) => {
      element.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    // get all tab pages & remove active class & show active class to selected
    const allTabPages = document.querySelectorAll(".tab-pane");
    allTabPages.forEach((element) => {
      element.classList.remove("show");
      element.classList.remove("active");
    });
    document.getElementById(page).classList.add("show");
    document.getElementById(page).classList.add("active");
  };
  return (
    // site map category
    <ul className="nav nav-tabs" id="myTab" role="tablist">
      {/* category */}
      <li className="nav-item" role="presentation">
        <button
          className="nav-link active"
          id="home-tab"
          type="button"
          role="tab"
          onClick={(e) => handleChane(e, "creative-software")}
        >
          Creative Software
        </button>
      </li>
      {/* category */}
      <li className="nav-item" role="presentation">
        <button
          onClick={(e) => handleChane(e, "services")}
          className="nav-link"
          id="profile-tab"
          type="button"
          role="tab"
        >
          Services
        </button>
      </li>
      {/* category */}
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          id="contact-tab"
          type="button"
          role="tab"
          onClick={(e) => handleChane(e, "products")}
        >
          Products
        </button>
      </li>
      {/* category */}
      <li className="nav-item" role="presentation">
        <button
          onClick={(e) => handleChane(e, "career")}
          className="nav-link"
          id="contact-tab"
          type="button"
          role="tab"
        >
          Career
        </button>
      </li>
      {/* category */}
      {/* <li className="nav-item" role="presentation">
        <button
          onClick={(e) => handleChane(e, "resources")}
          className="nav-link"
          id="contact-tab"
          type="button"
          role="tab"
        >
          Resources
        </button>
      </li> */}
      {/* category */}
      <li className="nav-item" role="presentation">
        <button
          onClick={(e) => handleChane(e, "support")}
          className="nav-link"
          id="contact-tab"
          type="button"
          role="tab"
        >
          Support
        </button>
      </li>
    </ul>
  );
};

export default Category;
