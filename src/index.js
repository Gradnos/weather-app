import "./style.css"
import { gradients, gradientsArr, transitionBodyBackground } from "./utility";
import * as weatherFetcher from './weatherFetcher.js';
import { updateDisplay } from "./updateDisplay";


transitionBodyBackground(gradientsArr[0]);

let button = document.querySelector("button");

let i = 1;
button.addEventListener("click", () =>{
    transitionBodyBackground(gradientsArr[i]);
    i++;
});

let searchButton = document.querySelector(".search-button");
let searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keypress", (e)=>{
    if(e.key === "Enter"){
        searchButton.click();
    }
});

searchButton.addEventListener("click", ()=>{
    let cityName = searchInput.value;
    updateDisplay(cityName);
});




let data = await weatherFetcher.fetchWeatherToday('tbilisi');

console.log(data);

