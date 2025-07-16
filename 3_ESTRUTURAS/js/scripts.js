// 1 - variáveis
let nome = "Moises";

console.log(nome);

nome = "Moises Alves Silva";

console.log(nome);

const idade = 31;

console.log(idade);

console.log(typeof nome);
console.log(typeof idade);

// 2 - mais sobre variaveis
// let 2teste = "invalido"
// let @teste = "invalido"

let a = 10,
    b = 20,
    c = 30;

console.log(a, b, c);

const nomecompleto = "Moises Alves Silva";

const nomeCompleto = "Talita Martins de Souza"

console.log(nomecompleto);
console.log(nomeCompleto);

let _teste = "ok"
let $teste = "ok"

console.log(_teste, $teste);

// 3 - Prompt

// const age = prompt("Digite a sua idade: ");

// console.log(`Você tem ${age} anos.`);

// 4 - Alert

// alert("testando");

// const z = 10;

// alert(`número é ${z}`);

// 5 - Math
// console.log(Math.max(5, 2, 1, 10));
// console.log(Math.floor(5.14));
// console.log(Math.ceil(5.14));

// // 6 - console

// console.log("teste!");
// console.error("erro!");
// console.warn("aviso!")

// 7 - if
// const m = 10;

// m > 5

// if(m > 5) {

//     console.log("M é maior que 5!");

// };

// const user = "João";

// if(user === "João") {

//     console.log("Ola João");
// };

// if(user === "Maria") {
//     console.log("Olá Maria");
// }

// console.log(user === "Maria", user === "João");

// // 8 - else
// const loggedIn = false;

// if(loggedIn) {
//     console.log("Está autenticado!")
// } else {
//     console.log("Não está autenticado")
// }

// const q = 10;
// const w = 25;

// if(q > 5 && w > 20) {
//     console.log("Numeros mais altos");
// } else {
//     console.log("Os numeros não são mais altos");
// }

// // 9 - else if
// if(1 > 2) {
//     console.log("teste");
// } else if(2 > 3) {
//     console.log("teste 2");
// } else if(5 > 1) {
//     console.log("Agora sim!");
// }

// const userName = "Moises";
// const userAge = 32;

// if(userName === "Jose") {
//     console.log("Bem vindo Jose!");
// } else if(userName === "Moises" && userAge === 31) {
//     console.log("Ola Moises, vc tem 24 anos");
// } else {
//     console.log("Nenhuma condição aceita");
// }

// 10 - while

// let p = 0;

// while(p < 5) {
//     console.log(`Repetindo ${p}`);
//     p = p +1;
// }

// let x = 10;

// 11 - do while
// let o = 10;

// do {
//     console.log(`Valor de o: ${o}`);
//     o--;
// } while(o > 1)

//  12 - FOR
// for(let t = 0; t < 10; t++) {
//     console.log(`Repetindo algo`);
// }

// let r = 10;

// for(r; r > 0; r = r - 1) {
//     console.log(`reduzindo ${r}`);
// }

// 13 - identação lembrar sempre

// 14 - break
// for(let g = 20; g > 10; g--) {
//     console.log(`O valor de g é: ${g}`);

//     if (g === 15) {
//         console.log("O g é 15");
//         break;
//     }
// }

// // 15 - continue
// for(let s = 0; s < 10; s = s + 1) {
//     // operado resto = %
//     if(s % 2 === 0) {
//         console.log("numero par!");
//         continue;
//     }

//     console.log(s);
// }

// 16 - switch
const job = "asdas"

switch(job) {
    case "Programador":
        console.log("Vc é um programador")
        break
    case "Advogado":
        console.log("Vc é um Advogado")
        break
    case "Engenheiro":
        console.log("Vc é um Engenheiro");
        break
    default:
        console.log("Profissão não encontrada");
}


