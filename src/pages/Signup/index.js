import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { API_URL } from "../../Config/config";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = async () => {
    if (!email || !emailConf || !senha || !nome || !dataNascimento || !cpf) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
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
      <C.Label>GER KISS</C.Label>
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
            <label>E-mail</label>
            <Input
              type="email"
              placeholder="Digite seu E-mail"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
          </C.FormGroup>
          <C.FormGroup>
            <label>Confirme seu E-mail</label>
            <Input
              type="email"
              placeholder="Confirme seu E-mail"
              value={emailConf}
              onChange={(e) => [setEmailConf(e.target.value), setError("")]}
            />
          </C.FormGroup>
          <C.FormGroup>
            <label>Senha</label>
            <Input
              type="password"
              placeholder="Digite sua Senha"
              value={senha}
              onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
          </C.FormGroup>
        </C.FormRow>
        <C.LabelError>{error}</C.LabelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
