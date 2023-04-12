const readline = require('readline'); // Livraria para digitar no console.
// Lembrando que "readline" é uma livraria inata do NodeJS

// Cria uma interface para leitura de dados do console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inverteString(s) {
    /*
    Função que inverte os caracteres de uma string.
    */
    let caracteres = s.split(''); // Converte a string em um array de caracteres

    let inicio = 0; // Índice inicial para inverter o array
    let fim = caracteres.length - 1; // Índice final para inverter o array

    while (inicio < fim) {
        // Troca o caractere no índice inicio com o caractere no índice fim
        [caracteres[inicio], caracteres[fim]] = [caracteres[fim], caracteres[inicio]];
        // Atualiza os índices
        inicio++;
        fim--;
    }

    let sInvertida = caracteres.join(''); // Converte o array de caracteres de volta para uma string

    return sInvertida;
}

// Solicita que o usuário digite a palavra a ser invertida
rl.question("Digite a palavra a ser invertida: ", function(stringOriginal) {
    // Chama a função inverteString para inverter a string digitada
    let stringInvertida = inverteString(stringOriginal);

    console.log("String original: " + stringOriginal);
    console.log("String invertida: " + stringInvertida);

    rl.close(); // Fecha a interface de leitura de dados do console
});
