console.log("Exercício Criação de Objetos e suas visualizações")

// Pular linha
console.log("")

console.log("Caneta ✍ ")

const caneta = {
    cor: "Azul",
    tamanho: "Pequena",
    marca: "BIC",
    tipo: "Esferográfica",
    getInformacoes1: function() {
        return `Cor: ${this.cor}, Tamanho: ${this.tamanho}`
    },
    getInformacoes2: function() {
        return `Marca: ${this.marca}, Tipo: ${this.tipo}`
    }
}

console.log(caneta.getInformacoes1())
console.log(caneta.getInformacoes2())

// Alterando o valor da propriedade cor
caneta.cor = "Vermelha"
console.log(`Cor alterada: ${caneta.cor}`)

// Criando uma nova propriedade
caneta.preco = 2.50
console.log(`(Nova Propriedade) Preço: R$ ${caneta.preco}`)

/* -------------------------------------------------------------------------------------------------------------------------------------------- */
console.log("--------------------------------------------------------------------------------------------------------")
/* -------------------------------------------------------------------------------------------------------------------------------------------- */

console.log("Caderno 📒 ")

const computador = {
    placaDeVideo: "NVIDIA",
    processador: "Intel Core i9",
    memoriaRam: "32GB",
    armazenamento: "1TB SSD",
    getInformacoes1: function() {
        return `Placa de Vídeo: ${this.placaDeVideo}, Processador: ${this.processador}`
    },
    getInformacoes2: function() {
        return `Memória RAM: ${this.memoriaRam}, Armazenamento: ${this.armazenamento}`
    }
}

console.log(computador.getInformacoes1())
console.log(computador.getInformacoes2())

// Alterando o valor da propriedade placaDeVideo
computador.placaDeVideo = "AMD Radeon"
console.log(`Placa de Vídeo alterada: ${computador.placaDeVideo}`)

// Criando uma nova propriedade
computador.preco = 5000.00
console.log(`(Nova Propriedade) Preço: R$ ${computador.preco}`)

/* -------------------------------------------------------------------------------------------------------------------------------------------- */
console.log("--------------------------------------------------------------------------------------------------------")
/* -------------------------------------------------------------------------------------------------------------------------------------------- */

console.log("Celular 📱 ")

const celular = {
    cor: "Preto",
    tamanho: "Grande",
    marca: "Iphone",
    armazenamento: "128GB",
    modelo: "Iphone 14",
    getInformacoes1: function() {
        return `Cor: ${this.cor}, Tamanho: ${this.tamanho}`
    },
    getInformacoes2: function() {
        return `Marca: ${this.marca}, Armazenamento: ${this.armazenamento}, Modelo: ${this.modelo}`
    }
}

console.log(celular.getInformacoes1())
console.log(celular.getInformacoes2())

// Alterando o valor da propriedade modelo
celular.modelo = "Iphone 15"

// Criando uma nova propriedade
celular.preco = 7000.00
console.log(celular)

/* -------------------------------------------------------------------------------------------------------------------------------------------- */
console.log("--------------------------------------------------------------------------------------------------------")
/* -------------------------------------------------------------------------------------------------------------------------------------------- */

console.log("Mesa 🪓 ")

const mesa = {
    cor: "Marrom",
    tamanho: "Grande",
    tipoDaMadeira: "Maçiça",
    dataDeFabricacao: "24/04/2025",
    getInformacoes1: function() {
        return `Cor: ${this.cor}, Tamanho: ${this.tamanho}`
    },
    getInformacoes2: function() {
        return `Tipo da Madeira: ${this.tipoDaMadeira}, Data de Fabricação: ${this.dataDeFabricacao}`
    }
}

console.log(mesa.getInformacoes1())
console.log(mesa.getInformacoes2())

// Alterando o valor da propriedade tipoDaMadeira
mesa.tipoDaMadeira = "MDF"

// Criando uma nova propriedade
mesa.preco = 1500.00
console.log(mesa)

/* -------------------------------------------------------------------------------------------------------------------------------------------- */
console.log("--------------------------------------------------------------------------------------------------------")
/* -------------------------------------------------------------------------------------------------------------------------------------------- */

console.log("Calça 👖 ")

const calca = {
    marca: "Levis",
    tamanho: "40",
    cor: "Azul Jeans",
    modelo: "Skinny",
    getInformacoes1: function() {
        return `Marca: ${this.marca}, Tamanho: ${this.tamanho}`
    },
    getInformacoes2: function() {
        return `Cor: ${this.cor}, Modelo: ${this.modelo}`
    }
}

