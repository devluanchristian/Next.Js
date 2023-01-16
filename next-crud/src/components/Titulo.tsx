import React from "react";

interface IProps {
  children: any;
}

const Titulo = (props: IProps) => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="px-7 py-5 text-2xl">{props.children}</h1>
      <hr className="border-2 border-purple-500" />
    </div>
  );
};

export default Titulo;
