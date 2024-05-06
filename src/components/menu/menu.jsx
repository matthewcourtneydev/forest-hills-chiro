import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./menu.scss";

const Menu = (props) => {
  const navigate = useNavigate();
  const [isAboutExpanded, toggleAbout] = useState(false);

  function handleMenuSelect(route) {
    navigate(route)
    props.toggleMenu((prev) => !prev);
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
          <li><a href="https://intake.mychirotouch.com/?clinic=FHC0002">Patients</a></li>
          <li
            onClick={() => handleMenuSelect("/services")}
          >
            Services
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
