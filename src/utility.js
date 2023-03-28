export let gradients = {
//    morningGradient : "linear-gradient(0deg, rgba(200,200,180,1) -100%, rgba(20,210,255,1) 100%)",
    middayGradient : "linear-gradient(0deg, rgba(0,245,255,1) 0%, rgba(60,120,225,1) 100%)",
    afternoonGradient : "linear-gradient(0deg, rgba(0,92,170,1) 0%, rgba(0,34,126,1) 100%)",
    nightGradient : "linear-gradient(0deg, rgba(15,0,40,1) 0%, rgba(0,9,40,1) 100%)",
    cloudylightGradient : "linear-gradient(0deg, rgba(127,139,150,1) 0%, rgba(166,179,214,1) 100%)",
    cloudydarkGradient : "linear-gradient(0deg, rgba(41,43,43,1) 0%, rgba(84,92,135,1) 100%)",
}
export let gradientsArr = Object.values(gradients);



let state = 0;
export function transitionBodyBackground(gradient){
    let body = document.querySelector("body");
    let overlay = document.querySelector(".bodyOverlayGradient");

    if(state === 0){
        state = 1;
        overlay.style.backgroundImage = gradient;
        overlay.classList.add("transitioning");
    } else if(state === 1){
        state = 0;
        body.style.backgroundImage = gradient;
        overlay.classList.remove("transitioning"); 
    }
    
}