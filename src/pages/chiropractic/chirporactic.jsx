import React from "react";
import "./chiropractic.scss";
import Services from "../../services.json";
import ServicesCard from "../../components/services-card/services-card";

const Chirporactic = () => {
  const servicesArray = Services;
  return (
    <div className="page" id="chiropractic">
      <h2>Chiropractic Services</h2>
      <p>
      Welcome to Forest Hills Chiropractic, where healing meets expertise. Our practice is dedicated to providing tailored solutions for a diverse range of injuries and ailments. With a focus on holistic care, we offer an array of services designed to address your unique needs. Explore our offerings below to discover how we can help you regain vitality and wellness.
      </p>
      <p>Select an option below to learn more!</p>
      <div className="services-container">
      {servicesArray.map((service) => {
        return <ServicesCard service={service} />;
      })}
      </div>
    </div>
  );
};

export default Chirporactic;