console.log(calca.getInformacoes1())
console.log(calca.getInformacoes2())

// Alterando o valor da propriedade modelo
calca.modelo = "Slim"
console.log(`Modelo alterado: ${calca.modelo}`)

// Criando uma nova propriedade
calca.preco = 200.00
console.log(calca)

/* -------------------------------------------------------------------------------------------------------------------------------------------- */
console.log("--------------------------------------------------------------------------------------------------------")
/* -------------------------------------------------------------------------------------------------------------------------------------------- */

console.log("Mochila 🎒 ")

const mochila = {
    cor: "Azul e Vermelha",
    tamanho: "Grande",
    marca: "Nike",
    quantidadeDeBolso: 5,
    getInformacoes1: function() {
        return `Cor: ${this.cor}, Tamanho: ${this.tamanho}`
    },
    getInformacoes2: function() {
        return `Marca: ${this.marca}, Quantidade de Bolso: ${this.quantidadeDeBolso}`
    }
}

console.log(mochila.getInformacoes1())
console.log(mochila.getInformacoes2())

// Alterando o valor da propriedade quantidadeDeBolso
mochila.quantidadeDeBolso = 8
console.log(`Quantidade de Bolso alterada: ${mochila.quantidadeDeBolso}`)

// Criando uma nova propriedade
mochila.preco = 300.00
console.log(mochila)

/* -------------------------------------------------------------------------------------------------------------------------------------------- */
console.log("--------------------------------------------------------------------------------------------------------")
/* -------------------------------------------------------------------------------------------------------------------------------------------- */

console.log("Cadeira 🪑 ")

const cadeira = {
    cor: "Preta",
    tamanho: "Grande",
    tipoDeMaterial: "Plástico",
    dataDeFabricacao: "24/04/2025",
    getInformacoes1: function() {
        return `Cor: ${this.cor}, Tamanho: ${this.tamanho}`
    },
    getInformacoes2: function() {
        return `Tipo de Material: ${this.tipoDeMaterial}, Data de Fabricação: ${this.dataDeFabricacao}`
    }
}

console.log(cadeira.getInformacoes1())
console.log(cadeira.getInformacoes2())

// Alterando o valor da propriedade tipoDeMaterial
cadeira.tipoDeMaterial = "Ferro"
console.log(`Tipo de Material alterada: ${cadeira.tipoDeMaterial}`)

// Criando uma nova propriedade
cadeira.preco = 500.00
console.log(cadeira)

/* -------------------------------------------------------------------------------------------------------------------------------------------- */
console.log("--------------------------------------------------------------------------------------------------------")
/* -------------------------------------------------------------------------------------------------------------------------------------------- */

console.log("Carro 🚗 ")

const carro = {
    cor: "Preto",
    roda: "Aro 20",
    motor: "2.0 Turbo",
    modelo: "Etios",
    marca: "Toyota",
    getInformacoes1: function() {
        return `Cor: ${this.cor}, Roda: ${this.roda}`
    },
    getInformacoes2: function() {
        return `Motor: ${this.motor}, Modelo: ${this.modelo}, Marca: ${this.marca}`
    }
}

console.log(carro.getInformacoes1())
console.log(carro.getInformacoes2())

// Alterando o valor da propriedade modelo
carro.modelo = "Corolla"
console.log(`Modelo alterado: ${carro.modelo}`)

// Criando uma nova propriedade
carro.preco = 250000.00
console.log(carro)

/* -------------------------------------------------------------------------------------------------------------------------------------------- */
console.log("--------------------------------------------------------------------------------------------------------")
/* -------------------------------------------------------------------------------------------------------------------------------------------- */

console.log("Ferramenta 🔧 ")

const ferramenta = {
    cor: "Cinza",
    marca: "Bosch",
    tamanho: "Pequena",
    material: "Aço",
    getInformacoes1: function() {
        return `Cor: ${this.cor}, Marca: ${this.marca}`
    },
    getInformacoes2: function() {
        return `Tamanho: ${this.tamanho}, Material: ${this.material}`
    }
}

console.log(ferramenta.getInformacoes1())
console.log(ferramenta.getInformacoes2())

// Alterando o valor da propriedade tamanho
ferramenta.tamanho = "Grande"
console.log(`Tamanho alterado: ${ferramenta.tamanho}`)

// Criando uma nova propriedade
ferramenta.preco = 50.00
console.log(`Preço: R$ ${ferramenta.preco}`)

/* -------------------------------------------------------------------------------------------------------------------------------------------- */
console.log("--------------------------------------------------------------------------------------------------------")
/* -------------------------------------------------------------------------------------------------------------------------------------------- */