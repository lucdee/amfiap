import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import styles from "../styles/Back.module.scss";
import { Field, Form, Formik } from "formik";
import Layout from "./Layout";

const SendEmail = () => {
  const { logOut, user } = useUserAuth();
  const [page1, setpage1] = useState(true);
  const [page2, setpage2] = useState(false);
  const [message, setMessage] = useState(false);
  const [messageFalse, setMessageFalse] = useState(false);

  const send = async (values) => {
    emailjs
      .send("service_sq94w6d", "template_1emgebk", values, "PWmsJ6JYjZKg74KL6")
      .then(
        (result) => {
          console.log("sucess");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Layout />
      {message && (
        <div className={styles["msg"]}>
          <h2>Resposta correta!</h2>
          <h2>Parabéns você ganhou 20 pontos!</h2>
        </div>
      )}
      {messageFalse && (
        <div className={styles["msg"]}>
          <h2>Resposta incorreta!</h2>
        </div>
      )}

      <div className={styles["back"]}>
        {page1 && (
          <div className={styles["back-title"]}>
            <h2>Desenvolvedor Back End Pleno / Sobre a vaga</h2>
            <p>Experiência na área 3 - 6 anos</p>
            <p>O que os candidatos precisam ter?</p>
            <p>- Conhecimento de bases de dados NoSQL</p>
            <p>- Experiência com Spring Boot e JPA.</p>
            <p>- Versionamento de projetos com GIT</p>
            <p>- Domínio na criação e manutenção de APIS</p>
            <button onClick={() => setpage1(false) & setpage2(true)}>
              CANDIDATAR
            </button>
          </div>
        )}

        {page2 && (
          <div className={styles["back-title"]}>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
              }}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert("Inscrição efetuada");
                send(values);
              }}
            >
              <Form>
                <label className={styles["label"]} htmlFor="firstName">
                  Seu Nome
                  <Field id="firstName" name="firstName" placeholder="Jane" />
                </label>

                <label className={styles["label"]} htmlFor="lastName">
                  Data
                  <Field
                    id="lastName"
                    name="lastName"
                    placeholder=""
                    type="date"
                  />
                </label>

                <label className={styles["label"]} htmlFor="email">
                  Email
                  <Field
                    id="email"
                    name="email"
                    placeholder="jane@gmail.com"
                    type="email"
                  />
                </label>

                <label className={styles["label"]}>
                  <button type="submit">Enviar</button>
                </label>
              </Form>
            </Formik>
          </div>
        )}
      </div>
    </>
  );
};

export default SendEmail;
