import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../Config/config";

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    try {
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      };

      const data = {
        email,
        senha
      };

      const response = await axios.post(API_URL + "usuario/signin", data, { headers }); 
      if (response.status === 200) {
        alert("Usuário Logado com sucesso!");
        navigate("/menu-inicial");
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
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button onClick={handleLogin}>Entrar</Button>
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;