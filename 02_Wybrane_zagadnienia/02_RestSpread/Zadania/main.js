//Zadanie 1

const namesA = ["Zosia", "Marcin", "Kamil"];
const namesB = ["Ala", "Puszek", ...namesA, "Jan", "Karol"];
// console.log(namesB);
// console.log(namesB[0]);
// console.log(namesB[namesB.length-1]);

const filtred = namesB.filter(el => {
    const newRex = new RegExp(/\b[a-zA-Z]{3}\b/);
    console.log(newRex.test(el))
    if (newRex.test(el)) {
        return el;
    }
})

console.log(filtred);

//Zadanie 2

const getAverage = (...params) => {
    return params.reduce((a,b) => a+b)/params.length
}

console.log(getAverage(2, 4, 5, 6, 7, 79), "Zadanie 2");

//Zadanie3

const nameTab = [..."Grzegorz"];
console.log(nameTab);
const filterName = nameTab.filter((el, i) => {
    if (i % 3 !== 0 || i === 0) {
        return el;
    }
}).join("");

console.log(filterName);

//Zadanie 4
const vegetables = ["🍅", "🥔"];
const fruits = ["🍌", "🍎"];
const salad = [...vegetables, ...fruits];
console.log(salad);

//Zadanie 5

const state = {
    invoiceSection: false,
    availableYears: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005],
    formStatus: "failed",
    isUserLogged: false
  };

const stateCopy = {
    ...state,
    availableYears: state.availableYears.filter(el => el <= 1999),
    isUserLogged: !state.isUserLogged
}

console.log(stateCopy);