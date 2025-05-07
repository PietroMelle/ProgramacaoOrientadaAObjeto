// 🚩 Definindo uma Classe
class MinhaNovaClasse {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade
    }
}
// ❗ Constructor é usado para inicializar as propriedades do objeto, é um método obrigatório para a declaação dos atributos


// ✅ Estânciando objetos:

// Objeto 1️⃣
meuNovoObjeto1 = new MinhaNovaClasse("Maria", 17)

// Objeto 2️⃣
meuNovoObjeto2 = new MinhaNovaClasse("João", 21)


// ✅ Mostrando os objetos

console.log(meuNovoObjeto1) // Saída: " MinhaNovaClasse { nome: 'Maria', idade: 17 } "

console.log(meuNovoObjeto2) // Saída: " MinhaNovaClasse { nome: 'João', idade: 21 } "


// ✅ Mostrando apenas uma propriedade

console.log(meuNovoObjeto1.nome) // Saída: " Maria "