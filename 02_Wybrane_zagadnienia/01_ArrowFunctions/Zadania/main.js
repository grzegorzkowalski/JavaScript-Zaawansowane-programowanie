//Zadanie 1
const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
const getSecondMaxNumber = (arr) => {
    const newTab = arr.toSorted((a,b) => a-b);
    console.log(newTab);
    return newTab[newTab.length - 2]
}

console.log(getSecondMaxNumber(arr1));
console.log(arr1);

//Zadanie 2
const tab = ["google", "twitter", "facebook"];
const generateLinks = (arr) => {
    return arr.map(el => "https://" + el + ".com")
}
const tab1 = generateLinks(tab);
console.log(tab1);
console.log(tab);

const insertLinks = (newTab) => {
    const menu = document.createElement("ul");
    document.querySelector("body").append(menu);
    newTab.forEach(element => {
    const newLi = `<li><a href="${element}">${element}</a></li>`;
    menu.innerHTML += newLi;
    });
}

insertLinks(tab1);