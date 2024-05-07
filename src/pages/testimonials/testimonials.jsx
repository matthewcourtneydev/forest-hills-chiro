import React from 'react';
import "./testimonials.scss"

import TestimonialCard from '../../components/testimonial-card/testimonial-card';

const Testimonials = () => {
    const testimonialsData = [0, 1, 3, 4, 5, 6, 7]
    return (
        <div className="page" id="testimonials-page">
            <h2>Chiropractic Testimonials</h2>
            <section className="testimonials">
            {testimonialsData.map((test) => {
                return <TestimonialCard />
            })}
            </section>
        </div>
    );
}

export default Testimonials;
