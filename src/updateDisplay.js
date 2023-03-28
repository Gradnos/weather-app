import * as weatherFetcher from './weatherFetcher.js';
import { prefersTempC } from ".";
import * as icons from './iconGetter.js';

let weatherContainer = document.querySelector(".currentW-cont");
let cityNameDom = weatherContainer.querySelector(".city-name");
let currentTimeDom = weatherContainer.querySelector(".current-time");
let currentIconDom = weatherContainer.querySelector(".current-weather-icon");
let currentDegreeDom = weatherContainer.querySelector(".current-weather-degree");
let currentConditionDom = weatherContainer.querySelector(".current-condition");

export async function updateDisplay(cityName){



    let forecastResponse = await weatherFetcher.fetchWeatherForecast(cityName);

    console.log(forecastResponse);
    if(forecastResponse.ok){
        let data = forecastResponse.data;
        let location = data.location;
        let current = data.current;

        let condition = current.condition.text;

        let cityName = location.name;
        let localTime = location.localtime.split(" ")[1];

        let tempC = current.temp_c;
        let tempF = current.temp_f;

        cityNameDom.innerText = cityName;
        currentTimeDom.innerText = localTime;




        if(prefersTempC){
            currentDegreeDom.innerText = tempC + "°";
        } else {
            currentDegreeDom.innerText = tempF + "°";
        }

        currentConditionDom.innerText = condition;
        let dayTime 
        if(current.is_day === 1) dayTime = "day"; 
        else dayTime = "night";

        currentIconDom.src = icons[dayTime][condition.replaceAll(' ', '-')];
    } else{

    }
}