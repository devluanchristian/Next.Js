export default class Cliente {
  private id: string;
  private nome: string;
  private idade: number;

  constructor(nome: string, idade: number, id: string) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
  }

  static vazio() {
    return new Cliente("", 0, "");
  }
  getId() {
    return this.id;
  }
  getNome() {
    return this.nome;
  }
  getIdade() {
    return this.idade;
  }
}
