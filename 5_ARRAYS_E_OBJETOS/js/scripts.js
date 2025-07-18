// 1 - arrays
// const lista = [1, 2, 3, 4, 5];

// console.log(lista);

// console.log(typeof lista);

// const itens = ["Moises", true, 2, 4.12, []];

// console.log(itens);

// // 2 - Mais sobre arrays
// const arr = ["a", "b", "c", "d", "d"]

// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[83]);

// // 3 - propriedades
// const numbers = [5, 2, 4];

// console.log(numbers.length);
// console.log(numbers["length"]);

// const myName = "Moises"

// console.log(myName.length);

// // 4 - métodos
// const otherNumbers = [1, 2, 3];

// const allNumbers = numbers.concat(otherNumbers);

// console.log(allNumbers);

// const text = "Algum texto";

// console.log(text.toUpperCase());

// console.log(typeof text.toUpperCase);

// console.log(text.indexOf("g"));

// // 5 objeto
// const person = {
//     name: "Moises",
//     age: 24,
//     job: "AnalistaJr"
// };

// console.log(person);

// console.log(person.name);

// console.log(person.name.length);

// console.log(typeof person);

// 6 - criando e deletando propriedades
// const car = {
//     engine: 2.0,
//     brand: "VW",
//     model: "Tiguan",
//     km: 2000
// }

// console.log(car);

// car.doors = 4;

// console.log(car);

// delete car.km;

// console.log(car);

// // 7 - mais sobre Objeto
// const obj = {
//     a: "teste",
//     b: true
// }

// console.log(obj instanceof Object);

// const obj2 = {
//     c: []
// }

// Object.assign(obj2, obj);

// console.log(obj2);

// // 8 - conhecendo melhor objetos
// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));
// console.log(Object.keys(car));

// console.log(Object.entries(car));

// // 9 - Mutaçao
// const a = {
//     name: "Moises",
// }

// const b = a;

// console.log(a);
// console.log(b);

// console.log(a === b);

// a.age = 31;

// console.log(b);
// console.log(a);

// delete b.age;

// console.log(a);
// console.log(b);

// 10 - loop em array
// const users = ["Matheus", "Joao", "Pedro", "Miguel"];

// for(let i = 0; i < users.length; i++) {
//     console.log(`Listando o usuario: ${users[i]}`);
// }

// // 11 - push e pop - PUSH para adicionar intem e POP para remover item todos no final da lista
// const array = ["a", "b", "c"];

// array.push("d");

// console.log(array);
// console.log(array.length);
// array.pop();

// console.log(array);

// const itemRemovido = array.pop();

// console.log(itemRemovido);

// console.log(array);

// array.push("z", "x", "w");

// console.log(array);

// // 12 - Shif e unshift - SHIFT para remover item do inicio da lista e UNSHIFT para adicionar no começo da lista
// const letters = ["a", "b", "c"];

// const letter = letters.shift();

// console.log(letter);

// console.log(letters);

// letters.unshift("p", "q", "r");

// letters.unshift("z");

// console.log(letters);

// // 13 - indexOF e lastIndexOF
// const myElements = ["morango", "maca", "abacate", "pera", "abacate"];

// console.log(myElements.indexOf("maca"));
// console.log(myElements.indexOf("abacate"));

// console.log(myElements[2]);
// console.log(myElements[myElements.indexOf("abacate")]);

// console.log(myElements.lastIndexOf("abacate"));
// console.log(myElements.indexOf("mamao"));

// console.log(myElements.lastIndexOf("mamao"));

// 14 - slice - pega elementos apartir do indice informado
// const testeSlice = ["a", "b", "c", "d", "e", "f"];

// const subArray = testeSlice.slice(2, 4);

// console.log(subArray);
// console.log(testeSlice);

// const subArray2 =  testeSlice.slice(2, 4 + 1);

// console.log(subArray2);

