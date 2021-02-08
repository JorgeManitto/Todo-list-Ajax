<?php 
    include_once 'include/funciones.php';

    $todos = new Todos();

    if(isset($_GET['upload'])){
        $todos -> changefalse($_GET['upload']);
        header('location:../index.php');
    }
    ?>