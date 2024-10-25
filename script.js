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

var map = [
    // x,y,z,rx,ry,rz width,height,color
    [0,0,-1000,0,0,0,2000,200,"Patterns/wall2.jpg"],
    [0,0,1000,0,0,0,2000,200,"Patterns/wall2.jpg"],
    [1000,0,0,0,90,0,2000,200,"Patterns/wall2.jpg"],
    [-1000,0,0,0,90,0,2000,200,"Patterns/wall3.jpg"],
    [0,100,0,90,0,0,2000,2000,"Patterns/ground.jpg"],
    

   // Add a window in Wall 1
   [0, 50, -1000, 0, 0, 0, 300, 300, "Patterns/windows.jfif"], // Window in Wall 1
   // Add a door in Wall 2
// Add a door in Wall 3
[-1000, 0, 0, 0, 90, 0, 300, 200, "Patterns/doors.jpg"], // Door in Wall 3



   


  [0,0,-100,0,0,0,200,200,"#9400D3"],//front of
  [0,0,100,0,0,0,200,200,"#A52A2A"],//behind
  [100,0,0,0,90,0,200,200,"#1E90FF"],//right
  [-100,0,0,0,90,0,200,200,"#228B22"],//left
  [0,100,0,90,0,0,200,200,"#FF00FF"],//flor
  [0,-100,0,90,0,0,200,200,"#FF00FF"]//top



    
    



    
    
]


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
dy = - PressUp;
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

function CreateNewWorld(){
    // for (i = 0; i < map.length; i++){

    //     //create styles of squares
    //     let newElement = document.createElement("div");
    //     newElement.className = "square";
    //     newElement.id = "square" + i;
    //     newElement.style.width = map[i][6] + "px";
    //     newElement.style.height  = map[i][7] + "px";
    //     newElement.style.background = map[i][8];
    //     newElement.style.backgroundImage = "url("+map[i][8]+")"; // Z-index
    //     console.log(map[i][6]);
    //     newElement.style.opacity = map [i][9]; // Opcity
    //     newElement.style.transform = "translate3d(" + 
    //                                      (600 - map[i][6]/2 + map[i][0]) + "px," + 
    //                                      (400 - map[i][7]/2 + map[i][1]) + "px," + 
    //                                      map[i][2] + "px)" +
    //                                      "rotateX(" + map[i][3] + "deg)" + 
    //                                      "rotateY(" + map[i][4] + "deg)" + 
    //                                      "rotateZ(" + map[i][5] + "deg)";
    //     //add sqaures to the world
    //     world.append(newElement);
    // }

    CreateSquares (map, 'map');
}

function CreateSquares(sqaures,string){
  for (i = 0; i < sqaures.length; i++){

      //create styles of squares
      let newElement = document.createElement("div");
      newElement.className = string +" square";
      newElement.id = string + i;
      newElement.style.width = sqaures[i][6] + "px";
      newElement.style.height  = sqaures[i][7] + "px";
      newElement.style.background = sqaures[i][8];
      newElement.style.backgroundImage = "url("+sqaures[i][8]+")"; // Z-index
      console.log(sqaures[i][6]);
      newElement.style.opacity = sqaures [i][9]; // Opcity
      newElement.style.transform = "translate3d(" + 
                                       (600 - sqaures[i][6]/2 + sqaures[i][0]) + "px," + 
                                       (400 - sqaures[i][7]/2 + sqaures[i][1]) + "px," + 
                                       sqaures[i][2] + "px)" +
                                       "rotateX(" + sqaures[i][3] + "deg)" + 
                                       "rotateY(" + sqaures[i][4] + "deg)" + 
                                       "rotateZ(" + sqaures[i][5] + "deg)";
      //add sqaures to the world
      world.append(newElement);
  }
}




CreateNewWorld();
CreateSquares();
Timergame = setInterval(update,10);