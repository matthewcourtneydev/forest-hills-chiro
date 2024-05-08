import { React, useState } from "react";
import "./services-card.scss";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const ServicesCard = (props) => {
  const [isCardExpanded, toggleExpansion] = useState(false);
  return (
    <article className="services-card">
      <h3>{props.serviceName}</h3>
      <span onClick={() => toggleExpansion((prev) => !prev)} className={isCardExpanded ? "closed" : "downArrow"}>
        <IoIosArrowDown />
      </span>
      <section className={isCardExpanded ? "card-description" : "closed"}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
          dicta labore possimus optio ipsam saepe maxime, iste molestias atque
          perspiciatis sapiente exercitationem obcaecati commodi veritatis
          tempora unde incidunt doloremque. Suscipit quia at eveniet autem.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
          itaque.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eum
          saepe neque labore rerum numquam, alias adipisci autem, corporis
          reprehenderit aperiam nulla voluptate cupiditate atque illo vel ipsa
          dolore voluptatum distinctio asperiores doloremque quibusdam doloribus
          nostrum quidem. Animi, totam minus!
        </p>
        <span onClick={() => toggleExpansion((prev) => !prev)}>
          <IoIosArrowUp />
        </span>
      </section>
    </article>
  );
};

export default ServicesCard;
