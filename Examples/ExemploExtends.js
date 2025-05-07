class Pessoa {
  constructor(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }

  testeConsole() {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Sexo: ${this.sexo}.`);
  }
}

class Professor extends Pessoa {
  constructor(nome, idade, sexo, materia) { /* ◽ Chamada do constructor da classe mãe */
    super(nome, idade, sexo); 
    /* ◽ O super é uma representação do constructor da classe mãe. E sempre deve ser a primeira linha na classe filha❗ */
    this.materia = materia; /* ◽ Adicionando uma nova propriedade a classe filha */
  }

  darAula() {
    console.log(`Agora o professor ${this.nome} está dando aula de ${this.materia}!`);
  }
}

/* 🔹 Colocando um Objeto para a classe Professor  */
const professor1 = new Professor("Carlos", 40, "Masculino", "Matemática");

console.log("Método da classe Professor:")
/* ◽ Chama o método da classe Professor */
professor1.darAula()

console.log("---------------------------------------------------------------")

console.log("Método da classe Pessoa:")
/* ◽ Chama o método da classe Pessoa (classe mãe) */
professor1.testeConsole();