let nome = "Enzo"
let exp = 8500
let nivel = ""

if (exp > 0 && exp <= 1000){
    nivel = "Ferro"
}else if (exp > 1000 && exp <= 2000){
    nivel = "Bronze"
}else if (exp > 2000 && exp <= 5000){
    nivel = "Prata"
}else if (exp > 5000 && exp <= 7000){
    nivel = "Ouro"
}else if (exp > 7000 && exp <= 8000){
    nivel = "Platina"
}else if (exp > 8000 && exp <= 9000){
    nivel = "Ascendente"
}else if (exp > 9000 && exp <= 10000){
    nivel = "Imortal"
}else if (exp > 10000){
    nivel = "Radiante"
}else {
console.log ("O valor é nulo ou negativo")
}

console.log ("O Herói de nome " + nome + " está no nível de " + nivel)