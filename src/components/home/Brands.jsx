// client components
import SliderBrands from "./SliderBrands";

const Brands = () => {
  return (
    // clients section
    <section id="clients" className="clients">
      {/* section header */}
      <div className="container-xl container-fluid">
        <header className="section-header">
          <h2>Our Brnads</h2>
          <p>Simplify Your Business with Our Streamlined Brand Solutions</p>
        </header>

        <div className="clients-slider">
          <div className=" align-items-center">
            <SliderBrands />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
