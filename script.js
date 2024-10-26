// Variables for Movement

var PressLeft = 0;
var PressRight = 0;
var PressForward = 0;
var PressBack =0;
var pressUp = 0;

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
    if(event.key === 'a' || event.key === 'ArrowUp') {
    PressLeft = 1;
    }
        
    
    if(event.key === 'd' || event.key === 'ArrowDown') {
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

var pawn = new player(0,0,0,0,0);


var world = document.getElementById('world');


function update(){
    // count movement
    dx = PressRight - PressLeft;
    dz = PressForward - PressBack;
    dy = pressUp;

    // add Movemnent to the coordinate
    pawn.x = pawn.x + dx;
    pawn.z = pawn.z + dz;
    pawn.y = pawn.y + dy;


    // move the world based on the new coordinates
    world.style.transform = "translate3d(" 
                                            +(-pawn.x) +"px," +(-pawn.y) +"px,"+ (-pawn.z) +"px)";
}

TimerGame = setInterval(update, 10); 