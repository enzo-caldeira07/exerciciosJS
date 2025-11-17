// Exercício 7: Tipo de Triângulo

function tipoTriangulo(L1, L2, L3) {
    if (L1 == L2 && L2 == L3) {
        return "Equilátero";
    } else if (L1 == L2 || L1 == L3 || L2 == L3) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}

// Testes
console.log(tipoTriangulo(5, 5, 5));   // "Equilátero"
console.log(tipoTriangulo(5, 5, 8));   // "Isósceles"
console.log(tipoTriangulo(3, 4, 5));   // "Escaleno"
console.log(tipoTriangulo(7, 7, 10));  // "Isósceles"