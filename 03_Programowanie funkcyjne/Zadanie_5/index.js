// //`imię` - np: Ala

// `miesiąc` - np: styczeń
// //1. Funkcja ma zwracać:
// ```
// jeżeli miesiąc to grudzien, styczen, luty: "Ala jezdzi na sankach"
// jeżeli miesiąc to marzec, kwiecien, maj: "Ala chodzi po kaluzach"
// jeżeli miesiąc to czerwiec, lipiec, sierpien: "Ala sie opala"
// jeżeli miesiąc to wrzesień, pazdzietnik, listopad: "Ala zbiera liscie"
// ```

const goOutdoor = (name, month) => {
    const seasons = new Map();
    seasons.set("styczeń", "winter");
    seasons.set("luty", "winter");
    seasons.set("marzec", "spring");
    seasons.set("kwiecień", "spring");
    seasons.set("maj", "spring");
    seasons.set("czerwiec", "summer");
    seasons.set("lipiec", "summer");
    seasons.set("sierpień", "summer");
    seasons.set("wrzesień", "fall"); 
    seasons.set("październik", "fall");
    seasons.set("listopad", "fall");
    seasons.set("grudzień", "winter");

    const actualSeason = seasons.get(month);
    console.log(actualSeason);
    const actions = {
        "winter": () => console.log(`${name} jeździ na sankach.`),
        "spring": () => console.log(`${name} chodzi po kałużach.`),
        "summer": () => console.log(`${name} się opala.`),
        "fall": () => console.log(`${name} zbiera liscie.`),
    }
    actions[actualSeason]();
}

goOutdoor("Ala", "styczeń");
goOutdoor("Ala", "lipiec");
