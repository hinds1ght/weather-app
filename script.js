let form = document.querySelector('form');
let input = document.getElementById('city');
let country = document.querySelector('.country');
let region = document.querySelector('.region');
let stat = document.querySelector('.status');
let icon = document.querySelector('img');
let appkey = 'be88403500854de39ba44427230910';
let http = 'https:'

async function takeData(theCity){
    let weather = await fetch(`https://api.weatherapi.com/v1/current.json?key=${appkey}&q=${theCity}`, { mode: 'cors'})
    let theobj = weather.json();
    return theobj;
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    takeData(input.value.trim())
        .then( r =>{
            display(r);
        });

})

function display(res) {
    console.log(res)
    country.textContent = `Country: ${res.location.country}`
    region.textContent = `Region: ${res.location.region}`
    stat.textContent = `Weather: ${res.current.condition.text}`
    icon.src = http.concat(res.current.condition.icon);
}

document.addEventListener('DOMContentLoaded', () => {
    takeData('Manila')
        .then(r => display(r));
});