// const newUser = (id, name, email) => {
//     return {
//         id: id,
//         name: name,
//         email: email,
//     };
// };

// console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }


// const newUser = (id, name, email) => {
//     return {
//         id,
//         name,
//         email,
//     };
// };

// console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

//Agora é hora de praticar: altere a função getPosition utilizando a property shorthand.
const propertyShorthand = (latitude, longitude) => ({
    latitude,
    longitude,
});

console.log(propertyShorthand(-19.8157, -43.9542));