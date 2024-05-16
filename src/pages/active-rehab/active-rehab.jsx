import React from 'react';
import "./active-rehab.scss"
import ContactButton from '../../components/contact-button/contact-button';

const ActiveRehab = () => {
    return (
        <div className="page" id="active-rehab">
            <h2>Active Rehabilitation</h2>
            <p>Forest Hills Chiropractic offers comprehensive rehabilitation services aimed at promoting healing, preventing injuries, and enhancing performance. Our rehabilitation routines incorporate various techniques, including band, Swiss ball, floor, and core strengthening exercises, tailored to address individual needs and goals. Whether recovering from an injury or seeking to optimize physical function, our team provides personalized rehabilitation programs designed to restore mobility, strength, and stability. With a focus on holistic care and evidence-based practices, we strive to empower our patients to achieve their rehabilitation goals and lead healthier, more active lives. Contact Forest Hills Chiropractic today to learn more about our rehabilitation services and start your journey toward improved well-being and performance.</p>
            <ContactButton />
        </div>
    );
}

export default ActiveRehab;
