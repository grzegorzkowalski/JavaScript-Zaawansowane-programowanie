import Garnizon from "./Solution/Garnizon";

const army = [];
const order = [
    {type: "strzelec", name: "Jan", age: 23},
    {type: "strzelec", name: "Jan2", age: 23},
    {type: "strzelec", name: "Jan3", age: 23},
    {type: "strzelec", name: "Jan4", age: 23},
    {type: "konny", name: "Jan", age: 23},
    {type: "konny", name: "Jan2", age: 23},
    {type: "konny", name: "Jan3", age: 23},
    {type: "piechur", name: "Jan", age: 23},
    {type: "piechur", name: "Jan2", age: 23},
    {type: "piechur", name: "Jan3", age: 23},
];

const oboz = new Garnizon();

order.forEach(el => {
    const {type, name, age} = el;
    army.push(oboz.createSoldier(type, name, age))
});

console.log(army);


//Przykład computed properties
const person = {
    name: "Grzegorz",
    surname: "Kowalski",
    age: 37
}

const tab = ["name", "surname", "age", "cat"];
tab.forEach(el => console.log(person[el]));

