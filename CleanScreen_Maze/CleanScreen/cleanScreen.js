window.onload = ()=> {
    document.getElementById("idStart").onclick = start;
}

function start(){
    let width = document.getElementById("idWidth").value;
    let maxGrowth = document.getElementById("idGrowth").value;
    let interval = document.getElementById("idInterval").value;
    let number = document.getElementById("idNumber").value;

    for(let i=0; i<number; i++){
        generateCircle(width, maxGrowth, interval);
    }
}   

function generateCircle(width, maxGrowth, interval){
    let obj = document.createElement("div");
    obj.id = "idCircle";
    obj.style.width = width + "px";
    obj.style.height = width + "px";
    obj.style.maxWidth = maxGrowth + "px"; 
    obj.style.top=generateNumber(300,1000)+"px";
    obj.style.left=generateNumber(0,1000)+"px";
    obj.className = "circle";
    obj.style.backgroundColor = "rgb("+generateNumber(0, 255)+","+ generateNumber(0, 255) +","+ generateNumber(0, 255) + ")";
    obj.onclick = ()=>{obj.remove()};
    document.getElementById("content").appendChild(obj);

    let timer = setInterval(fIncreaseSizeObj, interval, obj);
}

function fIncreaseSizeObj(obj){
    let current = obj.style.width;
    
    obj.style.width = parseInt(current) + 10 + "px";   
    obj.style.height = parseInt(current) + 10 + "px";   
}

function generateNumber(min, max){
    let v = Math.floor(Math.random() * (max - min) + min);
    return v;
}

