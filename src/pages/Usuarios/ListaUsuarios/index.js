import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../Config/config";
import "datatables.net-dt/css/dataTables.dataTables.min.css"; // Caminho correto
import $ from "jquery";
import "datatables.net";
import Header from "../../Header";
import Button from "../../../components/Button";
import { Link, useNavigate } from "react-router-dom";

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get(API_URL + "usuario/usuarios");
        setUsuarios(response.data);
        // Inicializa o DataTable após definir os dados
        if ($.fn.dataTable.isDataTable("#usuariosTable")) {
          $("#usuariosTable").DataTable().destroy();
        }
        $(document).ready(function () {
          $("#usuariosTable").DataTable();
        });
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchUsuarios();
  }, []);

  const editarUsuario = async (id) => {
    navigate(`/cadastro-usuario/${id}`);
  };

  const deletarUsuario = async () => {
    navigate("/");
  };

  return (
    <div>
      <Header />
      <h1>Lista de Usuários</h1>
      <table id="usuariosTable" className="display">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nome}</td>
              <td>{usuario.email}</td>
              <td>
                <Button onClick={() => editarUsuario(usuario.id)}>Editar</Button>
                <Button onClick={deletarUsuario}>Deletar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaUsuarios;
