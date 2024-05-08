import React from "react";
import "./chiropractic.scss";
import ServicesCard from "../../components/services-card/services-card";

const Chirporactic = () => {
  const servicesArray = [
    "Spine",
    "Family",
    "Injuries",
    "Vertigo",
    "Extremities",
    "Injuries",
  ];
  return (
    <div className="page" id="chiropractic">
      <h2>Chiropractic Services</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repudiandae
        totam quibusdam, incidunt dignissimos soluta necessitatibus delectus at
        ea, nulla dolores? Necessitatibus, vitae odit facilis aliquid aut
        suscipit eaque, quae et earum, numquam delectus tenetur.
      </p>
      <p>Select an option below to learn more!</p>
      <div className="services-container">
      {servicesArray.map((service) => {
        return <ServicesCard serviceName={service} />;
      })}
      </div>
    </div>
  );
};

export default Chirporactic;
