import AboutCompany from "@/components/join-team/AboutCompany";
import Category from "@/components/join-team/Category";
import Requirements from "@/components/join-team/Requirements";
import { useEffect, useState } from "react";
import axiosClient from "../api/axios";
import siteInfo from "@/db/siteInfo";

const JoinTeamPage = () => {
  const [jobList, setJobList] = useState([]);

  const getJobList = async () => {
    const { data } = await axiosClient.get("/api/job-list");
    console.log(data.job_list);
    setJobList(data.job_list);
  };

  useEffect(() => {
    getJobList();
  }, []);

  useEffect(() => {
    document.title =
      "Join Team - " + siteInfo.site_name + " - " + siteInfo.site_title;
  }, []);

  return (
    <section>
      <AboutCompany />
      <div className="container-xl container-fluid mb-5 mt-5">
        <div className="d-flex align-items-start gap-5">
          <div className="col-lg-3">
            {jobList && <Category jobList={jobList} />}
          </div>
          <div className="col-lg-9" style={{ paddingRight: "2.25rem" }}>
            <div className="tab-content">
              {jobList &&
                jobList.map((job) => (
                  <div
                    className={`tab-pane fade ${
                      job.job_title === "WEB DEVELOPER" && "show active"
                    }`}
                    role="tabpanel"
                    id={job.job_title}
                  >
                    <Requirements job={job} key={job.id} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeamPage;
