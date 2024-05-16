import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import "./contact.scss"

const Contact = () => {
    const form = useRef();
    const navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_8dlalvd', 'template_xevczi2', form.current, {
            publicKey: 'aPDvLUxmq4l6nCZmW',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
    }
    return (
        <div className="page" id="contact-page">
            <h2>Contact Us</h2>
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
                <label htmlFor="comments">Feel free to explain in a few words what issues you may be experiencing or what services you are interested in</label>
                <textarea name="comments" id="comments" cols="30" rows="7"></textarea>
                <button className="submit-contact">Sumbit</button>
            </form>
        </div>
    );
}

export default Contact;
