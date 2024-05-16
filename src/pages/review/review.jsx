import { React, useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./review.scss"

const Review = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_8dlalvd', 'template_7h3bqli', form.current, {
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
        <div className="page" id="review-page">
            <h2>Leave a Review</h2>
            <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="phone">Phone</label>
                <input type="phone" name="phone" id="phone" />
                <label htmlFor="comments">Feel free to leave a review about your experience at Forest Hills Chiropractic</label>
                <textarea name="comments" id="comments" cols="30" rows="10"></textarea>
                <button className="submit-contact">Sumbit</button>
            </form>
        </div>
    );
}

export default Review;
