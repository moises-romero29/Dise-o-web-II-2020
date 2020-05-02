<?php
session_start();
error_reporting(E_ERROR | E_WARNING | E_PARSE);
if (!$_SESSION['persona'])
{
  $_SESSION['persona']=[];
  setcookie("saludo","tu session a iniciado");
}
$nombre="";
$apellido="";
$fechaN="";

 if ($_POST)
{
   array_push($_SESSION['persona'],
   [
     "nombre"=> $_POST['nombre'],
     "apellido"=> $_POST['apellido'],
     "fechaN"=> $_POST['fechaN']
    ] );
   $nombre=$_POST['nombre'];
   $apellido=$_POST['apellido'];
   $fechaN=$_POST['fechaN'];
}
 ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Tarea 10</title>
    <link rel="stylesheet" href="lib/bootstrap/css/bootstrap.min.css">
    <script src="lib/jquery/jquery.min.js" charset="utf-8"></script>
    <script src="lib/bootstrap/js/bootstrap.min.js" charset="utf-8"></script>
  </head>
  <body  class="p-3 mb-2 bg-dark text-white">
    <nav class=" rounded navbar navbar-expand-lg  bg-white text-dark">
      <img src="/img/logo-UNAE-Standar.png" width="50" height="50" class="d-inline-block align-top" alt="">
      <a class="navbar-brand text-dark" href="#"><b>&nbsp;&nbsp;Diseño Web II</b></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link text-dark" href="#"><b>Inicio</b> <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link text-dark" href="#"><b>Clases</b></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link text-dark" href="#"><b>Formulario</b></a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search">
          <button class="btn btn-primary" type="submit">Buscar</button>
        </form>
      </div>
    </nav>
<br>

    <br>
    <div class="container">
    <div class="card">
    <div class="card-body">
    <h3 class="card-title text-dark">Formulario</h3>
    <br>
      <form class="" action="formulario.php" method="post">
        <p>
          <label class="text-dark"for="apellido">Apellido</label> <br>
          <input type="text" name="apellido" class="form-control" value=""placeholder="Apellido" required>
        </p>
        <p>
          <label class="text-dark" for="nombre">Nombre</label><br>
          <input type="text" name="nombre" value=""  class="form-control"placeholder="Nombre" required >
        </p>
        <p>
          <label class="text-dark" for="nombre">Fecha de Nacimiento</label><br>
          <input type="date" name="fechaN" value="" class="form-control" placeholder="FechaN" required><br>
        </p>
        <button type="submit" name="button" class="btn btn-success">Enviar</button> <a href="cerrar.php" class="btn btn-danger">Cerrar Sesión</a>
      </form>



    </div>
    </div>
    </div>
    <br>
    <div class="container" id="datos">
      <div class="card">
      <div class="card-body">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th>Id</th>
            <th>Apellido</th>
            <th>Nombre</th>
            <th>Fecha de Nacimiento</th>
          </tr>
        </thead>
        <tbody>
          <?php
          $persona=$_SESSION['persona'];
          foreach ($persona as $key => $value) {
            echo "<tr><td>".$key."</td><td>".$value['apellido']."</td><td>".$value['nombre']."</td><td>".$value['fechaN']."</td></tr>";
          }
          ?>
        </tbody>
      </table>
    </div>
  </div>
</div>
  </body>
</html>
