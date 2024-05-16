import React, { Component } from "react";
import "./cellular-cleanse.scss";
import ContactButton from "../../components/contact-button/contact-button";

class CellularCleanse extends Component {
  render() {
    return (
      <div className="page" id="cellular-cleanse">
        <h2>Foot Detox</h2>
        <p>
        Forest Hills Chiropractic is pleased to offer foot detox services as part of our holistic approach to wellness. Foot detox therapy aims to rid the body of toxins and promote overall health and well-being. During a foot detox session, patients immerse their feet in a warm water bath infused with natural ingredients such as salts and essential oils. As the feet soak, the detoxification process is stimulated, drawing out impurities through the skin's pores.
        </p>
        <p>Our foot detox therapy can provide various benefits, including:</p>
        <ul>
          <li>Detoxification of the body</li>
          <li>Improved circulation</li>
          <li>Reduction of inflammation</li>
          <li>Alleviation of stress and fatigue</li>
          <li>Enhanced immune function</li>
          <li>Relief from pain and discomfort</li>
        </ul>
        <p>
        At Forest Hills Chiropractic, our skilled practitioners ensure a safe and comfortable foot detox experience for our patients. Contact us today to schedule a foot detox session and take a proactive step towards better health and vitality.
        </p>
        <ContactButton />
      </div>
    );
  }
}

export default CellularCleanse;
