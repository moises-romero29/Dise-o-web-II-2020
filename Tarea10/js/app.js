
document.getElementsByTagName('body')[0].onload=inicio;
  var datos=[];
// setea inicio de la app
function inicio() {
  console.log("incio");
  document.getElementById('enviar').onclick=procesar;
  // document.getElementById('storage').onclick=almacenar;
  cargarDatos();
  imprimirFilas();
}

// procesa datos del formulario
function procesar()
    {
      console.log("procesando...");
      if (document.getElementById('idx').value=="")
      {
      datos.push([document.getElementById('apellido').value,document.getElementById('nombre').value,document.getElementById('cedula').value,document.getElementById('fenac').value]);
    } else {
      var idx=document.getElementById('idx').value;
      datos[idx][0]=document.getElementById('apellido').value;
      datos[idx][1]=document.getElementById('nombre').value;
      datos[idx][2]=document.getElementById('cedula').value;
      datos[idx][3]=document.getElementById('fenac').value;
    }
      almacenar();
      imprimirFilas();
      limpiarForm();
    }

// imprime filas con datos de tabla.
function imprimirFilas()
    {
    var salida="";
    datos.forEach((item, i) => {
      salida=salida+"<div class='card'><div class='card-body'><p class='card-header bg-dark'><br></p><br><span> <font size=4>Id: </font> <span><font size=4>"+i+ "</font></span></span> <br><span><font size=4><font size=4> Apellidos: </font><span><font size=4>" +item[0]+"</font></span></span><br><span><font size=4> Nombres: </font><span><font size=4>"+ item[1]+"</font></span></span> <br><span><font size=4> Cedula de identidad: </font><span><font size=4>"+item[2]+"</font></span></span><br><span><font size=4> Fecha de nacimiento: </font><span><font size=4>"+item[3]+"</font></span></span><br><br><button type='button' id='nuevo' onclick='limpiarForm()' class='btn btn-success'>Nuevo</button> <button type='button' class='btEditar  btn btn-warning' data-id='"+i+"'>Editar</button>  <span><button type='button' class='btBorrar btn btn-danger' data-id='"+i+"'>Borrar</button> </span></span><br></div></div>"
    });
    document.getElementById('datos').innerHTML=salida;
    btTablas();
    }

//carga datos iniciales...
function cargarDatos() {

  console.log(JSON.parse(localStorage.datos));
  datos=JSON.parse(localStorage.datos);

}

// reinicia el formulario
function limpiarForm() {
  document.getElementById('idx').value="";
  document.getElementById('apellido').value="";
  document.getElementById('nombre').value="";
  document.getElementById('cedula').value="";
  document.getElementById('fenac').value="";
  document.getElementById('apellido').focus();
}
// asigna eventos a botenes de la tabla...
function btTablas()
  {
    var btedit=document.getElementsByClassName('btEditar');
    for (var i = 0; i < btedit.length; i++) {
      btedit[i].onclick=editar;
    }
    var btborrar=document.getElementsByClassName('btBorrar');
    for (var i = 0; i < btborrar.length; i++) {
      btborrar[i].onclick=borrar;
    }
  }
// carga formulario con datos del array
function editar(e)
{
console.log("editando");
var fila=e.target;
//console.log(fila.attributes["data-id"].value);
var idx=fila.attributes["data-id"].value;
document.getElementById('idx').value=idx;
document.getElementById('apellido').value=datos[idx][0];
document.getElementById('nombre').value=datos[idx][1];
document.getElementById('cedula').value=datos[idx][2];
document.getElementById('fenac').value=datos[idx][3];
document.getElementById('apellido').focus();
}
// borra elemento del array
function borrar(e) {
    var fila=e.target;
    var idx=fila.attributes["data-id"].value;
    datos.splice(idx,1);
    almacenar();
    imprimirFilas();
}
// persiste los datos a traves de storage
function almacenar() {
  console.log("almacenado");
  localStorage.setItem("datos", JSON.stringify(datos));
}
