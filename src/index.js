import "./style.css"
import * as weatherFetcher from './weatherFetcher.js';
import {transitionBodyBackground} from './utility';


    
    
   
    


let r = document.querySelector(':root');
let rs = getComputedStyle(r);

let gradients = {
    morningGradient : "linear-gradient(0deg, rgba(255,255,255,1) -100%, rgba(0,194,255,1) 100%)",
    middayGradient : "linear-gradient(0deg, rgba(0,245,255,1) 0%, rgba(67,130,237,1) 100%)",
    afternoonGradient : "linear-gradient(0deg, rgba(0,92,170,1) 0%, rgba(0,34,126,1) 100%)",
    nightGradient : "linear-gradient(0deg, rgba(15,0,40,1) 0%, rgba(0,9,40,1) 100%)",
    cloudylightGradient : "linear-gradient(0deg, rgba(127,139,150,1) 0%, rgba(166,179,214,1) 100%)",
    cloudydarkGradient : "linear-gradient(0deg, rgba(41,43,43,1) 0%, rgba(84,92,135,1) 100%)",
}



let gradientsArr = Object.values(gradients);


let i = 1;

let button = document.querySelector("button");

button.addEventListener("click", () =>{
    transitionBodyBackground(gradientsArr[i]);
    i++;
});


let data = await weatherFetcher.fetchWeatherToday('tbilisi');

console.log(data);

