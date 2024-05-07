import React from 'react';
import "./team.scss"
import { FaPlus } from "react-icons/fa";

import img from "../../imgs/mike.jpeg"

const Team = () => {
    return (
        <div className="page" id="team-page">
            <h2>Meet the Team</h2>
            <section className="person">
                <img src={img} alt="" />
                <p className="title">CHIROPRACTOR</p>
                <h4>MICHAEL TESTEN D.C.</h4>
                <p className="first-paragraph">
                Originally from a small town in Pennsylvania, Dr. Michael Testen, D.C., now calls Pittsburgh home. After practicing in Chicago for 3 years right out of school, he's thrilled to be back in his home state to help serve the Forest Hills community as an associate chiropractor alongside Dr. Michael Palamone, D.C.
                </p>

                <button className="read-more"><FaPlus /> READ MORE</button>
            </section>
        </div>
    );
}

export default Team;
