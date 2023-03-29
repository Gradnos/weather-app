import "./style.css"
import { gradients, gradientsArr, transitionBodyBackground } from "./utility";
import * as weatherFetcher from './weatherFetcher.js';
import { updateDisplay } from "./updateDisplay";
import { populateDetails } from "./updateDisplay";



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
        toggleDom.classList.remove("right-toggle");
        toggleDom.innerText = "C";
        r.style.setProperty("--degreePreference", '"C"');
    }

    if(prefersTempC === false){
        toggleDom.classList.add("right-toggle");
        toggleDom.innerText = "F";
        r.style.setProperty("--degreePreference", '"F"');
    }

    updateDisplay(currentCity);
}


export let moreInformationType = "hourly";
export function setMoreInformationType(string){
    moreInformationType = string;
}

let moreInformationButtons = Array.from(document.querySelector(".details-buttons").children);




moreInformationButtons.forEach(button => {
    button.addEventListener("click" , ()=>{
        button.classList.add("selected");
        let currentType = button.dataset.type;
        setMoreInformationType(currentType);
        updateDisplay(currentCity);


        moreInformationButtons.forEach(btn =>{
            let btnType = btn.dataset.type;
            if(currentType !== btnType){
                btn.classList.remove("selected");
            }
        });
    })
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



let changePrefersTempCButton = document.querySelector(".degree-preference-button");
changePrefersTempCButton.addEventListener("click", ()=>{
    setPrefersTempC(!prefersTempC);
});


updateDisplay("tbilisi");

