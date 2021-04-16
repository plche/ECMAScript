let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2));

let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));

let hello = "     hello world";
console.log(hello);
console.log(hello.trimStart());

let hello = "hello world     ";
console.log(hello);
console.log(hello.trimEnd());

// optional catch biding
try {

// } catch (error) {
} catch {
    error
}

// fromEntries
let entries = [["name", "Percy"], ["age", 46]];
console.log(Object.fromEntries(entries));

// objeto Symbol
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);