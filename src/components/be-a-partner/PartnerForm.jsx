import axiosClient from "@/api/axios";
import { useEffect, useState } from "react";
import SpinnerButton from "@/components/my-components/SpinnerButton";
import { Link } from "react-router-dom";

const PartnerForm = () => {
  const [countries, setCountris] = useState();
  const [companyTypes, setCompanyTypes] = useState();

  const [loader, setLoader] = useState(false);

  const [name, setName] = useState(""); // State for the name input
  const [businessName, setBusinessName] = useState(""); // State for the business name input
  const [phoneNumber, setPhoneNumber] = useState(""); // State for the phone number input
  const [email, setEmail] = useState(""); // State for the email input
  const [selectedRole, setSelectedRole] = useState(""); // State for the selected role dropdown
  const [selectedIndustry, setSelectedIndustry] = useState(""); // State for the selected industry dropdown
  const [selectedCompanySize, setSelectedCompanySize] = useState(""); // State for the selected company size dropdown
  const [solution, setSolution] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(""); // State for the selected country dropdown
  const [selectedHowYouKnow, setSelectedHowYouKnow] = useState(""); // State for the selected "How do you know us?" dropdown
  const [comments, setComments] = useState(""); // State for the comments textarea

  const [agreeToReceiveCommunications, setAgreeToReceiveCommunications] =
    useState(false); // State for the "I agree" checkbox

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
    formData.append("company_name", businessName);
    formData.append("phone", phoneNumber);
    formData.append("email", email);
    formData.append("designation", selectedRole);
    formData.append("type_of_company", selectedIndustry);
    formData.append("company_size", selectedCompanySize);
    formData.append("country", selectedCountry);
    formData.append("lead_sources", selectedHowYouKnow);
    formData.append("solution", solution);
    formData.append("comment", comments);

    try {
      await axiosClient.post("/api/partnership-store", formData);
      // If no error is thrown, it means the registration was successful
      setName("");
      setBusinessName("");
      setPhoneNumber("");
      setEmail("");
      setSelectedRole("");
      setSelectedIndustry("");
      setSelectedCompanySize("");
      setSelectedCountry("");
      setSolution("");
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
      <h1 className="text-uppercase" style={{ marginBottom: "5px" }}>
        Become A Partner
      </h1>
      <p className="text-medium-emphasis" style={{ marginTop: "0px" }}>
        Please complete the form below to become a partner
      </p>
      <form onSubmit={handleSubmit}>
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
        </div>
        {/* number & email */}
        <div className="input-group mb-3">
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
        {/* website &country */}
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="bi bi-globe2"></i>
          </span>
          <select
            className="form-select"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
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
            <option value={""} disabled>
              Select business Role
            </option>
            <option value="Marketing Executive">Marketing Executive</option>
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

        {/* solution  */}
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="bi bi-bullseye"></i>
          </span>
          <input
            className="form-control"
            type="text"
            placeholder="Solution Yor're Looking For"
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
          />
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

        <div style={{ display: "grid", placeItems: "end" }}>
          <button
            className="btn btn-block btn-success schedule_btn"
            onClick={(e) => handleSubmit(e)}
            type="button"
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
              !solution
            }
          >
            {loader ? (
              <SpinnerButton text={"BECOMING A PARTNER..."} />
            ) : (
              "BECOME A PARTNER"
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default PartnerForm;