// const subArray3 = testeSlice.slice(10, 20)

// console.log(subArray3);

// const subArray4 = testeSlice.slice(2)

// console.log(subArray4);

// // 15 - ForEach
// const nums = [1, 2, 3, 4, 5];

// nums.forEach((numero)=> {
//     console.log(`O número é ${numero}`);
// });

// const posts = [
//     {title: "Primeiro post", category: "PHP" },
//     {title: "Segundo post", category: "JavaScript" },
//     {title: "Terceiro post", category: "Python" },
// ];

// posts.forEach((post) => {
//     console.log(`Exibindo post: ${post.title} da categoria ${post.category}`);
// })

// 16 - Includes - verifica se um elemento é verdadeiro ou falso dentro de uma lista/ array
// const brands = ["BMW", "VW", "Fiat"];

// console.log(brands.includes("Fiat"));
// console.log(brands.includes("Kia"));

// if(brands.includes("BMW")) {
//     console.log("Há carros da marca BMW");
// }

// // 17 - reverse - pode ser utilizado para filtro, ex: do mais caro ao mais barato
// const reverseTeste = [1, 2, 3, 4, 5];

// reverseTeste.reverse();

// console.log(reverseTeste);

// 18 - trim - remove caracter especial de uma string, ex: espaço em branco, @# / \n
// const trimTest = "   testando  \n   "
// console.log(trimTest);

// console.log(trimTest.trim());
// console.log(trimTest.length);

// console.log(trimTest.trim().length);

// // 19 - padstart
// const testePadStart = "1";

// const newNumber = testePadStart.padStart(4, "0");

// console.log(testePadStart);
// console.log(newNumber);

// const testePadEnd = newNumber.padEnd(10, "0");
// console.log(testePadEnd);

// // 20 - split
// const frase = "O rato roeu a roupa do rei de roma";

// const arrayDafrase = frase.split(" ")

// console.log(arrayDafrase);

// // 21 - Join
// const fraseDenovo = arrayDafrase.join(" ")

// console.log(fraseDenovo);

// const itensParaComprar = ["Mosue", "teclado", "Monitor"];

// const fraseDeCompra = `precisamos comprar: ${itensParaComprar.join(", ")}.`

// console.log(fraseDeCompra);

// // 22 - repeat
// const palavra = "Testando ";

// console.log(palavra.repeat(5));

// // 23 - rest operator
// const somaInfinita = (...args) => {

//     let total = 0;

//     for(let i = 0; i < args.length; i++) {
//         total += args[i];
//     }
//     return total;
// }

// console.log(somaInfinita(1, 2, 3));
// console.log(somaInfinita(1123, 241254, 331231, 10));

// 24 - for OF
const somaInfinita2 = (...args) => {

    let total = 0;

    for(num of args) {
        total += num;
    }

    return total;
}

console.log(somaInfinita2(1, 2, 4));
console.log(somaInfinita2(1, 2, 4, 124312345 ,34212, 2131));

// 25 - destructuring em objetos
const userDetails = {
    firstName: "Moises",
    lastName: "Alves",
    job: "AnalistaJr"
}

const {firstName, lastName, job} = userDetails;

console.log(firstName, lastName, job);

// renomer variaveis
const {firstName: primeiroNome} = userDetails;

console.log(firstName);

// 26 - destructruin com arrays
const myList = ["Avião", "Submarino", "Carro"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// 27 - JSON
const myJson = '{"name": "Moises", "age": 24, "skills": ["PHP", "Python"]}';

console.log(myJson);
console.log(typeof myJson);

// 28 - JSON para objeto e objeto para JSON
const myObject = JSON.parse(myJson);
console.log(myObject);

console.log(myObject.name);

console.log(typeof myObject);

// JSON invalido
const badJson = '{"name": Moises, "age": 24}';

// const myBadObject = JSON.parse(badJson);

// Convertendo JSON para enviar para o backand
 