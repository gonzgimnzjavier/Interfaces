function nextInLine(arr, item) {
    // Cambia solo el código debajo de esta línea
    arr.push(item)
  
    return arr.shift(item);
    // Cambia solo el código encima de esta línea
  }
  
  // Configuración
  let testArr = [1, 2, 3, 4, 5];
  
  // Muestra el código
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));