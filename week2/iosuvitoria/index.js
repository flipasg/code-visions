// 1º Idea. Estrucutura completa del código.

//const fizzbuzz = () => {
//     for(let i = 0; i <=100; i++){
//         if(i%3 === 0 && i%5 ===0){
//             console.log("Fizzbuzz");
//         }else if ( i % 5 === 0){
//             console.log("Fizz");
//         }else if( i%3 === 0){
//             console.log("Buzz");
//         }else{
//             console.log(i);
//         }
//     }
// }

// 2º Idea. Refactorización y reducir número de estructuras.

// const fizzbuzz = () => {
//     for (let i = 1; i <= 100; i++) {
//         let output = "";
//         if (i % 3 === 0) {
//             output += "Fizz";
//         }
//         if (i % 5 === 0) {
//             output += "Buzz";
//         }
//         console.log(output || i);
//     }
// };

//3º Idea. Replanteamiento en base a la segunda idea. Construir Fizzbuzz usando los operadores ternarios para reducir al máximo
// la cantidad de código.

const fizzbuzz = () => {
    for (let i = 1; i <= 100; i++) {
        console.log((i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "") || i);
    }
};


fizzbuzz();

