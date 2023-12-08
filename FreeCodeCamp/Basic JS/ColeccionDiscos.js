function updateRecords(records, id, prop, value) {
    // Si value es una cadena vacía, elimina la propiedad prop dada del álbum
    if (value === "") {
      delete records[id][prop];
    } else {
      // Si prop no es "tracks" y value no es una cadena vacía, asigna value a prop
      if (prop !== "tracks") {
        records[id][prop] = value;
      } else {
        // Si prop es "tracks" pero el álbum no tiene una propiedad "tracks", crea un array vacío antes de añadir el valor
        if (!records[id].hasOwnProperty("tracks")) {
          records[id]["tracks"] = [];
        }
        // Si prop es "tracks" y value no es una cadena vacía, añade value al final del array de tracks
        if (value !== "") {
          records[id]["tracks"].push(value);
        }
      }
    }
    return records;
  }