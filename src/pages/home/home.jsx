import React from 'react';
import "./home.scss"
import { useNavigate } from 'react-router-dom';

import Header from '../../components/header/header';

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="page" id="home-page">
           <Header />
           <h3>About Us</h3>
           <h4>FOREST HILLS CHIROPRACTIC</h4>
           <p>Welcome to Forest Hills Chiropractic established in 1994 in Pittsburgh, PA. Does your pain or reduced mobility interfere with your ability to perform daily activities? At Forest Hills Chiropractic  we look at every individual case as totally unique. </p>
           <p>There are many things that set Forest Hills Chiropractic apart from other chiropractic offices in Pittsburgh, namely our unique use of lasers, decompression and hydrotherapy. Forest Hills Chiropractic has more than 200 5 star reviews on Google, making us one of the highest rated chiropractic office in Pittsburgh. We are conveniently located 2 miles off the Parkway East on Route 30. See how our unique approach to health care can help.</p>
           <button onClick={() => navigate("/meet-the-team")} className="meet">Meet the Team</button>
        </div>
    );
}

export default Home;
