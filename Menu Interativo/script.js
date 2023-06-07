let nome = prompt("Qual seu nome?");
let cidade = prompt("Qual a sua cidade?");
let saldo = prompt("Informe seu saldo atual:");
let estatos = prompt(
    "Informe seu status social:\n(extrovertido/introvertido/muitos amigos/recluso)"
);

let opcao = " ";

do {
    opcao = prompt(
        "Seja bem vindo(a) " +
            nome +
            "\nEscolha uma das opções abaixo: \n1-Verificar Nome\n2-Consultar cidade\n3-Consultar Saldo\n4-Status social\n5-Encerrar"
    );

    switch (opcao) {
        case "1":
            alert("O nome cadastrado é: " + nome + "!");
            break;
        case "2":
            alert("Sua cidade é: " + cidade + "!");
            break;
        case "3":
            alert("Seu saldo atual é: " + saldo + ".");
            break;
        case "4":
            alert("Seu status social é: " + estatos + "!");
            break;
        case "5":
            alert("Obrigado por utilizar nossos serviços!");
            alert("Encerrando...");
            break;
        default:
            alert("Opção invalida!");
    }
} while (opcao !== "5");
