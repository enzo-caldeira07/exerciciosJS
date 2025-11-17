// Exercício 4: Verificador de Senha (Critérios Múltiplos)

function senhaForte(senha) {
    if (senha.length > 8 && senha !== "12345678") {
        return true;
    } else {
        return false;
    }
}

// Testes
console.log(senhaForte("minhasenha123"));  // true
console.log(senhaForte("12345678"));       // false
console.log(senhaForte("abc123"));         // false
console.log(senhaForte("senhasegura"));    // true