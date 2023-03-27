import { KEY } from "./API-keys";
import { catchEm } from "./utility";


  

const weatherBaseUrl = 'http://api.weatherapi.com/v1/';


export async function fetchWeatherToday(cityName){
    const response = await fetch(`${weatherBaseUrl}current.json?key=${KEY}&q=${cityName}`);
    let data = await response.json();
    
    //returns [true, error data] if response isnt ok
    //return [false, weather data] if response is ok
    let ok = response.ok;
    return {ok, data};
}



export async function fetchWeatherForecast(cityName){
    const response = await fetch(`${weatherBaseUrl}forecast.json?key=${KEY}&q=${cityName}&days=7`);
    let data = await response.json();
    
    //returns [true, error data] if response isnt ok
    //return [false, weather data] if response is ok
    let ok = response.ok;
    return {ok, data};
}