// Object.entries
const data = {
    frontend: "Percy",
    backend: "Mery",
    design: "Allison"
}
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// Object.values
const data = {
    frontend: "Percy",
    backend: "Mery",
    design: "Allison"
}
const values = Object.values(data);
console.log(values);
console.log(values.length);

// Padding
const string = "hello";
console.log(string.padStart(9, "Hi, "));
console.log(string.padEnd(12, " ------"));
console.log("food".padEnd(12, "  ------"));

// trainling commas in objects definition: it means, items can continue or not.
const obj = {
    name: "Percy",
}

// async & await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Hello World!"), 3000)
            : reject(new Error("Test Error"))
    })
};
const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}
helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};
anotherFunction();