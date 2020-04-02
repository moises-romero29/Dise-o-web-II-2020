alert("TAREA INDIVIDUAL 6");
var origen=[];
function cargar(){
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
  }
  for (var i = 0; i < 10; i++) {
    origen[i]=getRandomInt(0,9);
  }
}
cargar(origen);
console.log("Origen = "+origen);

var destino=[];
function copiar(origen){
  destino = origen.slice();
  destino.sort((a, b) => a - b )
}
copiar(origen);
console.log("destino = " +destino);
