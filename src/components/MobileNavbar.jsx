import { useState } from "react";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleMobileMenu = () => {
    setIsChecked((prevState) => !prevState);
  };
  return (
    <>
      {/* Fullscreen OVerlay Navigation For Mobile & Tab */}
      <input type="checkbox" id="active" checked={isChecked} />
      {/* Menu Button */}
      <label htmlFor="active" className="menu-btn2">
        <i
          className="bi bi-list"
          onClick={() => handleMobileMenu()}
          role="button"
        ></i>
      </label>
      <div className="menu-wrapper">
        {/* Menu */}
        <ul className="menu">
          <li>
            <Link
              onClick={() => setIsChecked(false)}
              className="scroll-link"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsChecked(false)}
              className="scroll-link"
              to="/industry-list"
            >
              Industry List
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsChecked(false)}
              className="scroll-link"
              to="/become-a-partner"
            >
              Become A Partner
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setIsChecked(false)}
              className="scroll-link"
              to="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsChecked(false)}
              className="scroll-link"
              to="/products"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsChecked(false)}
              className="scroll-link"
              to="/it-outsourcing"
            >
              Outsourcing
            </Link>
          </li>
          <li>
            <a
              onClick={() => setIsChecked(false)}
              className="scroll-link btn btn-success"
              href="https://crm.creativesoftware.com.bd/login"
              target="_blank"
            >
              Login
            </a>
          </li>
          <li>
            <Link
              onClick={() => setIsChecked(false)}
              className="scroll-link btn btn-outline-light"
              to="/schedule-a-demo"
            >
              Schedule A Demo
            </Link>
          </li>
        </ul>
      </div>
      {/* End Navigation For Mobile & Tab */}
    </>
  );
};

export default MobileNavbar;
