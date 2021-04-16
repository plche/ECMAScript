function newFunction(name, age, country) {
    var name = name || "plche";
    var age = age || 46;
    var country = country || "PE";
    console.log(name, age, country);
};

// es6
function newFunction2(name = "plche", age = 46, country = "PE") {
    console.log(name, age, country);
};

newFunction2();
newFunction2("Albert", 32, "US");

// templates literals
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// multilinea en los strings
let lorem = "Duis aute irure dolor in reprehenderit in voluptate velit esse \n"
+ "cillum dolore eu fugiat nulla pariatur."
// es6
let lorem2 = `otra frase epica que necesitabamos
ahora es otra frase epica`;
console.log(lorem);
console.log(lorem2);

// deestructuracion de elementos
let person = {
    "name": "Percy",
    "age": 46,
    "country": "PE"
}
console.log(person.name, person.age, person.country);
let { name, age, country } = person;
console.log(name, age, country);

// operador de propagacion
let team1 = ["Percy", "Oscar", "Julian", "Ricardo"];
let team2 = ["Mery", "Valeria", "Yesica", "Camila"];
let education = ["David", ...team1, ...team2];
console.log(education);

// diferencia entre "var" y "let" a nivel de ambito/alcance
{
    var globalVar = "Global Var";
}
{
    let globalLet = "Global Let";
    console.log(globalLet);
}
console.log(globalVar);

// nueva directiva "const"
const a = "b";
console.log(a);
a = "c";
console.log(a);

// propiedad de objetos mejorada
let name = "Percy";
let age = 46;
obj = { name: name, age: age};
// es6
obj2 = { name, age};
console.log(obj2);

// arrow functions
const names = [
    {name: "Percy", age: 46},
    {name: "Mery", age: 42}
]
let listOfName = names.map(function (item) {
    console.log(item.name);
})
let listOfName2 = names.map(item => console.log(item.name));
const listOfName3 = (name, age, country) => {};
const listOfName4 = name => {};
const square = num => num * num;

// promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Hey!");
        } else {
            reject("Ups!");
        }
    });
}
helloPromise()
    .then(response => console.log(response))
    .then(() => console.log("Hola!"))
    .catch(error => console.log(error));

// clases
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.sum(2, 2));

// function printNumbers() {
// 	for (var i = 0; i < 5; i++) {
// 		setTimeout(
//             function printer() {
//                 console.log(i);
// 	        },
// 			100 * i
// 		);
// 	}
// }
// printNumbers();

// function printNumbers() {
// 	var i;
// 	for (i = 0; i < 10; i++) {
// 		setTimeout(
//             function printer() {
//                 console.log(i);
// 	        },
// 			100 * i
// 		);
// 	}
// }
// printNumbers();

// function printNumbers() {
// 	for (let i = 0; i < 10; i++) {
// 		// Cuando usamos let en un for-loop, es como si definieramos `i` aquí.
//         setTimeout(
//             function printer() {
//                 console.log(i);
// 	        },
// 			100 * i
// 		);
// 	}
// }
// printNumbers();

// import - export: trabajar con módulos
import { hello } from "./module";
hello();

// generator functions
function* helloWorld() {
    if (true) {
        yield "Hello, ";
    }
    if (true) {
        yield "World";
    }
};
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);