import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import styles from '../styles/Layout.module.scss';
import MenuLateral from "./MenuLateral";
import { GiTwoCoins } from 'react-icons/gi';

const Layout = ({coin}) => {
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
    <div style={{display: "flex"}}>
      
   <MenuLateral/>
      <div className={styles['menu']}>
    
      <img src="/logo-black.png"></img>
      <div className={styles['menu-user']}>
   
    <div className={styles['coindiv']}>
      <p>{localStorage.getItem('coin')}</p>
     <GiTwoCoins color="black"/>
     </div> 
   <p> {user && user.email}  </p> 
   <Button variant="primary" onClick={handleLogout}>
          Sair
        </Button>
  
       
        </div>
      </div>
     
      
   
    </div>
  );
};

export default Layout;
