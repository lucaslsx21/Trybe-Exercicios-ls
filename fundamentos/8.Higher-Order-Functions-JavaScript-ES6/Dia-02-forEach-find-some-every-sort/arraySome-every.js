// const listNames = ['Lucas', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames)); // true
// console.log(verifyFirstLetter('x', listNames)); // false
//=====================================================================
// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//     //Adicione seu código aqui
//     return arr.some((currentName) => currentName === name);
// };

//console.log(hasName(names, 'Ana')); //true
//=====================================================================
//Implementamos o método every sobre o array passado como parâmetro e verificamos a cada iteração se a chave age daquela pessoa é maior ou igual à idade passada como segundo parâmetro em nossa função. Se algum caso falhar a função já retorna false.
// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
// ];

// const verifyAges = (arr, minimumAge) => {
//     // Adicione seu código aqui
//     return arr.every((person) => person.age >= minimumAge);
// };

// console.log(verifyAges(people, 18));