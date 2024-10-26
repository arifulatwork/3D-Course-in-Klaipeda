// Variables for Movement

var PressLeft = 0;
var PressRight = 0;
var PressForward = 0;
var PressBack =0;
var pressUp = 0;
var MouseX = 0;
var MouseY = 0;

// add the player 

function player(x,y,z,rx,ry){

    this.x = x;
    this.y = y;
    this.z = z;
    this.rx = rx;
    this.ry = ry;
    // this.player = document.createElement('div');

}


//if the key is pressed events, set the corresponding variable to 1. This will enable the movement of the camera.

document.addEventListener('keydown' ,(event) => {
    if(event.key === 'a') {
    PressLeft = 1;
    }
        
    
    if(event.key === 'd') {
        PressRight = 1;
    }

    if(event.key === 'w') {
        PressForward = 1;
    }

    if(event.key ==='s') {
        PressBack = 1;
    }

    if(event.keyCode === 32) {
        pressUp = 1;
    }


})

// if the key is releaseEvents, set the corresponding variable to 0.

document.addEventListener('keyup' ,(event) => {
    if(event.key === 'a') {
    PressLeft = 0;
    }
        
    
    if(event.key === 'd') {
        PressRight = 0;
    }

    if(event.key === 'w') {
        PressForward = 0;
    }

    if(event.key ==='s') {
        PressBack = 0;
    }

    if(event.keyCode === 38) {
        pressUp = 0;
    }


})

document.addEventListener('mousemove', (event)  =>{
    MouseX = event.movementX;
    MouseY = event.movementY;
})



var pawn = new player(0,0,0,0,0);


var world = document.getElementById('world');


function update(){
    // count movement
    dx = PressRight - PressLeft;
    dz = PressForward - PressBack;
    dy = pressUp;
    drx = MouseY;
    dry = MouseX;
    

    

    // add Movemnent to the coordinate
    pawn.x = pawn.x + dx;
    pawn.z = pawn.z + dz;
    pawn.y = pawn.y + dy;
    pawn.rx = pawn.rx + drx;
    pawn.ry = pawn.ry + dry;


    // move the world based on the new coordinates
    world.style.transform = "rotateX("+(-pawn.rx)+"deg)+ rotateY("+(-pawn.ry)+"deg)"+
    "translate3d("+(-pawn.x) +"px," +(-pawn.y) +"px,"+ (-pawn.z) +"px)";
}

TimerGame = setInterval(update, 10); 