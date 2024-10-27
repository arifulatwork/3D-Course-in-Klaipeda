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


// Points array: [x, y, z, type, color]
var keys = [
  [1850, 30, -600, 0, 0, 0, 50, 50, '#FF4500'], // Key near coin 1
  [150, 30, 250, 0, 0, 0, 50, 50, '#FF4500'],   // Key near coin 2
  [-850, 30, 150, 0, 0, 0, 50, 50, '#FF4500'],  // Key near coin 3
  [-30, 30, 750, 0, 0, 0, 50, 50, '#FF4500'],   // Key near coin 4
];

var coinSound = new Audio('Patterns/coin.mp3');
var keySound = new Audio('Patterns/keys.mp3');

// Keys array: [x, y, z, keyType, doorId]
var coin = [
  [1800, 30, -600, 0,0,0,50,50 ,'#FFFF00'], 
  [100,30,300,0,0,0,50,50,'#FFFF00'], 
  [-900,30,100,0,0,0,50,50,'#FFFF00'], 
  [-50,30,700,0,0,0,50,50,50,'#FFFF00'], 
  
];


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
                                      
       // Add border radius for coins
    if (string === 'coin') {
      newElement.style.borderRadius = "50%"; // Make coins circular
    }
      //add sqaures to the world
      world.append(newElement);
  }
}

function interact(objects, string, objectSound){
   for(i = 0; i < objects.length; i++){

    let dto = (objects[i][0] - pawn.x)**2 + (objects[i][1] - pawn.y)**2 + (objects[i][2] - pawn.z)**2;
    let wo  = objects[i][6]**2;
    console.log(dto,wo);
    if(dto < wo){
      objectSound.currentTime = 0; // Reset the sound to the start
      objectSound.play(); 
      
      
      document.getElementById(string + i).style.display = "none";
      objects[i][0] = 1000000;
      objects[i][1] = 1000000;
      objects[i][2] = 1000000;
    }
   }
}




CreateNewWorld();
CreateSquares(coin, 'coin');
CreateSquares(keys, 'key');

function repeatFunction(){
  update();
  interact(coin, 'coin', coinSound); // Pass the coin sound
  interact(keys, 'key', keySound); // Pass the key sound
}

Timergame = setInterval(repeatFunction,10);