import React from "react";
import "./orthotics.scss";
import ContactButton from "../../components/contact-button/contact-button";

const Orthotics = () => {
  return (
    <div className="page" id="orthotics">
      <h2>Orthotics</h2>
      <p>
        Forest Hills Chiropractic is pleased to offer orthotic services as part
        of our commitment to comprehensive care and holistic wellness. Our
        orthotic services are designed to address a wide range of foot-related
        issues and provide custom solutions tailored to each patient's unique
        needs.
      </p>
      <p>
        With our orthotic services, patients can experience a variety of
        benefits, including:
      </p>
      <ul>
        <li>
          Improved foot biomechanics: Our custom orthotics are crafted to
          support the natural alignment of the feet, helping to alleviate issues
          such as overpronation, supination, and flat feet.
        </li>
        <li>
          Pain relief: Orthotics can help reduce pain and discomfort associated
          with conditions such as plantar fasciitis, bunions, neuromas, and
          arthritis by providing cushioning, support, and stability.
        </li>
        <li>
          Enhanced performance: By promoting proper foot alignment and reducing
          strain on the muscles and joints, orthotics can improve athletic
          performance and prevent injuries during physical activity.
        </li>
        <li>
          Correction of gait abnormalities: Orthotics can help correct gait
          abnormalities and improve walking and running mechanics, reducing the
          risk of injuries and enhancing overall mobility.
        </li>
        <li>
          Prevention of foot-related complications: Custom orthotics can help
          prevent the development or progression of foot deformities, injuries,
          and chronic conditions, promoting long-term foot health and wellness.
        </li>
      </ul>
      <p>
        At Forest Hills Chiropractic, our experienced team of chiropractors and
        orthotic specialists works closely with patients to assess their foot
        health, identify any issues or imbalances, and develop personalized
        orthotic solutions to address their specific needs. Whether you're
        seeking relief from foot pain, looking to improve athletic performance,
        or simply want to support your overall foot health, our orthotic
        services can help you achieve your goals. Schedule a consultation with
        us today to learn more about how custom orthotics can benefit you.
      </p>
      <ContactButton />
    </div>
  );
};

export default Orthotics;
