import React from "react";
import styles from "../styles/Card.module.scss";

const Card = ({ card, id, img }) => {
  return (
    <button className={styles['card']}>
       <img src={`${img}`}></img>
    <h3>{id}</h3>
   <p>Lorem ipsum dolor sit amet</p>
   </button>
   
  );
};

export default Card;
