import PopUpJoinForm from "@/components/join-team/PopUpJoinForm";
import { useState } from "react";
const Requirements = ({ job }) => {
  const {
    job_title,
    company_summery,
    job_responsibilities,
    educational_requirements,
    experience_requirements,
    additional_requirements,
    job_location,
  } = job;

  // joinform state - default is false
  const [joinForm, setJoinForm] = useState(false);

  // handle apply now
  const applyNow = () => {
    setJoinForm(true);
    // go to top of the page
    document.documentElement.scrollTop = 0;
    // show pop up join form is join form state is true
    if (joinForm) {
      document.querySelector(".popup").style.display = "block";
      document.querySelector(".pop-up-transparent-bg").style.display = "block";
    }
  };

  function convertHTMLToJSX(htmlString) {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  }

  return (
    <>
      {joinForm && <PopUpJoinForm />}

      <div className="requirements">
        <div className="d-flex gap-2 justify-content-end align-items-end mb-3">
          <button onClick={() => applyNow()} className="btn btn-primary">
            Apply Now
          </button>
          <div className="card gap-2 px-3 flex-row" style={{ padding: "7px" }}>
            <div>
              <i className="fa fa-share text-secondary"></i> Share:
            </div>
            <div className="d-flex gap-3 align-items-center">
              <i style={{color:"#3b5998"}} className="fa fa-facebook cursor-pointer"></i>
              <i style={{color:"#0077B5 "}} className="fa fa-linkedin cursor-pointer"></i>
              <i style={{color:"#25D366"}} className="fa fa-whatsapp cursor-pointer"></i>
            </div>
          </div>
          <div className="card cursor-pointer" style={{ padding: "10px" }}>
            <i className="fa fa-print"></i>
          </div>
        </div>
        <div className="card bg-light-gray p-3 mb-3 new">
          <h5 className="text-pink">Summary</h5>
          <div className="row job_summary">
            <div className="col-lg-4">
              <p>
                Vacancy: <b>5</b>
              </p>
            </div>
            <div className="col-lg-4">
              <p>
                Age: <b>20 to 40 years</b>
              </p>
            </div>
            <div className="col-lg-4">
              <p>
                Location: <b>Dhaka</b>
              </p>
            </div>
            <div className="col-lg-4">
              <p>
                Salary: <b>Negotiable</b>
              </p>
            </div>
            <div className="col-lg-4">
              <p>
                Experience: <b>At most 1 Year</b>
              </p>
            </div>
            <div className="col-lg-4">
              <p>
                Published: <b>11 Jul 2024</b>
              </p>
            </div>
          </div>
        </div>

        <h2 className="h1 text-uppercase mb-4 font-bold">{job_title}</h2>
        {/* role */}
        <div className="mb-4">
          <h3 className="h3">Role</h3>
          <ul className="ml-5" style={{ listStyle: "disc" }}>
            {convertHTMLToJSX(company_summery)}
          </ul>
        </div>
        {/* responsibilities */}
        <div className="mb-4">
          <h3 className="h3">Responsibilities</h3>
          <ul className="ml-5" style={{ listStyle: "disc" }}>
            {convertHTMLToJSX(job_responsibilities)}
          </ul>
        </div>
        {/* skills required */}
        <div className="mb-4">
          <h3 className="h3">Skills Required</h3>
          <ul className="ml-5" style={{ listStyle: "disc" }}>
            {convertHTMLToJSX(additional_requirements)}
          </ul>
        </div>
        {/* educational qualification */}
        <div className="mb-4">
          <h3 className="h3">Educational Qualification</h3>
          <ul className="ml-5" style={{ listStyle: "disc" }}>
            {convertHTMLToJSX(educational_requirements)}
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="h3">Experience</h3>
          <ul className="ml-5" style={{ listStyle: "disc" }}>
            {convertHTMLToJSX(experience_requirements)}
          </ul>
        </div>
        {/* location */}
        <div className="mb-4">
          <h3 className="h3">Location</h3>
          <ul className="ml-5" style={{ listStyle: "disc" }}>
            <li className="ml-5">{job_location}</li>
          </ul>
        </div>
        {/* call to action apply now */}
        <button onClick={() => applyNow()} className="btn btn-lg btn-primary">
          Apply Now
        </button>
      </div>
    </>
  );
};

export default Requirements;
