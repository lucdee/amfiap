import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import * as S from '../styles/styled-components/styles';
import Local from "./Local";

const Map = () => {
  const [isLocal1, setIsLocal1] = useState(false);
  const [isLocal2, setIsLocal2] = useState(false);
  const [isLocal3, setIsLocal3] = useState(false);
  const [isLocal4, setIsLocal4] = useState(false);
  const [isLocal5, setIsLocal5] = useState(false);


 
console.log(isLocal1)
  return (
    <S.Container>
      <S.Search>
        {isLocal1 &&   <Local img={"foto2.jpg"} card={"Salão Lapa"} id={1} />}
        {isLocal2 &&   <Local img={"foto3.jpg"} card={"Salão Vila Mariana"} id={1} />}
        {isLocal3 &&   <Local img={"foto4.jpg"} card={"Dança 77"} id={1} />}
        {isLocal4 &&   <Local img={"foto5.jpg"} card={"Itapevi Dance"} id={1} />}
        {isLocal5 &&   <Local img={"foto6.jpg"} card={"OsasDance"} id={1} />}
        <S.S1
          isLocal1={isLocal1}
          onClick={() =>
            setIsLocal1(!isLocal1) & setIsLocal2(false) & setIsLocal3(false)  & setIsLocal4(false) & setIsLocal5(false)
          }
        >
          <FaMapMarkerAlt
            size="30"
            style={{ margin: "200px 0 0 700px", position: "absolute" }}
          />
        </S.S1>
        <S.S2
          isLocal2={isLocal2}
          onClick={() =>
            setIsLocal2(!isLocal2) & setIsLocal1(false) & setIsLocal3(false)  & setIsLocal4(false) & setIsLocal5(false)
          }
        >
          <FaMapMarkerAlt
            size="30"
            style={{ margin: "20px 0 0 500px", position: "absolute" }}
          />
        </S.S2>
        <S.S2
          isLocal2={isLocal3}
          onClick={() =>
            setIsLocal3(!isLocal3) & setIsLocal1(false) & setIsLocal2(false) & setIsLocal4(false) & setIsLocal5(false)
          }
        >
          <FaMapMarkerAlt
            size="30"
            style={{ margin: "500px 0 0 800px", position: "absolute" }}
          />
        </S.S2>
        <S.S4
          isLocal4={isLocal4}
          onClick={() =>
            setIsLocal4(!isLocal4) & setIsLocal1(false) & setIsLocal2(false)& setIsLocal3(false) & setIsLocal5(false)
          }
        >
          <FaMapMarkerAlt
            size="30"
            style={{ margin: "300px 0 0 100px", position: "absolute" }}
          />
        </S.S4>
        <S.S5
          isLocal5={isLocal5}
          onClick={() =>
            setIsLocal5(!isLocal5) & setIsLocal1(false) & setIsLocal2(false)& setIsLocal3(false) & setIsLocal4(false)
          }
        >
          <FaMapMarkerAlt
            size="30"
            style={{ margin: "200px 0 0 500px", position: "absolute" }}
          />
        </S.S5>
      </S.Search>
      <img
        style={{
          height: "100%",
          width: "100%",
          minWidth: "2000px",
          margin: "0",
          minHeight: "100vh",
        }}
        src="mapa.png"
      ></img>
    </S.Container>
  );
};

export default Map;
