import { Link } from "react-router-dom";

const Products = () => {
  return (
    // products section
    <section className="outsourcing_section">
      <div className="outsourcing_col_wrapper row">
        {/* heading */}
        {/* <h2>OutSourcing </h2> */}

        {/* product  */}

        <div className="col-lg-3 mb-3">
          <Link to="/hiring">
            <h4 className="mb-3">HIRE SOFTWARE DEVELOPERS</h4>
            <p className="mb-2">Hire PHP Developer</p>
            <p className="mb-2">Hire React Developer</p>
            <p className="mb-2">Hire Software Developer</p>
            <p className="mb-2">Hire Laravel Developer</p>
            <p className="mb-2">Hire AngularJS Developers</p>
            <p className="mb-2">Hire Java Software Developers</p>
            <p className="mb-2">Hire AI and ML Developers</p>
            <p className="mb-2">Hire Software Testing and QA Experts</p>
            <p className="mb-2">Hire Progressive Web App Developers</p>
            <p className="mb-2">Hire Umbraco Developers</p>
          </Link>
        </div>

        <div className="col-lg-3 mb-3">
          <Link to="/hiring">
            <h4 className="mb-3">HIRE MOBILE DEVELOPERS</h4>
            <p className="mb-2">Hire Flutter App Developer</p>
            <p className="mb-2">Hire Android App Developers</p>
            <p className="mb-2">Hire IOS App Developers</p>
            <p className="mb-2">Hire IOS Game Developers</p>
            <p className="mb-2">Hire Android Game Developers</p>
            <p className="mb-2">Hire Ionic App Developers</p>
            <p className="mb-2">Hire Xamarin App Developers</p>
            <p className="mb-2">Hire React Native App Developers</p>
          </Link>
        </div>

        <div className="col-lg-3 mb-3 ">
          <Link to="/hiring">
            <h4 className="mb-3">HIRE WEB DEVELOPERS</h4>
            <p className="mb-2">Hire Web Designer</p>
            <p className="mb-2">Hire Frontend Developer</p>
            <p className="mb-2">Hire Backend Developer</p>
            <p className="mb-2">Hire Full Stack Developer</p>
            <p className="mb-2">Hire Node.js Developers</p>
            <p className="mb-2">Hire Vue.js Developers</p>
            <p className="mb-2">Hire Shopify Developers </p>
            <p className="mb-2">Hire HTML 5 Developers</p>
            <p className="mb-2">Hire Python Developers</p>
            <p className="mb-2">Hire Ruby on Rails Developers</p>
            <p className="mb-2">Hire Drupal Developers</p>
            <p className="mb-2">Hire Wordpress Developers</p>
            <p className="mb-2"> Hire Magento Developers</p>
          </Link>
        </div>
        <div className="col-lg-3 mb-3 pl-2">
          <Link to="/hiring">
            <h4 className="mb-3">HIRE DIGITAL MARKETER</h4>
            <p className="mb-2">Hire Seo Expert</p>
            <p className="mb-2">Hire Contetnt Writter</p>
            <p className="mb-2">Hire Email Marketing Expert</p>
            <p className="mb-2">Hire Google Analytics Expert</p>
            <p className="mb-2 fw-bold">Hire Graphics Designer</p>
            <p className="mb-2 fw-bold">Hire Virtual Assistant</p>
            <p className="mb-2 fw-bold">Hire IT Technical Support</p>
          </Link>
        </div>

        {/* product end */}
      </div>
    </section>
  );
};

export default Products;
