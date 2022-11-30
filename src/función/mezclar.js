function revolver(array) {
    let currentIndex = array.length,  randomIndex;
    
    // se ejecuta un bucle 
    while (currentIndex != 0) {
        
      // funcion de mezclar tarjetas
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--; //resta la unidad
        
      // 
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    
    return array;
    }
    export default revolver; 