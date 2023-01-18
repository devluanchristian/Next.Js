interface IProps {
  cor?: "green" | "blue" | "gray";
  children: any;
  className?: string;
  onClick?: () => void;
}

export default function Botao(props: IProps) {
  return (
    <button onClick={props.onClick}
      className={`bg-gradient-to-r
       from-blue-400 to-blue-700
        text-white px-4 py-2 rounded-md mb-4 ${props.className} `}
    >
      {props.children}
    </button>
  );
}
