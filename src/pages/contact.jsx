import { useEffect } from "react";
import Contact from "../components/home/Contact";
import siteInfo from "@/db/siteInfo";
import ContactSupport from "@/components/home/ContactSupport";
import ContactSupportDesktop from "@/components/home/ContactSupportDesktop";
const ContactPage = () => {
  useEffect(() => {
    document.title =
      "Contact - " + siteInfo.site_name + " - " + siteInfo.site_title;
  }, []);

  return (
    <>
      <header
        className="section-header mb-5"
        style={{ paddingBottom: "0px", paddingTop: "140px" }}
      >
        <h2>Contact</h2>
        <p>Contact Us</p>
      </header>
      <section className="contact-support-desktop container pt-5">
        <ContactSupportDesktop />
      </section>
      <section className="contact-support container pt-5">
        <ContactSupport />
      </section>
      <main
        className="d-flex flex-row align-items-center"
        style={{ height: "auto" }}
      >
        <div className="container-xl container-fluid">
          <Contact />
        </div>
      </main>
    </>
  );
};

export default ContactPage;
