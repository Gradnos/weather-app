import * as weatherFetcher from './weatherFetcher.js';
import { prefersTempC } from ".";

let weatherContainer = document.querySelector(".currentW-cont");
let cityNameDom = weatherContainer.querySelector(".city-name");
let currentTimeDom = weatherContainer.querySelector(".current-time");
let currentIconDom = weatherContainer.querySelector(".current-weather-icon");
let currentDegreeDom = weatherContainer.querySelector(".current-weather-degree");
let currentConditionDom = weatherContainer.querySelector(".current-condition");

export async function updateDisplay(cityName){



    let response = await weatherFetcher.fetchWeatherToday(cityName);
    if(response.ok){
        let data = response.data;
        let location = data.location;
        let current = data.current;

        let condition = current.condition.text;
        let icon = current.condition.icon;

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
        console.log(condition);

        currentConditionDom.innerText = condition;

        currentIconDom.src = icon;


    }

}