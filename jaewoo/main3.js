let mainText = document.querySelector(".apeal .box1 h1")

window.addEventListener('scroll',function (){
    let value = window.scrollY
    console.log("scrollY", value);

    // if(value<900){
    //     mainText.style.animation = "disap 2s forward";
    // }else{
    //     mainText.style.animation ="slide 2s "
    // }
    //




    if(value>700 || value<150){
        mainText.style.animation = "disap 0.5s forwards";
    }else{
        mainText.style.animation ="slide 0.5s "
    }

});