var input = document.getElementById('inpu')


const btn = document.getElementById('btn')

function meto(){

  fetch('https://lesaviezvous.onrender.com/infos')
.then(response => response.json())
.then(data => {
  console.log(data)
  var infos = document.getElementById('saviez')
  infos.textContent = `${data.infos}`

})
  
  var joke = document.getElementById('joke')

  fetch('https://www.blagues-api.fr/api/random?disallow=dark', {
    headers: {
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOTk5MjYyMDcxNDI0MjkwODY2IiwibGltaXQiOjEwMCwia2V5IjoiM1k1Z3M3Z3hHNGRNSXgzS1d5b3hNNG9rZThoMkpDNHA1RlFUbmU5ekNBUW00VnZKTXoiLCJjcmVhdGVkX2F0IjoiMjAyMy0wOS0yMVQxODowNzo0OSswMDowMCIsImlhdCI6MTY5NTMxOTY2OX0.5Tr-G0ZoRyv0dXHGZ-9kZsvS4RRSrT0plFyl_ZwX7_Q`
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
    joke.textContent = `${data.joke}\n${data.answer}`
  
  })
          


  var ville = input.value
  const url = `https://cweather.vercel.app/${ville}`;
// const meteo = document.getElementsByClassName('meteo')
        // Récupérez l'élément HTML par son ID

var meteo = document.getElementById('meteo')
var villee = document.getElementById('ville')
var temp = document.getElementById('temperature')
var principal = document.getElementById('principal')
var humidite = document.getElementById('humidite')
var latitude =document.getElementById('lat')
var longitude = document.getElementById('long')
var precipitation = document.getElementById('precip')
var vitesse = document.getElementById('vitesse')
fetch(url)
  .then(response => response.json())
  .then(data => {
      console.log(data.lieu.region);
      // Générez du contenu avec JavaScript
      // var message = `${data.lieu.region}`;
              // Mettez à jour le contenu de l'élément
      villee.textContent =`${data.lieu.nom}, ${data.lieu.pays}`
      temp.textContent = `${data.actuel.temp_c}°C`
      principal.textContent = `${data.meteo.principal}`
      humidite.textContent = `${data.actuel.humidite}%`
      latitude.textContent = `${data.lat}`
      longitude.textContent = `${data.lon}`
      precipitation.textContent = `${data.actuel.precip_mm}mm`
      vitesse.textContent = `${data.actuel.vitesse_vent_kph}Km/H`
	const regex = /night/;
  const regexs = /day/
// Testez si la chaîne a correspondance avec l'expression régulière
if (regex.test(data.meteo.icone)) {
switch(data.meteo.principal){
          case "Clair":
            meteo.src = 'animated/night.svg'
            break
          case "Partiellement nuageux":
          meteo.src = 'animated/cloudly-night-2.svg'
            break
          case "Pluie légère":
            meteo.src = 'animated/rainy-5.svg'
            break;
            case "Pluie modérée":
              meteo.src = 'animated/rainy-1.svg'
              break;
              case "Couvert":
                meteo.src = 'animated/cloudy.svg'
                break

                default:
                  meteo.src = `https:${data.meteo.icone}`
                  break
    // La variable a contient la sous-chaîne "ok"
}

} else if(regexs.test(data.meteo.icone)) {
 switch (data.meteo.principal){
          case "Ensoleillé":
            meteo.src = 'animated/day.svg'
            break;
          case "Pluie modérée":
            meteo.src = 'animated/rainy-2.svg'
            break;
          case "Pluie éparse à proximité":
            meteo.src = 'animated/rainy-1.svg'
            break
          case "Couvert":
            meteo.src = 'animated/cloudy.svg'
            break
            case "Partiellement nuageux":
              meteo.src = 'animated/cloudy-day-2.svg'
              break
            case "Clair":
                meteo.src = 'animated/day.svg'
                break

            default:
              meteo.src = `https:${data.meteo.icone}`
              break
        }
    // La variable a ne contient pas la sous-chaîne "ok"
} else{
  meteo.src = `https:${data.meteo.icone}`
}
      
      
      
  })
  .catch(error => {
      console.error(error);
  });
}

btn.addEventListener("click", function()
{

meto()
}

)

// script.js
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');


div1.addEventListener('click', () => {
  div1.style.opacity = '0'; // Réduisez l'opacité de la première div pour la cacher progressivement
  setTimeout(() => {
    div1.style.display = 'none'; // Cacher la première div complètement
    div2.style.display = 'block'; // Afficher la deuxième div
    div2.style.opacity = '1'; // Augmentez l'opacité de la deuxième div pour la montrer progressivement
  }, 300); // Le délai de 300 millisecondes correspond à la durée de l'animation CSS
});

div2.addEventListener('click', () => {
  div2.style.opacity = '0'; // Réduisez l'opacité de la deuxième div pour la cacher progressivement
  setTimeout(() => {
    div2.style.display = 'none'; // Cacher la deuxième div complètement
    div3.style.display = 'block'; // Afficher la première div
    div3.style.opacity = '1'; // Augmentez l'opacité de la première div pour la montrer progressivement
  }, 300); // Le délai de 300 millisecondes correspond à la durée de l'animation CSS
});

div3.addEventListener('click', () => {
  div3.style.opacity = '0'; // Réduisez l'opacité de la deuxième div pour la cacher progressivement
  setTimeout(() => {
    div3.style.display = 'none'; // Cacher la deuxième div complètement
    div1.style.display = 'block'; // Afficher la première div
    div1.style.opacity = '1'; // Augmentez l'opacité de la première div pour la montrer progressivement
  }, 300); // Le délai de 300 millisecondes correspond à la durée de l'animation CSS
});
const loader = document.querySelector('#loader')

window.addEventListener('load', () =>{

  loader.classList.add('fondu')
  loader.classList.add('none')
})
anime({
  targets: '.bulle1',
  left: '50%',
  // backgroundColor: '#FFF',
  borderRadius: ['0%', '50%'],
  easing: 'easeInOutQuad',
  duration: '3000'
});
anime({
  targets: '.bulle2',
  left: '30%',
  // backgroundColor: '#FFF',
  borderRadius: ['0%', '50%'],
  easing: 'easeInOutQuad',
  duration: '3000'
});
anime({
  targets: '.bulle3',
  // left: '50%',
  // backgroundColor: '#FFF',
  borderRadius: ['0%', '50%'],
  easing: 'easeInOutQuad',
  duration: '3000'
});
anime({
  targets: '.bulle4',
  left: '70%',
  // backgroundColor: '#FFF',
  borderRadius: ['0%', '50%'],
  easing: 'easeInOutQuad',
  duration: '3000'
});


// function randomValues() {
//   anime({
//     targets: '.bulles div',
//     translateX: function() {
//       return anime.random(0, 270);
//     },
//     easing: 'easeInOutQuad',
//     duration: 750,
//     complete: randomValues
//   });
// }

// randomValues();
