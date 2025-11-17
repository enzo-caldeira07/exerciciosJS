// Exercício 8: Gerador de Nome Completo

function gerarNomeCompleto(objeto) {
    return objeto.primeiroNome + " " + objeto.sobrenome;
}

// Testes
console.log(gerarNomeCompleto({ primeiroNome: "Ana", sobrenome: "Silva" }));
// "Ana Silva"

console.log(gerarNomeCompleto({ primeiroNome: "João", sobrenome: "Santos" }));
// "João Santos"

console.log(gerarNomeCompleto({ primeiroNome: "Maria", sobrenome: "Oliveira" }));
// "Maria Oliveira"