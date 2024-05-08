import React from 'react';
import "./testimonials.scss"
import TestimonalsJson from "../../testimonials.json"

import TestimonialCard from '../../components/testimonial-card/testimonial-card';

const Testimonials = () => {
    const testimonialsData = TestimonalsJson;
    return (
        <div className="page" id="testimonials-page">
            <h2>Testimonials</h2>
            <section className="testimonials">
            {testimonialsData.map((test) => {
                return <TestimonialCard testimonial={test}/>
            })}
            </section>
        </div>
    );
}

export default Testimonials;
