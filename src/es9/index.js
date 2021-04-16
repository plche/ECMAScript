// operador de reposo, extrae propiedades de un objeto que aún no se ha construido
const obj = {
    name: "Percy",
    age: 46,
    country: "PE"
};
// let { name, ...all } = obj;
// console.log(name, all);
let { country, ...all} = obj;
console.log(all);

// propiedades de propagación
const obj = {
    name: "Percy",
    age: 46,
};
const obj1 = {
    ...obj,
    country: "PE"
};
console.log(obj1);

// Promise.finally
const hellowWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            // ? resolve("Hello World!")
            ? setTimeout(() => resolve("Hello World!"), 3000)
            : reject(new Error("Test Error"))
    });
};
hellowWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Finalizó"))

// regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec("2021-04-14");
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);