const pesso = {
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
    }
}

// Lembrando que o "THIS" é usado para acessar as propriedades do objeto dentro do método

console.log(pesso.nomeCompleto()); // Saída: João Silva
console.log(pesso.exibirIdade()); // Saída: 30