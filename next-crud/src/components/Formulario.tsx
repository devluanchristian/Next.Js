import React, { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface IFormularioProps {
  cliente: Cliente;
  clienteMudou?: (cliente: Cliente) => void;
  cancelado?: () => void;
}

const Formulario = (props: IFormularioProps) => {
  const id = props.cliente?.getId();
  const [nome, setNome] = useState(props.cliente?.getNome() ?? "");
  const [idade, setIdade] = useState(props.cliente?.getIdade() ?? 0);



  return (
    <div>
      {id ? (
        <Entrada somenteLeitura texto="Codigo" valor={id}></Entrada>
      ) : (
        false
      )}

      <Entrada
        texto="Nome"
        valor={nome}
        valorMudou={setNome}
        className="mb-2"
      ></Entrada>
      <Entrada
        texto="Idade"
        tipo="number"
        valor={idade}
        className="mb-2"
        valorMudou={setIdade}
      ></Entrada>
      <div className=" flex justify-end mt-3">
        <Botao
          cor="blue"
          className="mr-2"
          onClick={() => props.clienteMudou?.(new Cliente(nome, idade, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao cor="gray" onClick={props.cancelado}>
          {" "}
          Cancelar
        </Botao>
      </div>
    </div>
  );
};

export default Formulario;
