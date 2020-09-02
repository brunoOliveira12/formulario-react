import React from 'react';
import './App.css';
import FormularioCadastro from './components/formularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">Formulario de cadastro</Typography>
      <FormularioCadastro aoEnviar={EnviarFormulario} validarCpf={validarCpf}/>
    </Container>
  );
}

function EnviarFormulario(dados) {
  console.log(dados);
}

function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "Cpf deve conter 11 digitos" }
  } else {
    return { valido: true, texto: "" }
  }
}

export default App;
