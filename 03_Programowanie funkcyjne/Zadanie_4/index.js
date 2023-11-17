const numbers = [1000,1,11,100,101,1111,10000];

const unmuteSort = (tab) => {
    const newTab = [...tab];
    return newTab.sort((a,b) => a-b);
};

const unmuteSort2 = (tab) => tab.toSorted((a,b) => a-b);

const unmuteSort3 = (tab) => {
    const newTab = Array.from(tab);
    return newTab.sort((a,b) => a-b);
};

console.log(unmuteSort(numbers));
console.log(unmuteSort2(numbers));
console.log(unmuteSort3(numbers));