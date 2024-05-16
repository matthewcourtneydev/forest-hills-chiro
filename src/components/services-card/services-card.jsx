import { React, useState } from "react";
import "./services-card.scss";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const ServicesCard = (props) => {
  const [isCardExpanded, toggleExpansion] = useState(false);
  console.log(props);
  return (
    <article className="services-card">
      <h3>{props.service.name}</h3>
      <span
        onClick={() => toggleExpansion((prev) => !prev)}
        className={isCardExpanded ? "closed" : "downArrow"}
      >
        <IoIosArrowDown />
      </span>
      <section className={isCardExpanded ? "card-description" : "closed"}>
        {/* <nav className="card-nav">
          <ul>
            {props.service.items.map((item) => {
              if (item.type === "header") {
                return <li><a href={`#${item.id}`}>{item.value}</a></li>;
              }
            })}
          </ul>
        </nav> */}
        {props.service.items.map((item) => {
          if (item.type === "p") {
            return <p>{item.value}</p>;
          }

          if (item.type === "header") {
            return <h4 id={item.id}>{item.value}</h4>;
          }

          if (item.type === "list") {
            return (
              <ul>
                {item.values.map((value) => {
                  return <li>{value}</li>;
                })}
              </ul>
            );
          }
        })}
        <span onClick={() => toggleExpansion((prev) => !prev)}>
          <IoIosArrowUp />
        </span>
      </section>
    </article>
  );
};

export default ServicesCard;
