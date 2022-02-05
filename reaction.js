let start = new Date().getTime();

function getRandomColor(){
    let letter = "0123456789ABCDEF".split("");
    let colors = "#";

    for(let i = 0; i < 6; i++){
        colors = colors + letter[Math.floor(Math.random() * 16)];
    }

    return colors;


}
function makeShapeAppear(){
    let top = Math.random()*600;
    let left = Math.random()*700
    let width = Math.random()*300

    if(Math.random()>0.5){
        document.getElementById('shape').style.borderRadius = "50%";
    }
    else{
        document.getElementById('shape').style.borderRadius = "0";
    }

    document.getElementById('shape').style.backgroundColor = getRandomColor();
    document.getElementById('shape').style.height = width + "px";
    document.getElementById('shape').style.width = width + "px";
    document.getElementById('shape').style.top = left + "px";
    document.getElementById('shape').style.left = left + "px";
    document.getElementById('shape').style.display = "block";

    start = new Date().getTime();

}

//set timeout

function appearAfterdelay(){
    //Change time here to increase speed
    setTimeout(makeShapeAppear,Math.random()*500);
}

appearAfterdelay();

document.getElementById('shape').onclick= function(){
    document.getElementById('shape').style.display = "none";
    let end = new Date().getTime();
    let timeTaken = (end - start)/1000;
    document.getElementById('time').innerHTML=timeTaken + "sec";
    appearAfterdelay();
}
