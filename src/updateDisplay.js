import * as weatherFetcher from './weatherFetcher.js';


export async function updateDisplay(cityName){

    let data = await weatherFetcher.fetchWeatherToday(cityName);
    if(data.ok){
        
    }

}