//nomeando as variaveis

let nome = ''
let idade = 0
let altura = 0
let peso= 0 

//pedindo a informção ao usuario

nome = prompt('Digite seu nome: ')
idade = parseInt(prompt('DIgite sua idade: '))
peso = parseFloat(prompt('DIgite seu peso:'))
altura =(prompt('DIgite sua altura: '))

//calculando imc e ano de de nascimento


let anoNasc = 0
anoNasc = 2024 - idade
let imc = 0
imc = peso / (altura * altura)
console.log("Olá"  +  nome + ",você nasceu em"  +  anoNasc + ",tem "  + altura +  "de altura e pesa"  + peso + "Kg.Seu IMC é de"+ imc +"kg/m2") 