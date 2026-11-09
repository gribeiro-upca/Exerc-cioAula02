//Variaveis
const nome = "Biblioteca UPCA";
const morada = "Rua da Biblioteca, 123";
let livros = 1250;
const dia = "Sabado";
let hora = 11;
let aberta;

//Exercício 2
console.log("--- Testes Exercício 2 ---");
livros = livros-3;
console.log(nome.toUpperCase()); 
console.log("A biblioteca do Bairro tem " + livros + " livros disponíveis.");

//Exercício 3
console.log("--- Testes Exercício 3 ---");
if (dia === "Domingo")
{
aberta = false;
} else if (dia === "Sabado") {  
    aberta = hora >= 10 && hora <= 13;
} else{
    aberta = hora >= 9 && hora <= 19;
}

console.log(aberta? "Aberta" : "Fechada");

//Exercício 4
console.log("--- Testes Exercício 4 ---");
function calcularMulta(dias) {
    return dias > 15 ? (dias -15) *0.5 : 0;
}
function formatarEuros(valor) {
    return valor.toFixed(2).replace(".", ",") + "€";
}
function mensagemMulta (dias) {
    const multa = calcularMulta(dias);
    if (multa == 0) return "Sem multa";
    return `Multa a pagar: ${formatarEuros(multa)}`;
}

console.log(mensagemMulta(10));
console.log(mensagemMulta(20));

//Exercício 5
console.log("--- Testes Exercício 5 ---");
const livrosa = ["Os Maias", "Mensagem", "A Sibila", "Os Lusíadas", "Aparição"];
livrosa.push("Memorial do Convento", "Ensaio sobre a Cegueira");
console.log(livrosa.length);
livrosa.forEach((titulos, i) => {
    console.log(`${i + 1}. ${titulos}`);
});
const longos = livrosa.filter(t => t.length > 10);
const maiusculos = livrosa.map(t => t.toUpperCase());
console.log(longos,maiusculos); 