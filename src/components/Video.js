import React from "react";
import { FcDislike, FcLike } from "react-icons/fc";
import styles from "../styles/Card.module.scss";

const Video = ({ card, id, img }) => {
  return (
    <a href={`/post/${id}/${card}/${img}`}>
      <button className={styles["card-bt"]}>
        <div className={styles["card"]}>
          <img src={`/${img}`}></img>
          <h1>{card}</h1>

          <div className={styles["card-banner"]}>
            <FcLike size={"20px"} />
          </div>
        </div>
      </button>
    </a>
  );
};

export default Video;
