import React from "react";
import styles from "../styles/Card.module.scss";

const CardWork = ({ card, id, img , link}) => {
  return (
    <a href={link} className={styles['card']} >
       <img src={`${img}`}></img>
    <h3>{id}</h3>
   <p>Lorem ipsum dolor sit amet</p>
   </a>
   
  );
};

export default CardWork;
