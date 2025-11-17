// Exercício 1: Verificador de Idade para Habilitação

function podeDirigir(idade) {
    if (idade >= 18) {
        return "Pode ser habilitado(a)";
    } else {
        return "Ainda não pode";
    }
}

// Testes
console.log(podeDirigir(20)); // "Pode ser habilitado(a)"
console.log(podeDirigir(16)); // "Ainda não pode"
console.log(podeDirigir(18)); // "Pode ser habilitado(a)"