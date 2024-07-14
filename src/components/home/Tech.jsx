import { useState } from "react";

const techData = {
  Mobile: [
    { name: "Java", img: "/img/technologies/mobile/java-logo-1.png" },
    { name: "React Native", img: "/img/technologies/mobile/5839471.png" },
    {
      name: "Kotlin",
      img: "/img/technologies/mobile/kotlin-1-logo-png-transparent.png",
    },
    {
      name: "Swift",
      img: "/img/technologies/mobile/png-transparent-apple-bird-code-ios-logo-swift-logos-icon-thumbnail-removebg-preview.png",
    },
    {
      name: "Flutter",
      img: "/img/technologies/mobile/download-removebg-preview.png",
    },
    {
      name: "Xamarin",
      img: "/img/technologies/mobile/xamarin-logo-vector.png",
    },
  ],
  Frontend: [
    {
      name: "HTML5",
      img: "/img/technologies/frontend/5847f5bdcef1014c0b5e489c.png",
    },
    { name: "CSS", img: "/img/technologies/frontend/css-logo.png" },
    {
      name: "Javascript",
      img: "/img/technologies/frontend/js.png",
    },
    { name: "React JS", img: "/img/technologies/frontend/8057863.png" },
    {
      name: "Typescript",
      img: "/img/technologies/frontend/typescript_original_logo_icon_146317.png",
    },
    {
      name: "Vue",
      img: "/img/technologies/frontend/vuejs-logo-17D586B587-seeklogo.com.png",
    },
  ],
  Backend: [
    {
      name: ".NET",
      img: "/img/technologies/backend/dotnet-icon-512x512-1rx2815d.png",
    },
    {
      name: "Ruby",
      img: "/img/technologies/backend/ruby-icon-512x512-xebx3neo-removebg-preview.png",
    },
    { name: "Python", img: "/img/technologies/backend/python-logo-only.png" },
    { name: "Golang", img: "/img/technologies/backend/go-lang.png" },
    { name: "PHP", img: "/img/technologies/backend/PHP-logo.svg.png" },
    { name: "Java", img: "/img/technologies/backend/java-logo-1.png" },
  ],
  Frameworks: [
    {
      name: "Node JS",
      img: "/img/technologies/framework/2560px-Node.js_logo.svg.png",
    },
    {
      name: "Django",
      img: "/img/technologies/framework/django-logo-4C5ECF7036-seeklogo.com.png",
    },
    { name: "Laravel", img: "/img/technologies/framework/laravel-2.png" },
    {
      name: "Ruby on Rails",
      img: "/img/technologies/framework/2560px-Ruby_On_Rails_Logo.svg.png",
    },
  ],
  Database: [
    { name: "SQLite", img: "/img/technologies/database/SQLite370.svg.png" },
    {
      name: "MongoDB",
      img: "/img/technologies/database/MongoDB-Logo.wine.png",
    },
    {
      name: "Firebase",
      img: "/img/technologies/database/firebase-removebg-preview.png",
    },
    { name: "MySQL", img: "/img/technologies/database/MySQL-Logo.wine.png" },
    { name: "Redis", img: "/img/technologies/database/redis-logo.png" },
  ],
  WebServer: [
    {
      name: "AWS",
      img: "/img/technologies/web-server/1024px-Amazon_Web_Services_Logo.svg.png",
    },
    {
      name: "Apache HTTP Server",
      img: "/img/technologies/web-server/Apache_HTTP_Server-Logo.wine.png",
    },
    {
      name: "Nginx",
      img: "/img/technologies/web-server/nginx-icon-444x512-0meva297.png",
    },
  ],
};

const Tech = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  const handleBadgeClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <section id="tech" className="tech">
      <div className="container-xl container-fluid">
        <header className="section-header mb-4">
          <p className="mb-3">Latest Technologies At Your Service</p>
          <h2
            style={{
              textTransform: "none",
              fontWeight: "normal",
              fontSize: "16px",
              width: "auto",
              lineHeight: "20px",
              margin: "0 auto",
            }}
          >
            At Creative Software, our dedicated software development team uses
            the latest technologies, tools and trends to create your product and
            solution. We use the following listed technologies:
          </h2>
        </header>

        <div className="container my-5">
          <div className="d-flex justify-content-center mb-4">
            {Object.keys(techData).map((category) => (
              <span
                key={category}
                className={`badge mx-2 p-2 px-3 ${
                  selectedCategory === category ? "bg-primary" : "bg-secondary"
                }`}
                style={{ cursor: "pointer" }}
                onClick={() => handleBadgeClick(category)}
              >
                {category}
              </span>
            ))}
          </div>

          <div
            className="row gy-4 align-items-center justify-content-center pb-4 mb-4 mt-3"
            style={{ borderBottom: "1px solid #cecece" }}
          >
            {/* <div className="col-lg-2">{selectedCategory}</div> */}
            <div className="col-lg-8">
              <div className="d-flex tech-wrapper">
                {techData[selectedCategory].map((tech, index) => (
                  <div
                    key={index}
                    className="d-flex tech-button align-items-center me-3"
                  >
                    <img src={tech.img} alt={tech.name} />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
