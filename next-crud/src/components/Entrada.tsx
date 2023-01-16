import React from "react";

interface IEntradaProps {
  texto: string;
  valor: any;
  tipo?: "text" | "number";
  somenteLeitura?: boolean;

  valorMudou?: (valor: any) => void;
}

const Entrada = (props: IEntradaProps) => {
  return (
    <div className="flex flex-col">
      <label className="mb-4"> {props.texto}</label>
      <input
        type={props.tipo ?? "text"}
        value={props.valor}
        readOnly={props.somenteLeitura}
        className={`border border-purple-500 rounded-lg
            focus: outline-none bg-gray-100
            p-2
            ${props.somenteLeitura ? "" : "focus:bg-white"}
         `}
      />
    </div>
  );
};

export default Entrada;
