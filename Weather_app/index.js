const search_box = document.querySelector(".inputCity");
const Btn = document.querySelector(".btn");
const temperatur = document.querySelector(".temperature");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const Weather_icon = document.querySelector(".Weather-icon");

const apiKey = "45ef9e23e097fe1276d28658a9b04ce7";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="

async function checkWeather(cityName){

    const responce = await fetch(apiUrl + cityName +"&units=metric" + `&appid=${apiKey}`)
     
    if(responce.status == 404){
      alert("Invalid City Name");
    }
    else{
      var data = await responce.json();
       console.log(data);
      city.innerHTML = data.name;
      temperatur.innerHTML = Math.round(data.main.temp) + "℃"; 
      wind.innerHTML = data.wind.speed +"KM/H"; 
      humidity.innerHTML = data.main.humidity + "%";
      
      if(data.weather[0].main === "Clouds"){
        Weather_icon.src = "clouds.png";
      }
      else if(data.weather[0].main === "Haze"){
        Weather_icon.src ="clear.png";
      }
      else if(data.weather[0].main === "Rain"){
        Weather_icon.src = "rain.png";
      }
      else if(data.weather[0].main === "Drizzle"){
        Weather_icon.src = "drizzle.png";
      }
      else if(data.weather[0].main === "Mist"){
        Weather_icon.src = "mist.png";
      }
      else if(data.weather[0].main === "Snow"){
        Weather_icon.src = "snow.png";
      }
      
    }

}


Btn.addEventListener("click", function(){
    let searchBoxValue = search_box.value;
    if (searchBoxValue == ""){
        alert("Please enter City Name!");
        } else {
          checkWeather(searchBoxValue);
        }
})







