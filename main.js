let tabelaEl = document.getElementById("tabela-el")
let jogador1El = document.getElementById("jogador1-el")
let jogador2El = document.getElementById("jogador2-el")
let nomeJogador1 = document.getElementById("nomeJogador1-el")
let nomeJogador2 = document.getElementById("nomeJogador2-el")



let tresVermelhosJogador1 = 0
let tresPretosJogador1 = 0
let canastrasLimpasJogador1 = 0
let canastasSujasJogador1 = 0
let cartasRestantesJogador1 = 0
let resultadoRodadaJogador1 = document.getElementById("resultadoRodadaJogador1")
let resultadoTotalJogador1 = document.getElementById("resultadoTotalJogador1")


let tresVermelhosJogador2 = 0
let tresPretosJogador2 = 0
let canastrasLimpasJogador2 = 0
let canastasSujasJogador2 = 0
let cartasRestantesJogador2 = 0
let resultadoRodadaJogador2 = document.getElementById("resultadoRodadaJogador2")
let resultadoTotalJogador2 = document.getElementById("resultadoTotalJogador2")

let totalJogador1 = 0
let totalJogador2 = 0
let novoTotalJogador1 = 0
let novoTotalJogador2 = 0
let totalSalvo = []


function calcular() {

//let retorno = []
totalJogador1 = 0
totalJogador2 = 0

if(document.getElementById("batidaJogador1").checked === true) {totalJogador1 += 100}

if(document.getElementById("mortoJogador1").checked === true) {totalJogador1 += 100}


tresVermelhosJogador1 = document.getElementById("3vermelhosJogador1").value * 100 
totalJogador1 += tresVermelhosJogador1



canastrasLimpasJogador1 = document.getElementById("canastrasLimpasJogador1").value * 200
totalJogador1 += canastrasLimpasJogador1

canastrasSujasJogador1 = document.getElementById("canastrasSujasJogador1").value * 100
totalJogador1 += canastrasSujasJogador1

cartasRestantesJogador1 = document.getElementById("cartasRestantesJogador1").value * 10
totalJogador1 += cartasRestantesJogador1

tresPretosJogador1 = document.getElementById("3pretosJogador1").value * -100
totalJogador1 += tresPretosJogador1

if(document.getElementById("mortoJogador1").checked === false) {totalJogador1 = totalJogador1 - 100}

if(canastasSujasJogador1 === 0 && canastrasLimpasJogador1 === 0){totalJogador1 = totalJogador1 - tresVermelhosJogador1}

console.log(totalJogador1)

resultadoRodadaJogador1.textContent = "Resultado: " + totalJogador1
//resultadoTotalJogador1.textContent = "Pontuação Total: " + totalJogador1


//####################################################################################################//

if(document.getElementById("batidaJogador2").checked === true) {totalJogador2 += 100}

if(document.getElementById("mortoJogador2").checked === true) {totalJogador2 += 100}



tresVermelhosJogador2 = document.getElementById("3vermelhosJogador2").value * 100 
totalJogador2 += tresVermelhosJogador2

canastrasLimpasJogador2 = document.getElementById("canastrasLimpasJogador2").value * 200
totalJogador2 += canastrasLimpasJogador2

canastrasSujasJogador2 = document.getElementById("canastrasSujasJogador2").value * 100
totalJogador2 += canastrasSujasJogador2

cartasRestantesJogador2 = document.getElementById("cartasRestantesJogador2").value * 10
totalJogador2 += cartasRestantesJogador2

tresPretosJogador2 = document.getElementById("3pretosJogador2").value * -100
totalJogador2 += tresPretosJogador2

if(document.getElementById("mortoJogador2").checked === false) {totalJogador2 = totalJogador2 - 100}

if(canastasSujasJogador2 === 0 && canastrasLimpasJogador2 === 0){totalJogador2 = totalJogador2 - tresVermelhosJogador2}


resultadoRodadaJogador2.textContent = "Resultado: " + totalJogador2


totalSalvo.splice(0, 2, totalJogador1, totalJogador2)


return totalSalvo

}



function continuar() {    
console.log(totalSalvo)
novoTotalJogador1 +=  totalSalvo[0]
novoTotalJogador2 +=  totalSalvo[1]
document.getElementById("batidaJogador1").checked = false
document.getElementById("mortoJogador1").checked = false
document.getElementById("3vermelhosJogador1").value = ""
document.getElementById("3pretosJogador1").value = ""
document.getElementById("canastrasLimpasJogador1").value = ""
document.getElementById("canastrasSujasJogador1").value = ""
document.getElementById("cartasRestantesJogador1").value = ""
resultadoRodadaJogador1.textContent = "Resultado: "


document.getElementById("batidaJogador2").checked = false
document.getElementById("mortoJogador2").checked = false
document.getElementById("3vermelhosJogador2").value = ""
document.getElementById("3pretosJogador2").value = ""
document.getElementById("canastrasLimpasJogador2").value = ""
document.getElementById("canastrasSujasJogador2").value = ""
document.getElementById("cartasRestantesJogador2").value = ""
resultadoRodadaJogador2.textContent = "Resultado: "


resultadoTotalJogador1.textContent = "Resultado Total: " + novoTotalJogador1
resultadoTotalJogador2.textContent = "Resultado Total: " + novoTotalJogador2


}

     function iniciar() {
    console.log("iniciou")
    nomeJogador1.textContent = jogador1El.value
    nomeJogador2.textContent = jogador2El.value
}

