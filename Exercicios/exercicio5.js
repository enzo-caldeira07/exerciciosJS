// Exercício 5: Alerta de Temperatura

function checarTemperatura(temperatura) {
    if (temperatura < 10) {
        return "Alerta de Frio";
    } else if (temperatura >= 10 && temperatura <= 25) {
        return "Temperatura Ideal";
    } else {
        return "Alerta de Calor";
    }
}

// Testes
console.log(checarTemperatura(5));   // "Alerta de Frio"
console.log(checarTemperatura(18));  // "Temperatura Ideal"
console.log(checarTemperatura(30));  // "Alerta de Calor"
console.log(checarTemperatura(10));  // "Temperatura Ideal"