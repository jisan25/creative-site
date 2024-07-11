import { ProductsData } from "@/db/Corporate";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import siteInfo from "@/db/siteInfo";
const DocumentationPage = () => {
  useEffect(() => {
    document.title =
      "Documentation - " + siteInfo.site_name + " - " + siteInfo.site_title;
  }, []);

  return (
    <main id="main" style={{ paddingTop: "70px" }}>
      <section className="inner-page doc">
        <div className="container-xl container-fluid">
          <h2 className="h2 mb-4">All Documentation</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {ProductsData.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item.title}</td>
                  <td>
                    <Link className="btn btn-success" to={"#"}>
                      Go to Documentation
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default DocumentationPage;
