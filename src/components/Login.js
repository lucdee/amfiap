import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import '../styles/Login.scss';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    <div style={{ display: "flex" , width: "100%", backgroundColor: "#15141b" }}>
<div style={{ display: "flex" , width: "20%", height: "100vh" ,  backgroundColor: "#1b1923" }}>
  
</div>
<div style={{ margin: "auto"  , width: "50%",  minWidth: "250px"}}>
      <div  className="p-4 box" style={{ backgroundColor: "#1b1923" }}>
        <h2 className="mb-3" style={{ color: "white" }}>"Nome App"</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div >
          <GoogleButton style={{width: "100%"}}
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>
      
      <div className="p-4 box mt-3 text-center" style={{ backgroundColor: "#1b1923" }}>
      <h1 style={{ fontSize: "20px" , color: "white"}}> Ou </h1> <hr style={{ backgroundColor: "white" }} /> 
        <Link to="/signup">Crie sua conta</Link>
      </div>
      </div>
    </div>
    </>
  );
};

export default Login;
