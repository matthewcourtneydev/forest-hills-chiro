import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./home.scss";

const Home = () => {
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8dlalvd", "template_xevczi2", form.current, {
        publicKey: "aPDvLUxmq4l6nCZmW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="page" id="home-page">
      <header className="header" id="header">
        <div className="overlay"></div>
        <section className="inner">
          <h2>Forest Hills</h2>
          <h5>Chiropractic</h5>
          <p>
            At Forest Hills Chiropractic we understand that theres no one size
            fits all treatment plan. Take a look at the different remedies
            offered.
          </p>
          <button>BOOK AN APPOINTMENT TODAY</button>
        </section>
      </header>
      <section id="first-section">
        <h3>About Us</h3>
        <h4>FOREST HILLS CHIROPRACTIC</h4>
        <p>
          Welcome to Forest Hills Chiropractic established in 1994 in
          Pittsburgh, PA. Does your pain or reduced mobility interfere with your
          ability to perform daily activities? At Forest Hills Chiropractic we
          look at every individual case as totally unique.{" "}
        </p>
        <p>
          There are many things that set Forest Hills Chiropractic apart from
          other chiropractic offices in Pittsburgh, namely our unique use of
          lasers, decompression and hydrotherapy. Forest Hills Chiropractic has
          more than 200 5 star reviews on Google, making us one of the highest
          rated chiropractic office in Pittsburgh. We are conveniently located 2
          miles off the Parkway East on Route 30. See how our unique approach to
          health care can help.
        </p>
        <button onClick={() => navigate("/meet-the-team")} className="meet">
          Meet the Team
        </button>
      </section>
      <section id="third-section">
        <div className="section-overlay">
            <div className="section-overlay-content">
                <h3>What We Do</h3>
                <div className="button-container">
                <button><span className="name">Chiropractic</span><span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non consequatur sequi quaerat neque blanditiis eaque maxime, quas voluptatibus quia.</span></button>
                <button><span className="name">Active Rehabilitation</span><span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non consequatur sequi quaerat neque blanditiis eaque maxime, quas voluptatibus quia.</span></button>
                <button><span className="name">Cold Laser Therapy</span><span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non consequatur sequi quaerat neque blanditiis eaque maxime, quas voluptatibus quia.</span></button>
                <button><span className="name">Cellular Cleanse</span><span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non consequatur sequi quaerat neque blanditiis eaque maxime, quas voluptatibus quia.</span></button>
                <button><span className="name">Hydrotherapy</span><span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non consequatur sequi quaerat neque blanditiis eaque maxime, quas voluptatibus quia.</span></button>
                <button><span className="name">Orthotics</span><span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non consequatur sequi quaerat neque blanditiis eaque maxime, quas voluptatibus quia.</span></button>
                <button><span className="name">Spinal Decompression</span><span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non consequatur sequi quaerat neque blanditiis eaque maxime, quas voluptatibus quia.</span></button>
                <button><span className="name">Spinal Manipulation</span><span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non consequatur sequi quaerat neque blanditiis eaque maxime, quas voluptatibus quia.</span></button>
                <button><span className="name">Whole Body Vibrations</span><span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non consequatur sequi quaerat neque blanditiis eaque maxime, quas voluptatibus quia.</span></button>
            </div>
            </div>
        </div>
      </section>
      <section id="second-section">
        <h3>Start Your Journey</h3>
        <div className="container">
          <div className="content">
            <p>
              Dr. Michael Testen at Forest Hills Chiropractic in Forest Hills,
              PA, is dedicated to providing both conventional and alternative
              approaches to alleviate pain, restore function, and promote a
              well-balanced lifestyle. Dr. Testen believes in helping patients
              achieve optimal health through personalized care tailored to their
              unique needs.
            </p>
            <p>
              Our chiropractic and functional medicine office offers
              top-of-the-line chiropractic care and holistic medicine, focusing
              on a comprehensive approach to health and wellness. By combining
              traditional chiropractic techniques with innovative functional
              medicine practices, Dr. Testen ensures that each patient receives
              the highest level of care to support their overall well-being.
            </p>
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
              <label htmlFor="phone">Phone</label>
              <input type="phone" name="phone" id="phone" />
              <label htmlFor="time">Preferred Time</label>
              <select name="time" id="time">
                <option value="6am-9am">6AM to 9AM</option>
                <option value="11am-1pm">11AM to 1PM</option>
                <option value="4pm-7pm">4PM to 7PM</option>
              </select>
              <label htmlFor="comments">
                Feel free to explain in a few words what issues you may be
                experiencing or what services you are interested in
              </label>
              <textarea
                name="comments"
                id="comments"
                cols="30"
                rows="7"
              ></textarea>
              <button className="submit-contact">Sumbit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
