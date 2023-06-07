let atleta = prompt("Olá Atleta!\nQual seu nome?");
let checkpoints = " ";
let contagem = 0;
let prosseguir = prompt(
    "Deseja prosseguir para o proximo checkpoint? (sim/não)"
);

while (prosseguir === "sim") {
    let point = prompt("Qual o checkpoint alcançado?");
    checkpoints += " - " + point + "\n";
    contagem++;
    prosseguir = prompt("Deseja avançar para o proximo checkpoint? (sim/não)");
}

alert(
    "Atleta: " +
        atleta +
        "\nCheckpoints alcançados: \n" +
        checkpoints +
        "\nQuantidade de Checkpoints: " +
        contagem
);
