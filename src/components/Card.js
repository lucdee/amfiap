import React from "react";
import styles from "../styles/Card.module.scss";

const Card = ({ card, id, img }) => {
  return (
    <a href={id} className={styles['card']} >
       <img src={`${img}`}></img>
    <h3>{id}</h3>
   <p>Lorem ipsum dolor sit amet</p>
   </a>
   
  );
};

export default Card;
