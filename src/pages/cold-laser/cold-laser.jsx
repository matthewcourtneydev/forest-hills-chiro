import React from "react";
import "./cold-laser.scss";
import ContactButton from "../../components/contact-button/contact-button";

const ColdLaser = () => {
  return (
    <div className="page" id="cold-laser">
      <h2>Cold Laser Therapy</h2>
    <p>Forest Hills Chiropractic provides advanced cold laser therapy as part of our comprehensive treatment options. Cold laser therapy, also known as low-level laser therapy (LLLT), utilizes non-invasive light energy to stimulate healing and reduce pain. Here are some of the ailments that cold laser therapy can effectively address:</p>
    <ul>
        <li>Neck Pain</li>
        <li>Low Back Pain</li>
        <li>Foot Pain</li>
        <li>Carpal Tunnel Syndrome</li>
        <li>Knee Pain</li>
        <li>Various Tendonitis</li>
        <li>Painful Joints</li>
        <li>Fibromyalgia</li>
        <li>Arthritis</li>
        <li>Burstis</li>
        <li>Various Forms of Acute and Chronic Pain</li>
    </ul>
    <p>Our experienced chiropractors tailor cold laser therapy treatments to suit each patient's specific needs, promoting natural healing and restoring optimal function. Contact Forest Hills Chiropractic today to learn more about how cold laser therapy can benefit you and to schedule a consultation with our skilled team.</p>
    <ContactButton />
    </div>
  );
};

export default ColdLaser;
