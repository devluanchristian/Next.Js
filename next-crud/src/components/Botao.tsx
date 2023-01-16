interface IProps {
  cor?: "green" | "blue" | "gray";
  children: any;
}

export default function Botao(props: IProps) {
  return (
    <button
      className={`bg-gradient-to-r
       from-blue-400 to-blue-700
        text-white px-4 py-2 rounded-md mb-4 `}
    >
      {props.children}
    </button>
  );
}
