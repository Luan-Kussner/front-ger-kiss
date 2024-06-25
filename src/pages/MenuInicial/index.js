import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import * as C from "./styles";

const MenuInicial = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState("");

  const handleSaveNotes = () => {
    console.log(notes);
  };

  return (
    <C.Container>
      <header>
        <h1>GERCPN</h1>
        <h2>Olá Admin, seja bem-vindo</h2>
      </header>
      <div className="main-content">
        <div className="info-cards">
          <div className="info-card blue">
            <h3>0</h3>
            <p>Vendas efetuadas hoje</p>
            <Button onClick={() => navigate("/vendas")}>Visualizar</Button>
          </div>
          <div className="info-card yellow">
            <h3>0</h3>
            <p>Novos clientes este mês</p>
            <Button onClick={() => navigate("/clientes")}>Visualizar</Button>
          </div>
          <div className="info-card green">
            <h3>0</h3>
            <p>Contas a receber hoje</p>
            <Button onClick={() => navigate("/contas-receber")}>Visualizar</Button>
          </div>
          <div className="info-card red">
            <h3>0</h3>
            <p>Contas a pagar hoje</p>
            <Button onClick={() => navigate("/contas-pagar")}>Visualizar</Button>
          </div>
        </div>
        <div className="notes-section">
          <h3>Anotações</h3>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Anote aqui para não se esquecer..."
          ></textarea>
          <Button onClick={handleSaveNotes}>Salvar</Button>
        </div>
      </div>
      <footer>
        <h3>Atalhos</h3>
        <div className="shortcuts">
          <Button onClick={() => navigate("/contas-pagar-registro")}>
            Registro de contas a pagar
          </Button>
          <Button onClick={() => navigate("/contas-receber-registro")}>
            Registro de contas a receber
          </Button>
          <Button onClick={() => navigate("/financeiro")}>Financeiro</Button>
        </div>
      </footer>
      <div className="tools-section">
        <Button onClick={() => navigate("/cadastro-usuario")}>
          Ferramentas
        </Button>
      </div>
    </C.Container>
  );
};

export default MenuInicial;
