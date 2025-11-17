// Exercício 6: Classificador de Dia da Semana

function nomeDoDia(numero) {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda";
        case 3:
            return "Terça";
        case 4:
            return "Quarta";
        case 5:
            return "Quinta";
        case 6:
            return "Sexta";
        case 7:
            return "Sábado";
        default:
            return "Número inválido";
    }
}

// Testes
console.log(nomeDoDia(1));  // "Domingo"
console.log(nomeDoDia(3));  // "Terça"
console.log(nomeDoDia(7));  // "Sábado"
console.log(nomeDoDia(9));  // "Número inválido"