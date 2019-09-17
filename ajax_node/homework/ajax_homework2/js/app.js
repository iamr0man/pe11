const ui = new UI();

document.getElementById('btn').addEventListener('click', printData)
document.getElementById('clear-btn').addEventListener('click', ui.clearData)


async function printData() {
    const res = await fetch('https://api.ipify.org/?format=json')
    const obj = await res.json();

    const geo = await fetch(`http://ip-api.com/json/${obj.ip}?fields=city,country,timezone,region&lang=ru`)
    const data = await geo.json();

    const item = new Geo(data);

    ui.showData(item)
}



