import React from 'react';
import "./header.scss"

const Header = () => {
    return (
        <header className="header" id="header">
            <div className="overlay"></div>
            <section className="inner">
                <h2>Forest Hills</h2>
                <h5>Chiropractic</h5>
                <p>At Forest Hills Chiropractic we understand that theres no one size fits all treatment plan. Take a look at the different remedies offered.</p>
                <button>BOOK AN APPOINTMENT TODAY</button>
            </section>
        </header>
    );
}

export default Header;
