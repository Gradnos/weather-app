

let state = 0;
export function transitionBodyBackground(gradient){
    console.log("11");

    let thisAnimationContiue = true;

    let body = document.querySelector("body");
    let overlay = document.querySelector(".bodyOverlayGradient")

    document.documentElement.style.setProperty("--before-gradient", gradient);
    overlay.classList.add("transitioning");

    overlay.addEventListener("transitionend", () =>{
        console.log("transitionend")
        body.style.backgroundImage = gradient;
        overlay.style.transitionDuration = "0s";
        overlay.classList.remove("transitioning");
        overlay.style.transitionDuration = "2s";
    })
    

}