const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Cambia solo el código debajo de esta línea
  if (strokes == 1) {
    return names[0];  // "Hole-in-one!"
  } else if (strokes <= par - 2) {
    return names[1];  // "Eagle"
  } else if (strokes == par - 1) {
    return names[2];  // "Birdie"
  } else if (strokes == par) {
    return names[3];  // "Par"
  } else if (strokes == par + 1) {
    return names[4];  // "Bogey"
  } else if (strokes == par + 2) {
    return names[5];  // "Double Bogey"
  } else {
    return names[6];  // "Go Home!"
  }
  // Cambia solo el código encima de esta línea
}

console.log(golfScore(5, 4)); // Debería devolver "Birdie"
