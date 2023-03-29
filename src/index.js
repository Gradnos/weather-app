import "./style.css"
import { gradients, gradientsArr, transitionBodyBackground } from "./utility";
import * as weatherFetcher from './weatherFetcher.js';
import { updateDisplay } from "./updateDisplay";


transitionBodyBackground(gradientsArr[0]);

console.log(gradientsArr[0]);

let r = document.querySelector(':root');


let toggleDom = document.querySelector(".preference-toggle"); 


export let currentCity = "tbilisi"; 
export function setCurrentCity(city){
    currentCity = city;
}



export let prefersTempC = true;
export function setPrefersTempC(boolean){
    prefersTempC = boolean;

    if(prefersTempC === true){
        toggleDom.classList.remove("right");
        toggleDom.innerText = "C";
        r.style.setProperty("--degreePreference", '"C"');
    }

    if(prefersTempC === false){
        toggleDom.classList.add("right");
        toggleDom.innerText = "F";
        r.style.setProperty("--degreePreference", '"F"');
    }

    updateDisplay(currentCity);
}


export let moreInformationType = "hourly";
export function setMoreInformationType(string){
    moreInformationType = string;
}


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
    setCurrentCity(cityName);
    updateDisplay(cityName);
});



let changePrefersTempCButton = document.querySelector(".degree-preference-button");
changePrefersTempCButton.addEventListener("click", ()=>{
    setPrefersTempC(!prefersTempC);
});


