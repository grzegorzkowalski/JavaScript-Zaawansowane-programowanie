const getIPData = async (ip) => {
    const obj = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await obj.json();
    console.log(data);
    const myInternet = document.createElement("ul");
    document.querySelector("body").append(myInternet);
    for (const [key, value] of Object.entries(data)) {
        console.log(key, value);
        myInternet.innerHTML += `<li>${key} - ${value}</li>`;
    }
    return data;
}

fetch('https://api64.ipify.org?format=json')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        getIPData(data.ip);
    })
    .catch(err => console.log(err))