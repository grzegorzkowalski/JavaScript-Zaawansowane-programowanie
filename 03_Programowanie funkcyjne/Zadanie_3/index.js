const fantasticArmy = [
    {race: "Elf", name: "Ravalee", age: 150, speed: 100},
    {race: "Orc", name: "Xugarf", age: 34, speed: 80},
    {race: "Orc", name: "Uram", age: 55, speed: 75},
    {race: "Dwarf", name: "Grumpy", age: 111,  speed: 65},
    {race: "Elf", name: "Keykalyn", age: 222, speed: 120},
    {race: "Elf", name: "Oririe", age: 330, speed: 150}];

    console.log(
    fantasticArmy
        .filter(el => el.race === "Elf")
        .map(el => {
            el.speed + 10
            return el
        })
        .reduce((a,b) => a+b.age, 0));