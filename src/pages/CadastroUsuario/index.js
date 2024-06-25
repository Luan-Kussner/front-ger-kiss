import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../Config/config";

const CadastroUsuario = () => {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [sexo, setSexo] = useState("");
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!nome || !dataNascimento || !cpf || !sexo) {
      setError("Preencha todos os campos");
      return;
    }

    try {
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      };

      const data = {
        nome,
        dataNascimento,
        cpf,
        sexo,
        email,
        senha,
        perfil: 1
      };

      const response = await axios.post(API_URL + "usuario/signup", data, { headers }); 
      if (response.status === 200) {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("Ocorreu um erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <C.Container>
      <C.Label>Cadastro do Usuário</C.Label>
      <C.Content>
        <C.FormRow>
          <C.FormGroup>
            <label>Nome</label>
            <Input
              type="text"
              placeholder="Digite seu Nome"
              value={nome}
              onChange={(e) => [setNome(e.target.value), setError("")]}
            />
          </C.FormGroup>
          <C.FormGroup>
            <label>Data de Nascimento</label>
            <Input
              type="date"
              placeholder="Data de Nascimento"
              value={dataNascimento}
              onChange={(e) => [setDataNascimento(e.target.value), setError("")]}
            />
          </C.FormGroup>
          <C.FormGroup>
            <label>CPF</label>
            <Input
              type="text"
              placeholder="Digite seu CPF"
              value={cpf}
              onChange={(e) => [setCpf(e.target.value), setError("")]}
            />
          </C.FormGroup>
        </C.FormRow>
        <C.FormRow>
          <C.FormGroup>
            <label>Sexo</label>
            <select
              value={sexo}
              onChange={(e) => [setSexo(e.target.value), setError("")]}
            >
              <option value="">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </select>
          </C.FormGroup>
        </C.FormRow>
        <C.LabelError>{error}</C.LabelError>
        <Button onClick={handleSignup}>Salvar</Button>
      </C.Content>
    </C.Container>
  );
};

export default CadastroUsuario;
