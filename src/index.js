import "./style.css"
import { gradients, gradientsArr, transitionBodyBackground } from "./utility";
import * as weatherFetcher from './weatherFetcher.js';

    
    
   
    


let r = document.querySelector(':root');
let rs = getComputedStyle(r);


transitionBodyBackground(gradientsArr[0]);

let i = 1;

let button = document.querySelector("button");

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
    console.log(cityName);
});


let data = await weatherFetcher.fetchWeatherToday('tbilisi');

console.log(data);

