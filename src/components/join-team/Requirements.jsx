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
