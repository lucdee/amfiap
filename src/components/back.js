import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import styles from '../styles/Back.module.scss';
import Card from "./Card";
import CardWork from "./CardWork";
import Layout from "./Layout";


const Back = () => {
  const { logOut, user } = useUserAuth();
  const [ page1, setpage1 ] = useState(true);
  const [ page2, setpage2 ] = useState(false);

  const [ resposta , setResposta ] = useState("");
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

 const mandar = () => {
  if (resposta === "D"){
    
  }
 }

  return (
    <>
   
      <Layout/>
      <div className={styles['back']}>
    { page1 &&   <div className={styles['back-title']}>
      <h2>Teste de conhecimento / Desenvolvedor Back-End</h2>
      <button onClick={() => setpage1(false) & setpage2(true)}>Iniciar</button>
    </div>}

    { page2 &&   <div className={styles['back-title']}>
     <h2>Analise as afirmações abaixo sobre valores de ponto flutuante em Java e assinale a alternativa correta.</h2>
    <p>I. Números de ponto flutuante não são adequados para cálculos financeiros em que erros de arredondamento não podem ser tolerados.</p>
  <p> II. Uma expressão 0.0 / 0.0 gera uma exceção em tempo de execução.</p>
  <p>III. Valores de ponto flutuante, como 0.5 e 4.6, são sempre considerados como do tipo double.</p>
   
   <div className={styles['altsp']}>
  <div className={styles['alts']}>
  <a className={styles['a']} onClick={() => setResposta("A")}>A) Todas estão corretas.</a>
   <a className={styles['a']} onClick={() => setResposta("B")}>B) Todas estão incorretas.</a>
   <a className={styles['a']}  onClick={() => setResposta("C")}>C) Apenas I e II estão corretas.</a>
   <a className={styles['a']}  onClick={() => setResposta("D")}>D) Apenas I e III estão corretas.</a>
   <a className={styles['a']}  onClick={() => setResposta("F")}>E) Apenas II e III estão corretas.</a>
  </div>
  
  
  


   <p>{resposta}</p>
   </div>
    <button onClick={() => mandar()}>Confirmar</button>
    </div>}
  
 </div>

 
      </>
  );
};

export default Back;
