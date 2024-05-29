import React from 'react';
import "./footer.scss"
import { useNavigate } from 'react-router-dom';

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaMap } from "react-icons/fa";




const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <section className="address">
                <h3>FOREST HILLS CHIROPRACTIC</h3>
                <ul>
                    <li>21 Yost Blvd #150</li>
                    <li>Forest Hills, PA 15221</li>
                    <li>Phone: <a href="tel:607-206-4901">(412) 646-4344</a></li>
                    <li>Fax: (412) 646-4316</li>
                </ul>
            </section>
            <section className="hours">
                <h3>Office Hours</h3>
                <ul className="hours-list">
                    <li><strong>Monday: </strong> 9:00am - 6:30pm</li>
                    <li><strong>Tuesday: </strong> 9:00am - 6:00pm</li>
                    <li><strong>Wednesday: </strong> 9:00am - 7:00pm</li>
                    <li><strong>Thursday: </strong> 9:00am - 6:00pm</li>
                    <li><strong>Friday: </strong> By Appointment</li>
                    <li><strong>Saturday: </strong> By Appointment</li>
                    <li><strong>Sunday: </strong> Closed</li>
                </ul>
                <ul className="socials">
                    <li><a href="https://www.facebook.com/ForestHillsChiropractic/" target="_blank"><FaFacebookF /></a></li>
                    <li><a href="https://twitter.com/fhchiro412/" target="_blank"><FaTwitter /></a></li>
                    <li><a href="https://www.google.com/maps/dir//Forest+Hills+Chiropractic+Center,+21+Yost+Blvd,+Forest+Hills,+PA+15221/@40.4139563,-79.8475157,19z/data=!3m1!5s0x8834eebecf9182a3:0xaaa8fe3b4254c68d!4m9!4m8!1m0!1m5!1m1!1s0x8834ec27cff574bf:0xeba2c8a97c96f112!2m2!1d-79.8472244!2d40.4139309!3e0?entry=ttu" target="_blank"><FaMap /></a></li>
                </ul>
            </section>
            <section className="map">
                <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.7704869438558!2d-79.84980468803374!3d40.4139349556898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834ec27cff574bf%3A0xeba2c8a97c96f112!2sForest%20Hills%20Chiropractic%20Center!5e0!3m2!1sen!2sus!4v1715047399198!5m2!1sen!2sus" width="450px" height="400px" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
            </section>
            <p className="footnote">Copyright Forest Hills Chiropractic</p>
        </footer>
    );
}

export default Footer;
