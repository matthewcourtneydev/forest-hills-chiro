import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./menu.scss";

const Menu = (props) => {
  const navigate = useNavigate();
  const [isAboutExpanded, toggleAbout] = useState(false);
  const [isServicesExpanded, toggleServices] = useState(false);

  function handleMenuSelect(route) {
    navigate(route)
    props.toggleMenu((prev) => !prev);
    if (isAboutExpanded) {
      toggleAbout((prev) => !prev)
    }

    if (isServicesExpanded) {
      toggleServices((prev) => !prev)
    }
    
  }
  return (
    <div className={props.isMenuOpen ? "page" : "page closed"} id="menu">
      <section className="navigation">
        <ul className="navigation-links">
          <li
            onClick={() => handleMenuSelect("/")}
          >
            Home
          </li>
          <li onClick={() => toggleAbout((prev) => !prev)}>About</li>

          <li className={isAboutExpanded ? "" : "closed"}>
            <ul>
              <li
                onClick={() => handleMenuSelect("/meet-the-team")}
              >
                Meet The Team
              </li>
              <li
                onClick={() => handleMenuSelect("/testimonials")}
              >
                Testimonials
              </li>
              <li
                onClick={() => handleMenuSelect("/videos")}
              >
                Videos
              </li>
              <li
                onClick={() => handleMenuSelect("/office-tour")}
              >
                Office Tour
              </li>
            </ul>
          </li>
          <li><a href="https://intake.mychirotouch.com/?clinic=FHC0002" target="_blank">Patients</a></li>
          <li
            onClick={() => toggleServices((prev) => !prev)}
          >
            Services
          </li>
          <li className={isServicesExpanded ? "" : "closed"}>
            <ul>
              <li
                onClick={() => handleMenuSelect("/active-rehabilitation")}
              >
                Active Rehabilitation
              </li>
              <li
                onClick={() => handleMenuSelect("/chiropractic")}
              >
                Chiropractic
              </li>
              <li
                onClick={() => handleMenuSelect("/cold-laser-therapy")}
              >
                Cold Laser Therapy
              </li>
              <li
                onClick={() => handleMenuSelect("/eb-305-cellular-cleanse")}
              >
                EB-305 Cellular Cleanse
              </li>
              <li
                onClick={() => handleMenuSelect("/hydrotherapy")}
              >
                Hydrotherapy
              </li>
              <li
                onClick={() => handleMenuSelect("/orthotics")}
              >
                Orthotics
              </li>
              <li
                onClick={() => handleMenuSelect("/spinal-decompression")}
              >
                Spinal Decompression
              </li>
              <li
                onClick={() => handleMenuSelect("/spinal-manipulation")}
              >
                Spinal Manipulation
              </li>
              <li
                onClick={() => handleMenuSelect("/whole-body-vibrations")}
              >
                Whole Body Vibration
              </li>
            </ul>
          </li>
          <li
            onClick={() => handleMenuSelect("/review")}
          >
            Review
          </li>
          <li
            onClick={() => handleMenuSelect("/contact")}
          >
            Contact
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Menu;
