// Player constructor
class Player {
    constructor(x, y, z, rx, ry) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.rx = rx;
        this.ry = ry;
    }
}

// Variables for movement
let PressLeft = 0;
let PressRight = 0;
let PressForward = 0;
let PressBack = 0;
let PressUp = 0;
let MouseX = 0;
let MouseY = 0;

// Key press events
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "a":
            PressLeft = 1;
            break;
        case "d":
            PressRight = 1;
            break;
        case "w":
            PressForward = 1;
            break;
        case "s":
            PressBack = 1;
            break;
        case " ":
            PressUp = 1; // Space bar
            break;
    }
});

// Key release events
document.addEventListener("keyup", (event) => {
    switch (event.key) {
        case "a":
            PressLeft = 0;
            break;
        case "d":
            PressRight = 0;
            break;
        case "w":
            PressForward = 0;
            break;
        case "s":
            PressBack = 0;
            break;
        case " ":
            PressUp = 0; // Space bar
            break;
    }
});

// Mouse movement event
document.addEventListener("mousemove", (event) => {
    MouseX += event.movementX;
    MouseY += event.movementY;
});

// Create a player instance
const pawn = new Player(0, 0, 0, 0, 0);
const world = document.getElementById("world");

function update() {
    // Count movement
    const dx = PressRight - PressLeft;
    const dz = -(PressForward - PressBack);
    const dy = PressUp;
    const drx = MouseY;
    const dry = -MouseX;

    // Reset mouse movement
    MouseX = 0;
    MouseY = 0;

    // Update pawn coordinates
    pawn.x += dx;
    pawn.y += dy;
    pawn.z += dz;
    pawn.rx += drx;
    pawn.ry += dry;

    // Move the world based on updated coordinates
    world.style.transform = `
        translateZ(600px) 
        rotateX(${-pawn.rx}deg) 
        rotateY(${-pawn.ry}deg) 
        translate3d(${-pawn.x}px, ${-pawn.y}px, ${-pawn.z}px)
    `;
}

// Start the update loop
setInterval(update, 10);
