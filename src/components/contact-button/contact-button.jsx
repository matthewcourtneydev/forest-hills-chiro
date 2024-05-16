import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../contact-button/contact-button.scss"

const ContactButton = () => {
    const navigate = useNavigate()
    return (
        <button id="to-contact" onClick={() => navigate("/contact")}>
            BOOK AN APPOINTMENT TODAY
        </button>
    );
}

export default ContactButton;
