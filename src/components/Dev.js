import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import styles from '../styles/Dev.module.scss';
import Card from "./Card";
import CardWork from "./CardWork";
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
      <div className={styles['divisor-title']}> 
         <h2  className={styles['title']}>Vaga de Desenvolvimento</h2>
         </div>
    
      <div className={styles['vagas']}>
     
      <div className={styles['vagas-content']}>

<CardWork link={"back"} id={"Back-End Pleno"} img={"./dev.jpg"}/>

 <CardWork link={"back"} id={"Front-End Júnior"} img={"./dev.jpg"}/>

 </div>
 <div className={styles['vagas-content']}>
 <CardWork link={"back"} id={"Tech Lead"}  img={"./dev.jpg"}/>
 <CardWork link={"back"} id={"Front-End Sênior"} img={"./dev.jpg"}/>
 </div>
 </div>
 <div style={{marginTop: "50px"}} className={styles['divisor']}></div>
 <div className={styles['divisor-title']}> 
         <h2  className={styles['title']}>Cursos de desenvolvimento</h2>
         </div>
    
      <div className={styles['vagas']}>
     
      <div className={styles['vagas-content']}>

<CardWork link={"back"} id={"Java"} img={"./dev.jpg"}/>

 <CardWork link={"back"} id={"Reactjs"} img={"./dev.jpg"}/>

 </div>
 <div className={styles['vagas-content']}>
 <CardWork link={"back"} id={"Angular"}  img={"./dev.jpg"}/>
 <CardWork link={"back"} id={"React Native"} img={"./dev.jpg"}/>
 </div>
 </div>

 
      </>
  );
};

export default Desenvolvimento;
