// world degree
deg=Math.PI/180;
// add the player class
function player(x,y,z,rx,ry){

    this.x =x;
    this.y =y;
    this.z =z;
    this.rx =rx;
    this.ry =ry;
}


//vriables for movement
var PressLeft=0;
var PressRight=0;
var PressForward=0;
var PressBack=0;
var PressUp=0;
var MouseX=0;
var MouseY=0;

// variables for container size
var container = document.getElementById("container");

// lock the mouse
var lock  = false;

//if the mouse is pressed

container.onclick = function(event){
    
    container.requestPointerLock();
}


// if key is presss
document.addEventListener("keydown", (event) =>{

  if(event.key=="a"){

    PressLeft=1;

  }
    if(event.key=="d"){

    PressRight=1;

  }
  if(event.key=="w"){

    PressForward=1;

  }
  if(event.key=="s"){

    PressBack=1;

  }
  if(event.keyCode==32){

    PressUp=1;

  }


})


// if key is relesed
document.addEventListener("keyup", (event) =>{

    if(event.key=="a"){
  
      PressLeft=0;
  
    }
      if(event.key=="d"){
  
      PressRight=0;
  
    }
    if(event.key=="w"){
  
      PressForward=0;
  
    }
    if(event.key=="s"){
  
      PressBack=0;
  
    }
    if(event.keyCode==32){
  
      PressUp=0;
  
    }
  
  
  })

  // if mouse is locked
  document.addEventListener("pointerlockchange",(event)=>{

   lock = !lock;


  })

document.addEventListener("mousemove",(event) =>{

  MouseX= event.movementX;
  MouseY= event.movementY;

})
var pawn = new player(0,0,0,0,0);
var world = document.getElementById("world");

function update(){

//count movement
//dx= PressRight - PressLeft;
//dz= -(PressForward - PressBack);
dx= Math.cos(pawn.ry*deg) * (PressRight - PressLeft) -Math.sin(pawn.ry*deg) *(PressForward-PressBack);
dz=- Math.sin(pawn.ry*deg) *(PressRight - PressLeft) -Math.cos(pawn.ry*deg) *(PressForward-PressBack);
dy = PressUp;
drx=MouseY;
dry= -MouseX;
MouseX =MouseY=0;

//add movemnt to the cordinate
pawn.x= pawn.x+dx;
pawn.y= pawn.y+dy;
pawn.z= pawn.z+dz;
if(lock){
    pawn.rx= pawn.rx +drx;
    pawn.ry= pawn.ry +dry;
}


// move the worlds
world.style.transform = "translateZ(600px)" +"rotateX("+ (-pawn.rx) +"deg)"+
                        "rotateY("+ (-pawn.ry) +"deg)"+
"translate3d("+(-pawn.x)+"px," +(-pawn.y)+"px," +(-pawn.z)+"px)"


}

Timergame = setInterval(update,10);