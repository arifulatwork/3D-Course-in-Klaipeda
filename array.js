

// Example function to create points in the world
function createPoints(points) {
    for (let i = 0; i < points.length; i++) {
        const [x, y, z, type, color] = points[i];
        const pointElement = document.createElement("div");
        pointElement.className = "point";
        pointElement.style.width = "20px"; // Size of the point
        pointElement.style.height = "20px";
        pointElement.style.backgroundColor = color; // Color of the point
        pointElement.style.borderRadius = "50%"; // Make it circular
        pointElement.style.position = "absolute"; // Positioning
        pointElement.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
        
        world.append(pointElement);
    }
}

// Example function to create keys in the world
function createKeys(keys) {
    for (let i = 0; i < keys.length; i++) {
        const [x, y, z, keyType, doorId] = keys[i];
        const keyElement = document.createElement("div");
        keyElement.className = "key";
        keyElement.style.width = "20px"; // Size of the key
        keyElement.style.height = "20px";
        keyElement.style.backgroundColor = "#FFD700"; // Color of the key
        keyElement.style.borderRadius = "5px"; // Slightly rounded corners
        keyElement.style.position = "absolute"; // Positioning
        keyElement.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;

        // Optionally add a data attribute to link to the door it unlocks
        keyElement.dataset.doorId = doorId;

        world.append(keyElement);
    }
}

// Create points and keys in the world
createPoints(points);
createKeys(keys);
