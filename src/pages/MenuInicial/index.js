import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import * as C from "./styles";
import Header from "../Header";

const MenuInicial = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState("");

  const handleSaveNotes = () => {
    console.log(notes);
  };

  return (
    <C.Container>
      <Header />
      <div className="main-content">
        <div className="info-cards">
          <div className="info-card blue">
            <p>Usuarios cadastrados</p>
            <Button onClick={() => navigate("/lista-usuarios")}>Visualizar</Button>
          </div>
          <div className="info-card yellow">
            <p>Tela a mais 1</p>
            <Button onClick={() => navigate("/lista-usuarios")}>Visualizar</Button>
          </div>
          <div className="info-card green">
            <p>Tela a mais 2</p>
            <Button onClick={() => navigate("/lista-usuarios")}>Visualizar</Button>
          </div>
          <div className="info-card red">
            <p>Tela a mais 3</p>
            <Button onClick={() => navigate("/lista-usuarios")}>Visualizar</Button>
          </div>
        </div>
      </div>
    </C.Container>
  );
};

export default MenuInicial;
