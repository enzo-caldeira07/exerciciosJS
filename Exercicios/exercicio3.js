// Exercício 3: Classificador de Moedas

function classificarMoeda(valor) {
    if (valor === 0.01) {
        return "Um Centavo";
    } else if (valor === 0.05) {
        return "Cinco Centavos";
    } else if (valor === 0.10) {
        return "Dez Centavos";
    } else if (valor === 0.25) {
        return "Vinte e Cinco Centavos";
    } else if (valor === 0.50) {
        return "Cinquenta Centavos";
    } else if (valor === 1.00) {
        return "Um Real";
    } else {
        return "Valor Desconhecido";
    }
}

// Testes
console.log(classificarMoeda(0.01));  // "Um Centavo"
console.log(classificarMoeda(0.25));  // "Vinte e Cinco Centavos"
console.log(classificarMoeda(1.00));  // "Um Real"
console.log(classificarMoeda(2.00));  // "Valor Desconhecido"