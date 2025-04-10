
let resultado = 0;
vitorias_derrotas(60,5)

function vitorias_derrotas (vitorias, derrotas){
resultado = vitorias - derrotas
}

let nivel = ""

if (resultado < 10){
    nivel = "Ferro"
}else if (resultado > 10 && resultado <= 20){
    nivel = "Bronze"
}else if (resultado > 20 && resultado <= 50){
    nivel = "Prata"
}else if (resultado > 50 && resultado <= 80){
    nivel = "Ouro"
}else if (resultado > 80 && resultado <= 90){
    nivel = "Diamante"
}else if (resultado > 90 && resultado <= 100){
    nivel = "Lendario"
}else {
    nivel = "Imortal"
}

console.log ("O heroi tem de saldo de " + resultado + " e está no nivel de " + nivel)