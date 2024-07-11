// client components
import SliderClient from "./SliderClient";

const Clients = () => {
  return (
    // clients section
    <section id="clients" className="clients">
      {/* section header */}
      <div className="container-xl container-fluid">
        <header className="section-header">
          <h2>Our Clients</h2>
          <p>Empowering Your Success Together</p>
        </header>

        <div className="clients-slider">
          <div className=" align-items-center">
            <SliderClient />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
