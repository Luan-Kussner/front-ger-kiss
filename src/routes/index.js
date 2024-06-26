import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import MenuInicial from "../pages/MenuInicial";
import CadastroUsuario from "../pages/Usuarios/CadastroUsuario";
import ListaUsuarios from "../pages/Usuarios/ListaUsuarios";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/menu-inicial" element={<MenuInicial />} /> 
          <Route path="/cadastro-usuario/:id" element={<CadastroUsuario />} />
          <Route path="/lista-usuarios" element={<ListaUsuarios />} />
          <Route path="*" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;