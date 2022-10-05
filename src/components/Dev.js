import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import styles from '../styles/Dev.module.scss';
import Card from "./Card";
import Layout from "./Layout";


const Desenvolvimento = () => {
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
    <img src="dev.jpg"></img>
      </div>
      <div className={styles['desc']}>

        <h2>Bem vindo a área de Desenvolvimento</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className={styles['divisor']}></div>
      <h2  className={styles['title']}>Selecione uma vaga</h2>
      <div className={styles['vagas']}>
     
      <div className={styles['vagas-content']}>

<Card id={"Back-End Pleno"} img={"./dev.jpg"}/>

 <Card id={"Front-End Júnior"} img={"./dev.jpg"}/>

 </div>
 <div className={styles['vagas-content']}>
 <Card id={"Tech Lead"}  img={"./dev.jpg"}/>
 <Card id={"Front-End Sênior"} img={"./dev.jpg"}/>
 </div>
 </div>
      </>
  );
};

export default Desenvolvimento;
