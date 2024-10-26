// world degree
const deg = Math.PI / 180;

// Player class
class Player {
    constructor(x, y, z, rx, ry) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.rx = rx;
        this.ry = ry;
    }
}

const map = [
    [0, 0, -1000, 0, 0, 0, 2000, 200, "Patterns/wall2.jpg"],
    [0, 0, 1000, 0, 0, 0, 2000, 200, "Patterns/wall2.jpg"],
    [1000, 0, 0, 0, 90, 0, 2000, 200, "Patterns/wall2.jpg"],
    [-1000, 0, 0, 0, 90, 0, 2000, 200, "Patterns/wall3.jpg"],
    [0, 100, 0, 90, 0, 0, 2000, 2000, "Patterns/ground.jpg"],
    [0, 50, -1000, 0, 0, 0, 300, 300, "Patterns/windows.jfif"], // Window in Wall 1
    [-1000, 0, 0, 0, 90, 0, 300, 200, "Patterns/doors.jpg"], // Door in Wall 3
    [0, 0, -100, 0, 0, 0, 200, 200, "#9400D3"], // Front
    [0, 0, 100, 0, 0, 0, 200, 200, "#A52A2A"], // Behind
    [100, 0, 0, 0, 90, 0, 200, 200, "#1E90FF"], // Right
    [-100, 0, 0, 0, 90, 0, 200, 200, "#228B22"], // Left
    [0, 100, 0, 90, 0, 0, 200, 200, "#FF00FF"], // Floor
    [0, -100, 0, 90, 0, 0, 200, 200, "#FF00FF"] // Ceiling
];

// Variables for movement
let PressLeft = 0;
let PressRight = 0;
let PressForward = 0;
let PressBack = 0;
let PressUp = 0;
let MouseX = 0;
let MouseY = 0;

// Variables for container size
const container = document.getElementById("container");

// Lock the mouse
let lock = false;

// Lock mouse on click
container.onclick = function () {
    container.requestPointerLock();
};

// Key press event listeners
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "a": PressLeft = 1; break;
        case "d": PressRight = 1; break;
        case "w": PressForward = 1; break;
        case "s": PressBack = 1; break;
        case " ": PressUp = 1; break;
    }
});

document.addEventListener("keyup", (event) => {
    switch (event.key) {
        case "a": PressLeft = 0; break;
        case "d": PressRight = 0; break;
        case "w": PressForward = 0; break;
        case "s": PressBack = 0; break;
        case " ": PressUp = 0; break;
    }
});

// Mouse lock change event
document.addEventListener("pointerlockchange", () => {
    lock = !lock;
});

// Mouse movement event
document.addEventListener("mousemove", (event) => {
    MouseX = event.movementX;
    MouseY = event.movementY;
});

const pawn = new Player(0, 0, 0, 0, 0);
const world = document.getElementById("world");

function update() {
    // Count movement
    const dx = Math.cos(pawn.ry * deg) * (PressRight - PressLeft) - Math.sin(pawn.ry * deg) * (PressForward - PressBack);
    const dz = -Math.sin(pawn.ry * deg) * (PressRight - PressLeft) - Math.cos(pawn.ry * deg) * (PressForward - PressBack);
    const dy = -PressUp;
    const drx = MouseY;
    const dry = -MouseX;
    
    MouseX = MouseY = 0;

    // Add movement to coordinates
    pawn.x += dx;
    pawn.y += dy;
    pawn.z += dz;

    if (lock) {
        pawn.rx += drx;
        pawn.ry += dry;
    }

    // Move the world
    world.style.transform = `translateZ(600px) rotateX(${-pawn.rx}deg) rotateY(${-pawn.ry}deg) translate3d(${-pawn.x}px, ${-pawn.y}px, ${-pawn.z}px)`;
}

function CreateSquares(squares, string) {
    for (let i = 0; i < squares.length; i++) {
        const newElement = document.createElement("div");
        newElement.className = `${string} square`;
        newElement.id = `${string}${i}`;
        newElement.style.width = `${squares[i][6]}px`;
        newElement.style.height = `${squares[i][7]}px`;
        newElement.style.background = squares[i][8];
        newElement.style.backgroundImage = `url(${squares[i][8]})`;
        newElement.style.opacity = squares[i][9] || 1; // Default opacity to 1 if not set
        newElement.style.transform = `translate3d(${600 - squares[i][6] / 2 + squares[i][0]}px, ${400 - squares[i][7] / 2 + squares[i][1]}px, ${squares[i][2]}px) rotateX(${squares[i][3]}deg) rotateY(${squares[i][4]}deg) rotateZ(${squares[i][5]}deg)`;

        // Add squares to the world
        world.append(newElement);
    }
}

// Initialize the world
CreateSquares(map, 'map');
const Timergame = setInterval(update, 10);
