import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente("Luan", 21, "1"),
    new Cliente("Lara", 20, "2"),
    new Cliente("Elisabete", 40, "3"),
  ];

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.getNome());
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.getNome());
  }
  return (
    <div
      className={`
      flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}
    >
      <Layout titulo={"Cadastro simples "}>
        <div className=" flex justify-end">
          <Botao>Novo Cliente</Botao>
        </div>
        {/*<Tabela
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        ></Tabela> */}
        <Formulario ></Formulario>
      </Layout>
    </div>
  );
}
