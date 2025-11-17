// Exercício 9: Calculadora de Média (Dois Valores)

function calcularMediaSimples(N1, N2) {
    const media = (N1 + N2) / 2;
    
    if (media >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

// Testes
console.log(calcularMediaSimples(8, 9));   // "Aprovado"
console.log(calcularMediaSimples(5, 6));   // "Reprovado"
console.log(calcularMediaSimples(7, 7));   // "Aprovado"
console.log(calcularMediaSimples(4, 8));   // "Reprovado"