const Faq = ({ faqList }) => {
  // toggle faqs
  const toggleCollapse = (id) => {
    // get faq content based on id
    const content = document.getElementById(id);
    if (content) {
      content.classList.toggle("collapse");
    }
  };

  return (
    <section id="faq" className="faq">
      <div className="container-xl container-fluid">
        {/* section header */}
        <header className="section-header">
          <h2>F.A.Q</h2>
          <p>Frequently Asked Questions</p>
        </header>

        <div className="row justify-content-center">
          {/* faq column */}

          {faqList ? (
            faqList.map((item, index) => (
              <div className="col-lg-8" key={index}>
                <div className="accordion accordion-flush">
                  {/* faq & answer */}
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-1"
                        onClick={() => toggleCollapse(item.id)}
                      >
                        {`${index + 1} . ${item.title}`}
                      </button>
                    </h2>
                    <div
                      id={item.id}
                      className={`accordion-collapse collapse`}
                      data-bs-parent="#faqlist1"
                    >
                      <div className="accordion-body">{item.description}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Faq;
