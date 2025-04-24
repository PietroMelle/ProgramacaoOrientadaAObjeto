const pessoa = {
    primeiroNome: "João",
    ultimoNome: "Silva",
    idade: 30,
    // Método para exibir o nome completo
    nomeCompleto: function() {
        return this.primeiroNome + " " + this.ultimoNome;
    },
    // Método para exibir a idade
    exibirIdade: function() {
        return this.idade;
    },
}

console.log(pessoa.nomeCompleto()); // Saída: João Silva
console.log(pessoa.exibirIdade()); // Saída: 30

pessoa.idade = 31; // Alterando a propriedade idade
console.log(pessoa.exibirIdade()); // Saída: 31

pessoa.nacionalidade = "Brasileiro"; // Adicionando nova propriedade
console.log(pessoa.nacionalidade); // Saída: Brasileiro

console.log(pessoa); 
// Saída: { primeiroNome: 'João', ultimoNome: 'Silva', idade: 31, nomeCompleto: [Function], exibirIdade: [Function], nacionalidade: 'Brasileiro' }