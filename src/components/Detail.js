import React from "react";
import { useParams } from "react-router-dom";
import styles from '../styles/Detail.module.scss';
import Layout from "./Layout";
import { BsShare } from "react-icons/bs";

const Detail = () => {
  const { id } = useParams();
  const { card } = useParams();
  const { img } = useParams();

  return (
    <>
      <Layout></Layout>
      <div className={styles["card-bt"]}>
        <img className={styles["card-bt-img"]} src={`/${img}`}></img>
        <div className={styles["card-bt-title"]}>
          <p> #{id} </p>
          <p> {card} </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <BsShare />
        </div>
      </div>
    </>
  );
};

export default Detail;
