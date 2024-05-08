import React from 'react';
import "./testimonial-card.scss"

const TestimonialCard = (props) => {
    return (
        <article className="testimonial-card">
            <p>{props.testimonial.review}</p>
            <strong><p>- {props.testimonial.author}</p></strong>
        </article>
    );
}

export default TestimonialCard;
