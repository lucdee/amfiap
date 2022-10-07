import React, { useEffect, useState } from "react";
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
  localStorage.setItem('coin', 0);
  return (
    <>
   
      <Layout/>
      <div className={styles['back']}>
     <img src="/back.png"></img>
      </div>
      <div className={styles['title']}> <h2>Selecione qual area deseja se candidatar</h2></div>
      <div className={styles['vagas']}>
    
      <div className={styles['vagas-content']}>

    <Card id={"Desenvolvimento"} img={"./dev.jpg"}/>
    
     <Card id={"Marketing"} img={"./marketing.jpg"}/>
   
     </div>
     <div className={styles['vagas-content']}>
     <Card id={"Design"}  img={"./design.png"}/>
     <Card id={"Gestão"}  img={"./gestão.jpg"}/>
     </div>
      </div>
      </>
  );
};

export default Home;
