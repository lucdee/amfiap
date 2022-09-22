import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import styles from '../styles/Home.module.scss';
import Card from "./Card";
import Layout from "./Layout";


const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(user)
  return (
    <>
   
      <Layout/>
      <div className={styles['back']}>
     <img src="/back.png"></img>
      </div>
      <div className={styles['vagas']}>
      <div className={styles['vagas-content']}>
     <Card/>
     <Card/>
     </div>
     <div className={styles['vagas-content']}>
     <Card/>
     <Card/>
     </div>
      </div>
      </>
  );
};

export default Home;
