import { React, useState } from "react";
import "./team.scss";
import { FaPlus, FaMinus } from "react-icons/fa";

import img from "../../imgs/mike.jpeg";

const Team = () => {
  const [isTextExpanded, toggleText] = useState(false);
  return (
    <div className="page" id="team-page">
      <h2>Meet the Team</h2>
      <article className="person">
        <img src={img} alt="doctors headshot" />
        <p className="title">CHIROPRACTOR</p>
        <h4>MICHAEL TESTEN D.C.</h4>
        <p className="first-paragraph">
          Originally from a small town in Pennsylvania, Dr. Michael Testen,
          D.C., now calls Pittsburgh home. After practicing in Chicago for 3
          years right out of school, he's thrilled to be back in his home state
          to help serve the Forest Hills community as an associate chiropractor
          alongside Dr. Michael Palamone, D.C.
        </p>

        <button
          className={isTextExpanded ? "closed" : "read-more"}
          onClick={() => toggleText((prev) => !prev)}
        >
          <FaPlus /> READ MORE
        </button>
        <section className={isTextExpanded ? "expanded-text-about" : "closed"}>
          <p>
            At only 13 years old, Dr. Michael vividly remembers limping into the
            chiropractor's office after a wrestling injury—he could barely bend
            his knee. His chiropractor simply adjusted the area, and the pain
            suddenly stopped. In fact, it felt like the injury had never
            happened in the first place.
          </p>
          <p>
            This experience made such an impact on Dr. Michael that he continued
            care into his college wrestling career at the Bloomsburg University
            of Pennsylvania. After, he went on to earn his Doctor of
            Chiropractic from Life University in Marietta, Ga. He is national
            board certified and belongs to the International Chiropractic
            Association.
          </p>
          <p>
            In practice, it is Dr. Michael's personal mission to spread the word
            of chiropractic to as many people as possible. He is driven to help
            all ages stay active and healthy, and nothing makes him happier than
            helping someone learn what chiropractic can do for their health and
            well-being. When he is with a patient, he's with that
            patient—nothing else matters.
          </p>
          <p>
            This singular focus on patient care has brought Dr. Michael across
            the globe. He's been on two mission trips, one in Haiti and the
            other in El Salvador, serving those in need with chiropractic care.
            In his spare time, Dr. Michael enjoys lifting weights, traveling,
            hanging out with friends and family, attending church, going to the
            movies and seeing live music—especially country!
          </p>
          <p>
            Dr. Michael's personal mantra is, "Giving, loving and serving—with
            no attachment to the results." This saying reminds him of the
            natural power of the chiropractic adjustment. He adds, "It is only
            the body that can heal—all I do is help remove any interferences to
            the innate power of the body."
          </p>

          <div className="quote">
            <p>“I read somewhere... how important it is in life not necessarily to be strong, but to feel strong... to measure yourself at least once.”</p>
            <span>- Jon Krakauer</span>
          </div>

          <button
            className="read-more"
            onClick={() => toggleText((prev) => !prev)}
          >
            <FaMinus /> READ LESS
          </button>
        </section>
      </article>
    </div>
  );
};

export default Team;
