// Exercício 10: Formatação de Telefone Simples

function formatarTelefone(numero) {
    const primeiraParte = numero.slice(0, 4);
    const segundaParte = numero.slice(4, 8);
    return primeiraParte + "-" + segundaParte;
}

// Testes
console.log(formatarTelefone("99887766"));  // "9988-7766"
console.log(formatarTelefone("12345678"));  // "1234-5678"
console.log(formatarTelefone("55556666"));  // "5555-6666"