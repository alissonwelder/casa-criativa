// vamos falar de coisa basicas da programação em Javasctipt:

//variaveis:

const mensagem = "oi como vai?" // string

const number = 2.5

function soma(numero1, numero2) {

   return numero1 + numero2
   
}


const somar = soma(10,20)

console.log(soma(5,5))
console.log(somar)

// objeto 

const xicara = {
   cor: "branca",
   tamanho: 10,
   estaSujo(simNao){
      /// logica de programação
      console.log(simNao)

   }
}

console.log(xicara.estaSujo("sim"))

const cor = "preto"
const tamanho = 5
function sujo(esta){
   console.log(esta)
}

const xicara2 ={
   cor,
   tamanho,
   sujo
}