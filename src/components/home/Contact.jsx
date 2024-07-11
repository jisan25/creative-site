const Contact = () => {
  return (
    // contact section
    <section id="contact" className="contact" style={{ paddingTop: "0px" }}>
      <div className="container-xl container-fluid">
        {/* section header */}

        {/* all contact cards */}
        <div className="gy-4 mt-4">
          <div className="row d-flex contact__card_wrapper gap-2 justify-content-between">
            {/* card 1 */}
            <div className="col-lg-4 col-12 contact-card d-flex align-items-center justify-content-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.smart.android.crm"
                target="_blank"
              >
                <div className="icon_wrapper">
                  <i className="bi bi-pass-fill"></i>
                </div>
              </a>
              <div className="contact-text">
                <a
                  href="https://play.google.com/store/apps/details?id=com.smart.android.crm"
                  target="_blank"
                >
                  <h4>Ticket</h4>
                </a>
                <p>Support Customers with tickets</p>
              </div>
            </div>
            {/* card 2 */}
            <div className="col-lg-4 col-12 contact-card d-flex align-items-center justify-content-center gap-4">
              <div className="icon_wrapper">
                <i className="bi bi-headset"></i>
              </div>
              <div className="contact-text">
                <h4>HelpDesk</h4>
                <p>Automate customer service with AI</p>
              </div>
            </div>
            {/* card 3 */}
            <div className="col-lg-4 col-12 contact-card d-flex align-items-center justify-content-center gap-4">
              <div className="icon_wrapper">
                <i className="bi bi-book-fill"></i>
              </div>
              <div className="contact-text">
                <h4>KnowledgeBase</h4>
                <p>Guide and educate customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
