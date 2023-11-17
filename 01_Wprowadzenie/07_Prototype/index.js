String.prototype.smileToday = function() {
    const date = new Date();
    console.log(`Witaj mamy dzisiaj piękny dzień - ${date.toLocaleDateString()}.`)
}

"Ala ma kota".smileToday();
