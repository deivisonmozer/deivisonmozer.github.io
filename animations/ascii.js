window.onload = ()=>{
    document.getElementById("start").onclick = funcStart;
    document.getElementById("stop").onclick = funcStop;
    document.getElementById("animation").onchange = funcChangeFont;
    document.getElementById("turbo").onchange = funcSpeed;
    run();
}
let initialTimer = 250;
let interval = null;
function run(){
    //interval = setInterval(funcStart, 1000);
}

function funcSpeed(){
    let speed = document.getElementById("turbo").checked;
    if(speed == true ){
        initialTimer = 50;
    }
    else
        initialTimer = 250;
}

function funcChangeFont(){
    let value = document.getElementById("fontsize").value;
    let size = "";
    switch(value){
        case "Tiny":
            size = "7pt";
            break;
        case "Small":
            size = "10pt";
            break;
        case "Medium":
            size = "12pt";
            break;
        case "Large":
            size = "16pt";
            break;
        case "Extra Large":
            size = "24pt";
            break;
        case "XXL":
            size = "32pt";
            break;
    }
    document.getElementById("text-area").style.fontSize = size;
}

function funcStart(){
    funcChangeFont();
    let animation = document.getElementById("animation").value;
    let selection = null;
    let spliter = 0;
    let timer = initialTimer;
    let int = null;
    switch(animation){
        case "Blank":
            selection = BLANK;
        break;
        case "Exercise":
            selection = EXERCISE;
            spliter = 3;
        break;
        case "Juggler":
            selection = JUGGLER;
            spliter = 4;
        break;
        case "Bike":
            selection = BIKE;
            spliter = 4;
        break;
        case "Dive":
            selection = DIVE;
            spliter = 20;
        break;
    }
    let text = selection.split("\n");
    let count= 0;
    do{
        let i=0;
        let img = "";
        do{
            img = img + "\n" + text.shift();
            i++;
        }while(text.length > 0 && i<=spliter);
        
        setTimeout(displayAnimation, timer, img);
        timer = timer + initialTimer;
        count = timer;
    }while(text.length > 0);
    console.log(count);
    document.getElementById("stop").disabled = false;
}

function funcStop(){
    clearInterval(interval);
}

function displayAnimation(str){
    document.getElementById("text-area").textContent = str;
}