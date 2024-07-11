import axiosClient from "@/api/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SpinnerButton from "./my-components/SpinnerButton";

// slider component
import Slider from "react-slick";

const PopUpDemo = () => {
  const [countries, setCountris] = useState();
  const [companyTypes, setCompanyTypes] = useState();
  const [productsList, setProductsList] = useState();

  const [loader, setLoader] = useState(false);

  const [name, setName] = useState(""); // State for the name input
  const [businessName, setBusinessName] = useState(""); // State for the business name input
  const [phoneNumber, setPhoneNumber] = useState(""); // State for the phone number input
  const [email, setEmail] = useState(""); // State for the email input
  const [selectedRole, setSelectedRole] = useState(""); // State for the selected role dropdown
  const [selectedIndustry, setSelectedIndustry] = useState(""); // State for the selected industry dropdown
  const [selectedCompanySize, setSelectedCompanySize] = useState(""); // State for the selected company size dropdown
  const [selectedProduct, setSelectedProduct] = useState(""); // State for the selected product dropdown
  const [selectedCountry, setSelectedCountry] = useState(""); // State for the selected country dropdown
  const [selectedHowYouKnow, setSelectedHowYouKnow] = useState(""); // State for the selected "How do you know us?" dropdown
  const [comments, setComments] = useState(""); // State for the comments textarea
  const [website, setWebsite] = useState(""); // State for the website
  const [agreeToReceiveCommunications, setAgreeToReceiveCommunications] =
    useState(false); // State for the "I agree" checkbox

  // slider configuration
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 8000,
    cssEase: "linear",
  };

  const clientSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  const getCountries = async () => {
    const { data } = await axiosClient.get("/api/country-list");
    const sortedCountries = data.country_list.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setCountris(sortedCountries);
  };
  const getCompanyTypes = async () => {
    const { data } = await axiosClient.get("/api/business-industries");
    const sortedCompanyType = data.industry_list.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setCompanyTypes(sortedCompanyType);
  };
  const getProductsList = async () => {
    const { data } = await axiosClient.get("/api/products-list");
    const sortedProducts = data.products_list.sort((a, b) => {
      return a.product_name.localeCompare(b.product_name);
    });
    setProductsList(sortedProducts);
  };

  useEffect(() => {
    getCountries();
    getCompanyTypes();
    getProductsList();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoader(true);

    const formData = new FormData();
    formData.append("Customer_name", name);
    formData.append("business_name", businessName);
    formData.append("mobile_no", phoneNumber);
    formData.append("email", email);
    formData.append("designation", selectedRole);
    formData.append("business_industries", selectedIndustry);
    formData.append("company_size", selectedCompanySize);
    formData.append("product", selectedProduct);
    formData.append("Country", selectedCountry);
    formData.append("website", website);
    formData.append("lead_sources", selectedHowYouKnow);
    formData.append("comment", comments);

    try {
      await axiosClient.post("/api/customer-data-store", formData);
      // If no error is thrown, it means the registration was successful
      setName("");
      setBusinessName("");
      setPhoneNumber("");
      setEmail("");
      setSelectedRole("");
      setSelectedIndustry(null);
      setSelectedCompanySize("");
      setSelectedProduct("");
      setSelectedCountry("");
      setSelectedHowYouKnow("");
      setWebsite("");
      setComments("");
      setAgreeToReceiveCommunications(false);

      alert("Your Request Has Been Submitted");
    } catch (e) {
      console.log(e);
    }

    setLoader(false);
  };

  function closeCustomPopup() {
    document.getElementById("custom-overlay").classList.remove("custom-active");
    document.getElementById("custom-popup").classList.remove("custom-active");
    const waChat = document.getElementById("wa-chat");
    if (waChat) {
      waChat.style.display = "block";
    }
  }
  return (
    <>
      {/* Dark overlay  */}
      <div className="custom-overlay" id="custom-overlay"></div>

      {/* Popup content */}
      <div className="custom-popup" id="custom-popup">
        <span
          className="custom-close-button"
          onClick={() => closeCustomPopup()}
        >
          &times;
        </span>
        <div className="row">
          <div
            className="col-lg-4 pop-demo-col-left"
            // style={{ borderRight: "1px solid #dedede" }}
          >
            <div className="my-5">
              <h3 className="text-white">Reliable Software Advice</h3>
            </div>
            <Slider {...settings}>
              <>
                <p className="text-white">
                  "Thanks to Creative Softrware, I was able to discover the
                  perfect of Software Solution that aligns perfectly with my
                  choice of requirements. Highly Recommended!"
                </p>

                <div className="profile-demo d-flex align-items-center justify-content-center mb-5">
                  <img
                    src="/img/testimonials/testimonials-1.jpg"
                    alt=""
                    className="me-3"
                    style={{
                      width: "75px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h4 className="text-white">John Dow</h4>
                    <h6 className="text-white">Software user</h6>
                  </div>
                </div>
              </>
              <>
                <p className="text-white">
                  Great experience and a great service. I would return any day
                  because of Creative Software and their kind team.
                </p>

                <div className="profile-demo d-flex align-items-center justify-content-center mb-5">
                  <img
                    src="/img/testimonials/testimonials-4.jpg"
                    alt=""
                    className="me-3"
                    style={{
                      width: "75px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h4 className="text-white">John Dow</h4>
                    <h6 className="text-white">Software user</h6>
                  </div>
                </div>
              </>
              <>
                <p className="text-white">
                  "I enjoyed how the staff treats customers. I recommend this
                  place. Highly Recommended!"
                </p>

                <div className="profile-demo d-flex align-items-center justify-content-center mb-5">
                  <img
                    src="/img/testimonials/testimonials-3.jpg"
                    alt=""
                    className="me-3"
                    style={{
                      width: "75px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h4 className="text-white">John Dow</h4>
                    <h6 className="text-white">Software user</h6>
                  </div>
                </div>
              </>
              <>
                <p className="text-white">
                  "I loved the Creative Software. The best thing about it is
                  that it POS Software. I will be purchasing more in the
                  future."
                </p>

                <div className="profile-demo d-flex align-items-center justify-content-center mb-5">
                  <img
                    src="/img/testimonials/testimonials-2.jpg"
                    alt=""
                    className="me-3"
                    style={{
                      width: "75px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h4 className="text-white">John Dow</h4>
                    <h6 className="text-white">Software user</h6>
                  </div>
                </div>
              </>
            </Slider>

            <h4
              className="text-white mt-5 mb-4"
              style={{ fontSize: "1.1rem", marginBottom: "0px" }}
            >
              <i style={{ color: "green" }} className="bi bi-check-circle"></i>{" "}
              Trusted by 500+ Happy & Satisfied Business
            </h4>
            <div className="clients flex-wrap gap-2 mt-2 mb-4 justify-content-center trusted-clients">
              <Slider {...clientSettings}>
                <div>
                  <img
                    src="/img/clients/1.png"
                    alt=""
                    style={{ width: "90px" }}
                  />
                </div>
                <div>
                  <img
                    src="/img/clients/2.png"
                    alt=""
                    style={{ width: "90px" }}
                  />
                </div>
                <div>
                  <img
                    src="/img/clients/3.png"
                    alt=""
                    style={{ width: "90px" }}
                  />
                </div>
                <div>
                  <img
                    src="/img/clients/4.png"
                    alt=""
                    style={{ width: "90px" }}
                  />
                </div>
                <div>
                  <img
                    src="/img/clients/5.png"
                    alt=""
                    style={{ width: "90px" }}
                  />
                </div>
                <div>
                  <img
                    src="/img/clients/6.png"
                    alt=""
                    style={{ width: "90px" }}
                  />
                </div>
                <div>
                  <img
                    src="/img/clients/7.png"
                    alt=""
                    style={{ width: "90px" }}
                  />
                </div>
                <div>
                  <img
                    src="/img/clients/8.png"
                    alt=""
                    style={{ width: "90px" }}
                  />
                </div>
                <div>
                  <img
                    src="/img/clients/9.png"
                    alt=""
                    style={{ width: "90px" }}
                  />
                </div>
                <div>
                  <img
                    src="/img/clients/10.png"
                    alt=""
                    style={{ width: "90px" }}
                  />
                </div>
                <div>
                  <img
                    src="/img/clients/11.png"
                    alt=""
                    style={{ width: "90px" }}
                  />
                </div>
                <div>
                  <img
                    src="/img/clients/12.png"
                    alt=""
                    style={{ width: "90px" }}
                  />
                </div>
                <div>
                  <img
                    src="/img/clients/13.png"
                    alt=""
                    style={{ width: "90px" }}
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div className="col-lg-8">
            <h2 className="text-center my-4" style={{ fontWeight: "700" }}>
              Need Personal Assistance in Software Selection?
            </h2>

            <form>
              {/* name & company name */}
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-person-fill"></i>
                </span>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <span className="input-group-text">
                  <i className="bi bi-buildings-fill"></i>
                </span>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Business Name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
                <span className="input-group-text">
                  <i className="bi bi-telephone-fill"></i>
                </span>
                <input
                  className="form-control"
                  type="number"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              {/* number & email */}
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="input-group-text">
                  <i className="bi bi-link-45deg"></i>
                </span>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
                <span className="input-group-text">
                  <i className="bi bi-globe2"></i>
                </span>
                <select
                  className="form-select"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option selected value={""} disabled>
                    Select Country
                  </option>
                  {countries &&
                    countries.map((country) => (
                      <option key={country.name} value={country.id}>
                        {country.name}
                      </option>
                    ))}
                </select>
              </div>

              {/* designation & type of company */}
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-ubuntu"></i>
                </span>
                <select
                  className="form-select"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  <option value={""} selected disabled>
                    Select business Role
                  </option>
                  <option value="Marketing Executive">
                    Marketing Executive
                  </option>
                  <option value="Accounts Officer">Accounts Officer</option>
                  <option value="Manager">Manager</option>
                  <option value="CEO">CEO</option>
                  <option value="Director">Director</option>
                  <option value="General Manager">General Manager</option>
                  <option value="Partner">Partner</option>
                  <option value="Chairman">Chairman</option>
                  <option value="Proprietor">Proprietor</option>
                </select>

                <span className="input-group-text">
                  <i className="bi bi-building-fill-gear"></i>
                </span>
                <select
                  className="form-select"
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                >
                  <option value={""} selected disabled>
                    Select Industry
                  </option>
                  {companyTypes &&
                    companyTypes.map((company) => (
                      <option key={company.name} value={company.id}>
                        {company.name}
                      </option>
                    ))}
                </select>
                <span className="input-group-text">
                  <i className="bi bi-caret-down-fill"></i>
                </span>
                <select
                  className="form-select"
                  value={selectedCompanySize}
                  onChange={(e) => setSelectedCompanySize(e.target.value)}
                >
                  <option value={""} disabled>
                    Select Company Size
                  </option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="501-1000">501-1000</option>
                  <option value="1000+">1000+</option>
                  <option value="employee">Employee</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              {/* company size */}
              <div className="input-group mb-3">
                {/* products */}

                <span className="input-group-text">
                  <i className="bi bi-caret-down-fill"></i>
                </span>
                <select
                  className="form-select"
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                >
                  <option selected value={""} disabled>
                    Select Product
                  </option>
                  {productsList &&
                    productsList.map((product, index) => (
                      <option key={index} value={product.id}>
                        {product.product_name}
                      </option>
                    ))}
                </select>
                <span className="input-group-text">
                  <i className="bi bi-caret-down-fill"></i>
                </span>
                <select
                  className="form-select"
                  value={selectedHowYouKnow}
                  onChange={(e) => setSelectedHowYouKnow(e.target.value)}
                >
                  <option value={""} disabled>
                    How Do You Know Us?
                  </option>
                  <option value="Conference">Conference</option>
                  <option value="Direct Email">Direct Email</option>
                  <option value="Email">Email</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Youtube">Youtube</option>
                  <option value="Google">Google</option>
                  <option value="Subscription">Subscription</option>
                  <option value="Partner">Partner</option>
                  <option value="Public Relation">Public Relation</option>
                  <option value="Trade Show">Trade Show</option>
                  <option value="Website">Website</option>
                  <option value="Word of Mouth">Word of Mouth</option>
                </select>
              </div>

              {/* additional comments or question */}
              <label htmlFor="add-comments" className="mb-2">
                Additional Comments or Question
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-chat-fill"></i>
                </span>
                <textarea
                  className="form-control"
                  placeholder="optional"
                  id="add-comments"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                ></textarea>
              </div>
              {/* I agree & check privacy policy */}
              <div className="form-check mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={agreeToReceiveCommunications}
                  onChange={(e) =>
                    setAgreeToReceiveCommunications(e.target.checked)
                  }
                />
                <label
                  className="form-check-label"
                  style={{ fontSize: "14px" }}
                >
                  I agree to receive other communications from creative software
                  for more information check{" "}
                  <Link
                    to="/privacy"
                    style={{ textDecoration: "underline", color: "#0d6efd" }}
                  >
                    our privacy policy
                  </Link>
                </label>
              </div>
              {/* cta - book a demo now */}
              <div style={{ display: "grid", placeItems: "end" }}>
                <button
                  onClick={(e) => handleSubmit(e)}
                  className="btn btn-block btn-primary schedule_btn mt-3"
                  type="submit"
                  disabled={
                    !name ||
                    !businessName ||
                    !phoneNumber ||
                    !email ||
                    !agreeToReceiveCommunications ||
                    !selectedRole ||
                    !selectedCompanySize ||
                    !selectedCountry ||
                    !selectedHowYouKnow ||
                    !selectedIndustry ||
                    !selectedProduct
                  }
                >
                  {loader ? (
                    <SpinnerButton text={"BOOKING A DEMO..."} />
                  ) : (
                    "BOOK A DEMO NOW"
                  )}
                </button>
              </div>
            </form>

            <h4
              className="ms-4"
              style={{ fontSize: "1.3rem", marginBottom: "0px" }}
            >
              Our Brands
            </h4>
            <div className="d-flex gap-4 our-brands justify-content-center flex-wrap">
              <img src="/img/brands/1.png" alt="" />
              <img src="/img/brands/2.png" alt="" />
              <img src="/img/brands/3.png" alt="" />
              <img src="/img/brands/4.png" alt="" />
              <img src="/img/brands/5.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Button to trigger the popup */}
      {/* <button onClick={() => openCustomPopup()}>Show Popup</button> */}
    </>
  );
};

export default PopUpDemo;
