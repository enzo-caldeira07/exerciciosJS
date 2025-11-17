// Exercício 2: Determinar o Maior entre Três

function encontrarMaiorEntreTres(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

// Testes
console.log(encontrarMaiorEntreTres(10, 5, 8));  // 10
console.log(encontrarMaiorEntreTres(3, 15, 7));  // 15
console.log(encontrarMaiorEntreTres(4, 2, 20));  // 20