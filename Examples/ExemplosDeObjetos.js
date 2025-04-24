// Meu primeiro objeto no JavaScript, sou feliz e vou mostrar para o papai e para a mamãe

console.log(`Pegando os detalhes sem função:`)

const carro = {marca: "Fiat", modelo: "500", cor: "Branco"}

console.log(carro)

console.log(carro.marca)

console.log(carro.modelo)

console.log(carro.cor)

/* --------------------------------------------------------------------------------------------------------------- */
console.log(`----------------------------------------`)
/* --------------------------------------------------------------------------------------------------------------- */
console.log(`Pegando os detalhes com função:`)

var carro1 = {
    marca: "Ford",
    modelo: "Ka",
    getDetalhes: function() {
        return this.marca + " - " + this.modelo
        /* "this" serve para conseguir manipular o objeto antes de cria-lo. Não irá funcionar o "carro.marca" pois ainda não criamos essa variável.
            Não pode usar "this" em outro lugar a não ser aqui. */
    }
}

// Mostra o objeto por inteiro
console.log(carro1)

// Usa a função getDetalhes para mostrar os detalhes do carro, assim não precisamos repetir sempre um console.log(...)
console.log(carro1.getDetalhes())

// Muda o modelo do carro para "Novo Ka"
carro1.modelo = "Novo Ka"

// Usa novamente a função, mas agora com o modelo alterado
console.log(`Novo modelo: ${carro1.getDetalhes()}`)

/* --------------------------------------------------------------------------------------------------------------- */
console.log(`----------------------------------------`)
/* --------------------------------------------------------------------------------------------------------------- */

const pessoa = {
    primeiroNome: "João",
    ultimoNome: "Silva",
    RG: "123.456.789-0",
    nomeInteiro: function() {
        return this.primeiroNome + " " + this.ultimoNome
    },
}

alert(pessoa.nomeInteiro())

console.log(pessoa["RG"]) // Posso usar também os colchetes [] para pegar alguma propriedade do objeto

/* --------------------------------------------------------------------------------------------------------------- */
console.log(`----------------------------------------`)
/* --------------------------------------------------------------------------------------------------------------- */

