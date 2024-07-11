// components

const IndustryListPage = () => {
  const productsData = [
    { title: "Retail Market", icon: "bi bi-shop" },
    { title: "Food Industry", icon: "bi bi-cup-straw" },
    { title: "Garments Industry", icon: "bi bi-snow3" },
    { title: "Health Industry", icon: "bi bi-capsule" },
    { title: "Finance Industry", icon: "bi bi-cash-stack" },
    { title: "Logistic Industry", icon: "bi bi-box-seam" },
    { title: "Education Industry", icon: "bi bi-book" },
    { title: "Corporate Industry", icon: "bi bi-building" },
    { title: "Ecommerce Industry", icon: "bi bi-image" },
  ];

  return (
    <>
      <main id="main" style={{ paddingTop: "100px" }}>
        <section id="portfolio-details" className="portfolio-details">
          <div className="container-fluid container-xl">
            <div className="row gy-4">
              <h3
                className="mb-4 text-center"
                style={{ fontWeight: "700", fontSize: "35px" }}
              >
                We Are Working In These Industries
              </h3>
            </div>
            <div className="row gy-4 align-items-center services">
              {productsData.map((item) => (
                <div class="col-lg-4">
                  <div class="service-box blue">
                    <i class={`${item.icon} icon`}></i>
                    <h3 class="">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default IndustryListPage;
