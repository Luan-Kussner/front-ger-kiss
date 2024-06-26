import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import * as C from "./styles";

const Header = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState("");

  const handleSaveNotes = () => {
    console.log(notes);
  };

  return (
    <C.Container>
      <header>
        <h1>GER KISS</h1>
        <h2>Olá, seja bem-vindo</h2>
      </header>
    </C.Container>
  );
};

export default Header;
