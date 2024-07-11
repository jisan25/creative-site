// client say components
import SliderTestimonial from "./SliderTestimonial";

const Testimonials = () => {
  return (
    // testimonials
    <section id="testimonials" className="testimonials">
      <div className="container-xl container-fluid">
        {/* section header */}
        <header className="section-header">
          <h2>Testimonials</h2>
          <p>What they are saying about us</p>
        </header>

        <div className="testimonials-slider">
          <div className="">
            <SliderTestimonial />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
