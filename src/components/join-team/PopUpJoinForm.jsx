import axiosClient from "@/api/axios";
import { useEffect, useState } from "react";
import SpinnerButton from "../my-components/SpinnerButton";
import { Link } from "react-router-dom";

const PopUpJoinForm = ({ title }) => {
  const [jobList, setJobList] = useState([]);

  const [loader, setLoader] = useState(false);

  const [name, setName] = useState(""); // State for the name input
  const [email, setEmail] = useState(""); // State for the email input
  const [phoneNumber, setPhoneNumber] = useState(""); // State for the phone number input
  const [presentAddress, setPresentAddress] = useState(""); // State for the present address input
  const [applyingFor, setApplyingFor] = useState(""); // State for the applying for dropdown
  const [experience, setExperience] = useState(""); // State for the experience dropdown
  const [education, setEducation] = useState(""); // State for the education dropdown
  const [CV, setCV] = useState("");
  const [agreeToReceiveCommunications, setAgreeToReceiveCommunications] =
    useState(false); // State for the "I agree" checkbox

  // show join form after page is loaded
  useEffect(() => {
    document.querySelector(".popup").style.display = "block";
  }, []);

  // close join form
  const handleClose = () => {
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".pop-up-transparent-bg").style.display = "none";
  };

  const getJobList = async () => {
    const { data } = await axiosClient.get("/api/job-list");
    console.log(data.job_list);
    setJobList(data.job_list);
  };

  useEffect(() => {
    getJobList();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);

    // Add the form data from the input fields
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phoneNumber);
    formData.append("address", presentAddress);
    formData.append("apply_for", applyingFor);
    formData.append("experience", experience);
    formData.append("education", education);
    if (CV) {
      formData.append("cv", CV);
    }

    try {
      // Make a POST request to your API endpoint
      await axiosClient.post("/api/application-store", formData);

      // If no error is thrown, it means the submission was successful

      // Reset the form fields
      setName("");
      setEmail("");
      setPhoneNumber("");
      setPresentAddress("");
      setApplyingFor("");
      setExperience("");
      setEducation("");
      setAgreeToReceiveCommunications(false);

      // Display a success message or perform other actions
      alert("Your application has been submitted.");
    } catch (e) {
      // Handle errors if any
      console.log(e);
    }
    setLoader(false);
    handleClose();
  };

  return (
    <>
      <div className="pop-up-transparent-bg"></div>
      <div className="popup">
        {/* call to action close */}
        <button
          className="popup-btn-join"
          id="close"
          onClick={() => handleClose()}
        >
          &times;
        </button>

        <div className="card mb-4 p-3">
          <div className="card-body">
            {/* form sub heading */}
            <p
              className="text-medium-emphasis mb-3"
              style={{ marginTop: "0px" }}
            >
              Please complete the form below to join our team
            </p>
            <form onSubmit={handleSubmit}>
              {/* name  */}
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
              </div>
              {/*   email & number*/}
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
              {/* present address  */}
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-geo-alt-fill"></i>
                </span>
                <input
                  className="form-control"
                  type="text"
                  placeholder="present address"
                  value={presentAddress}
                  onChange={(e) => setPresentAddress(e.target.value)}
                />
              </div>

              {/* applying for */}
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-caret-down-fill"></i>
                </span>
                <select
                  className="form-select"
                  value={applyingFor}
                  onChange={(e) => setApplyingFor(e.target.value)}
                >
                  <option value={""} disabled>
                    Select Applying For
                  </option>
                  {jobList &&
                    jobList.map((job) => (
                      <option key={job.id} value={job.job_title}>
                        {job.job_title}
                      </option>
                    ))}
                </select>
              </div>

              {/* country */}

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-caret-down-fill"></i>
                </span>
                <select
                  className="form-select"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                >
                  <option value={""} disabled>
                    Select Experience
                  </option>
                  <option value="Fresher">Fresher</option>
                  <option value="0-2 years">0-2 years</option>
                  <option value="2-5 years">2-5 years</option>
                  <option value="5years +">5years +</option>
                </select>
              </div>

              {/* education */}

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-caret-down-fill"></i>
                </span>
                <select
                  className="form-select"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                >
                  <option value={""} disabled>
                    Select Education
                  </option>
                  <option value="BSC in Computer Science">
                    BSC in Computer Science
                  </option>
                  <option value="Diploma in Computer Science">
                    Diploma in Computer Science
                  </option>
                  <option value="Other Graduate">Other Graduate</option>
                </select>
              </div>

              {/* additional comments or question */}
              <label htmlFor="add-comments" className="mb-2 resume-label">
                Upload Resume/CV
              </label>
              <div className="input-group">
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  onChange={(e) => setCV(e.target.files[0])}
                />
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
                  className="form-check-label resume-label"
                  style={{ fontSize: "14px", paddingTop: "1px" }}
                >
                  I agree to receive other communications from creative software
                  for more information check
                </label>
                <p className="text-left">
                  <Link
                    to="/privacy"
                    style={{ textDecoration: "underline", color: "#0d6efd" }}
                  >
                    our privacy policy
                  </Link>
                </p>
              </div>
              {/* call to action - apply now */}
              <div style={{ display: "grid", placeItems: "end" }}>
                <button
                  className="btn btn-block btn-lg btn-primary form-btn"
                  style={{ background: "#4154F1" }}
                  type="button"
                  onClick={(e) => handleSubmit(e)}
                  disabled={
                    !name ||
                    !email ||
                    !education ||
                    !phoneNumber ||
                    !presentAddress ||
                    !applyingFor ||
                    !experience ||
                    !CV ||
                    !agreeToReceiveCommunications
                  }
                >
                  {loader ? (
                    <SpinnerButton text={"Applying Now..."} />
                  ) : (
                    "Apply Now"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpJoinForm;
