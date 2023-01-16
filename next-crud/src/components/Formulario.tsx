import React, { useState } from "react";
import Cliente from "../core/Cliente";
import Entrada from "./Entrada";

interface IFormularioProps {
  cliente: Cliente;
}

const Formulario = (props: IFormularioProps) => {
  const id = props.cliente?.getId();
  const [nome, setNome] = useState(props.cliente?.getNome() ?? "");
  const [idade, setIdade] = useState(props.cliente?.getIdade() ?? 0);

  <div>
    {id ? <Entrada somenteLeitura texto="Codigo" valor={id}></Entrada> : false}

    <Entrada texto="Nome" valor={nome}></Entrada>
    <Entrada texto="Idade" tipo="number" valor={idade}></Entrada>
  </div>;
};

export default Formulario;
