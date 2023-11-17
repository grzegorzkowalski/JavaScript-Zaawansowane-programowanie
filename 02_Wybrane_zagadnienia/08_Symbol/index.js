const personID = Symbol("personID");

const person = {
    name: "Grzegorz",
    surname: "Kowalski",
    [personID]: 1234
}

console.log(person.name);
console.log(person[personID]);

console.log(JSON.stringify(person));