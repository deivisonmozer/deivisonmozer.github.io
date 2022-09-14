window.onload = ()=> {
    let val = 100;
    let interval = setInterval(fIncreaseSize, 250, val);
    document.getElementById("idCircle").onclick = removeCircle;
    document.getElementById("idStop").onclick = ()=>{fstop(interval)};
    document.getElementById("idStart").onclick = start;
}

function fIncreaseSize(val){
    let current = document.getElementById("idCircle").style.width

    if(!current)
        document.getElementById("idCircle").style.width = val + "px";
    else {
        document.getElementById("idCircle").style.width = parseInt(current) + 10 + "px";   
        document.getElementById("idCircle").style.height = parseInt(current) + 10 + "px";   
    }
}

function removeCircle(){
    console.log("clicked");
    let c = document.getElementById("idCircle");
    c.remove();

    console.log("removed");
}

function fstop(x){
    clearInterval(x);

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
    obj.style.width = width;
    obj.style.maxWidth = maxGrowth + "px"; 
    obj.style.backgroundColor = "rgb("+generateNumber(0, 255)+","+ generateNumber(0, 255) +","+ generateNumber(0, 255) + ")";
    obj.onclick = removeCircle;
    document.getElementById("content").appendChild(obj);
    //need to create a interval for each element
    let timer = setInterval(fIncreaseSize, interval, 50);
    document.getElementById("idStop").onclick = ()=>{fstop(timer)};
}

function generateNumber(min, max){
    let v = Math.floor(Math.random() * (max - min) + min);
    return v;
}

