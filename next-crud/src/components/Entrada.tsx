import React from "react";

interface IEntradaProps {
  texto: string;
  valor: any;
  tipo?: "text" | "number";
  somenteLeitura?: boolean;
  className?: string;

  valorMudou?: (valor: any) => void;
}

const Entrada = (props: IEntradaProps) => {
  return (
    <div className={`flex flex-col ${props.className} `}>
      <label className="mb-4"> {props.texto}</label>
      <input
        type={props.tipo ?? "text"}
        value={props.valor}
        readOnly={props.somenteLeitura}
        onChange={(e) => props.valorMudou?.(e.target.value)}
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
