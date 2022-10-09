import React from "react";
import styles from "../styles/Card.module.scss";

const CardWork = ({ card, id, img, link, aberto }) => {
  return (
    <a href={!aberto ? null : link} className={styles["card"]}>
      <img src={`${img}`}></img>
      <h3>{id}</h3>
      <p>Lorem ipsum dolor sit amet</p>
      {!aberto && <div className={styles["card-blocked"]}></div>}
    </a>
  );
};

export default CardWork;
