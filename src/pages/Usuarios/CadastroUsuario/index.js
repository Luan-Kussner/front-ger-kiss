import React, { useState, useEffect } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import * as C from "./styles";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../Config/config";

const CadastroUsuario = () => {
  const { id } = useParams(); // Obtém o ID do usuário da URL
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [sexo, setSexo] = useState("");
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchUsuario = async () => {
          try {
              const response = await axios.get(API_URL + `usuario/${id}`);
              const { nome, dataNascimento, cpf, sexo, email } = response.data;
              console.log(response.data);

              const formattedDate = dataNascimento.split('T')[0];

              setNome(nome);
              setDataNascimento(formattedDate);
              setCpf(cpf);
              setSexo(sexo);
              setEmail(email);
          } catch (error) {
              console.error("Erro ao carregar usuário:", error);
              setError("Erro ao carregar usuário");
          }
      };

      fetchUsuario();
    }
  }, [id]);

  const salvarUsuario = async () => {
    const data = {
      nome,
      dataNascimento,
      cpf,
      sexo,
      email,
      perfil: 1,
    };

    try {
      if (id) {
        console.log(id);
        await axios.put(API_URL + `usuario/${id}`, data);
        alert("Usuário atualizado com sucesso!");
      } else {
        await axios.post(API_URL + "usuario/signup", data);
        alert("Usuário cadastrado com sucesso!");
      }
      navigate("/lista-usuarios");
    } catch (error) {
      setError("Ocorreu um erro ao salvar. Tente novamente.");
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
              onChange={(e) => setNome(e.target.value)}
            />
          </C.FormGroup>
          <C.FormGroup>
            <label>Data de Nascimento</label>
            <Input
              type="date"
              placeholder="Data de Nascimento"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
            />
          </C.FormGroup>
          <C.FormGroup>
            <label>CPF</label>
            <Input
              type="text"
              placeholder="Digite seu CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </C.FormGroup>
        </C.FormRow>
        <C.FormRow>
          <C.FormGroup>
            <label>Sexo</label>
            <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
              <option value="">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </select>
          </C.FormGroup>
        </C.FormRow>
        <C.LabelError>{error}</C.LabelError>
        <Button onClick={salvarUsuario}>Salvar</Button>
      </C.Content>
    </C.Container>
  );
};

export default CadastroUsuario;
