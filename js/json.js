const student = {
    name: "harsh",
    age: 20,
    present: true,
}
console.log(student);

const json = JSON.stringify(student);
console.log(json);

// Converting json to object
const obj1 = JSON.parse(json);
console.log(obj1)