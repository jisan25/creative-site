import axiosClient from "@/api/axios";
import { useEffect, useState } from "react";
import ServicesData from "@/db/Corporate";
import SpinnerButton from "@/components/my-components/SpinnerButton";
import { Link } from "react-router-dom";

const HireForm = () => {
  const [countries, setCountris] = useState();
  const [companyTypes, setCompanyTypes] = useState();

  const [loader, setLoader] = useState(false);

  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedCompanySize, setSelectedCompanySize] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedHowYouKnow, setSelectedHowYouKnow] = useState("");
  const [comments, setComments] = useState("");

  const [attatchment, setAttachment] = useState("");

  const [agreeToReceiveCommunications, setAgreeToReceiveCommunications] =
    useState(false);

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

  useEffect(() => {
    getCountries();
    getCompanyTypes();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoader(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("business_name", businessName);
    formData.append("mobile_no", phoneNumber);
    formData.append("email", email);
    formData.append("business_role", selectedRole);
    formData.append("business_industries", selectedIndustry);
    formData.append("company_size", selectedCompanySize);
    formData.append("service", selectedService);
    formData.append("Country", selectedCountry);
    formData.append("lead_sources", selectedHowYouKnow);

    if (attatchment) {
      formData.append("cv", attatchment);
    }

    formData.append("comment", comments);

    try {
      await axiosClient.post("/api/hire-employee-data-store", formData);
      // If no error is thrown, it means the registration was successful
      setName("");
      setBusinessName("");
      setPhoneNumber("");
      setEmail("");
      setSelectedRole("");
      setSelectedIndustry("");
      setSelectedCompanySize("");
      setSelectedService("");
      setSelectedCountry("");
      setAttachment("");

      setSelectedHowYouKnow("");
      setComments("");
      setAgreeToReceiveCommunications(false);

      alert("Your Request Has Been Submitted");
    } catch (e) {
      console.log(e);
    }

    setLoader(false);
  };

  return (
    <>
      {/* form heading */}
      <h1 style={{ marginBottom: "5px" }}>Hire Employee</h1>
      <p className="text-medium-emphasis" style={{ marginTop: "0px" }}>
        Please complete the form below to hire an employee
      </p>
      {/* name & company name */}
      <div className="input-group mb-0">
        <div className="row">
          <div className="col-lg-6 col-12 d-flex px-3 pe-0 mb-3">
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
          </div>
          <div className="col-lg-6 col-12 d-flex pe-0 ps-3 mb-3">
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
          </div>
        </div>
      </div>
      {/* number & email */}
      <div className="input-group mb-0">
        <div className="row">
          <div className="col-lg-6 col-12 d-flex px-3 pe-0 mb-3">
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
          <div className="col-lg-6 col-12 d-flex pe-0 ps-3 mb-3">
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
          </div>
        </div>
      </div>
      {/* designation & type of company */}
      <div className="input-group mb-0">
        <div className="row">
          <div className="col-lg-6 col-12 d-flex px-3 pe-0 mb-3">
            <span className="input-group-text">
              <i className="bi bi-ubuntu"></i>
            </span>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="form-select"
            >
              <option value={""} disabled>
                Select business Role
              </option>
              <option value="CFO">Marketing Executive</option>
              <option value="CFO">Accounts Officer</option>
              <option value="CFO">Manager</option>
              <option value="CEO">CEO</option>
              <option value="CMO">Director</option>
              <option value="CFO">General Manager</option>
              <option value="CFO">Partner</option>
              <option value="CFO">Chairman</option>
              <option value="Propritor">Propritor</option>
            </select>
          </div>
          <div className="col-lg-6 col-12 d-flex pe-0 ps-3 mb-3">
            <span className="input-group-text">
              <i className="bi bi-building-fill-gear"></i>
            </span>
            <select
              className="form-select"
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
            >
              <option value={""} disabled>
                Select Industry
              </option>
              {companyTypes &&
                companyTypes.map((company) => (
                  <option key={company.id} value={company.id}>
                    {company.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>
      {/* company size */}
      <div className="input-group mb-3">
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
        </select>
      </div>
      {/* services */}
      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="bi bi-caret-down-fill"></i>
        </span>

        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="form-select"
        >
          <option value={""} disabled>
            Select Service
          </option>
          {ServicesData.map(
            (service) =>
              service.slug !== "it-outsourcing" &&
              service.category.map((cat) => (
                <option key={cat.id} value={cat}>
                  {cat}
                </option>
              ))
          )}
          <option value="it-techical-support">It Technical Support</option>
          <option value="virtual-assistant">Virtual Assistant</option>
        </select>
      </div>

      {/* country */}

      <div className="input-group mb-3">
        <span className="input-group-text">
          <i className="bi bi-caret-down-fill"></i>
        </span>
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="form-select"
        >
          <option value={""} disabled>
            Select Country
          </option>
          {countries &&
            countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
        </select>
      </div>

      {/*  how do you know us */}
      <div className="input-group mb-3">
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

      {/* attatchment  */}
      <label for="attatchment" class="form-label">
        Attatchment
      </label>
      <div className="input-group mb-3">
        <input
          className="form-control"
          type="file"
          id="attatchment"
          onChange={(e) => setAttachment(e.target.files[0])}
        />
      </div>
      {/* I agree & check privacy policy */}
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          checked={agreeToReceiveCommunications}
          onChange={(e) => setAgreeToReceiveCommunications(e.target.checked)}
        />
        <label className="form-check-label" style={{ fontSize: "14px" }}>
          I agree to receive other communications from creative software for
          more information check
        </label>
        <p>
          <Link
            to="/privacy"
            style={{ textDecoration: "underline", color: "#0d6efd" }}
          >
            our privacy policy
          </Link>
        </p>
      </div>
      {/* cta - book a demo now */}
      <div style={{ display: "grid", placeItems: "end" }}>
        <button
          onClick={(e) => handleSubmit(e)}
          disabled={
            !name ||
            !businessName ||
            !phoneNumber ||
            !email ||
            !agreeToReceiveCommunications ||
            !selectedRole ||
            !selectedCompanySize ||
            !selectedService ||
            !selectedCountry ||
            !selectedHowYouKnow ||
            !selectedIndustry
          }
          className="btn btn-block btn-success schedule_btn"
          type="button"
        >
          {loader ? <SpinnerButton text={"HIRING...."} /> : "HIRE NOW"}
        </button>
      </div>
    </>
  );
};

export default HireForm;
