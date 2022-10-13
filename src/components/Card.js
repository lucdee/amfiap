import React from "react";
import styles from "../styles/Card.module.scss";

const Card = ({ card, id, img }) => {
  return (
    <a href={id} className={styles["card"]}>
      <img src={`${img}`}></img>
      <h3>{id}</h3>
      <p>Acessar</p>
    </a>
  );
};

export default Card;
