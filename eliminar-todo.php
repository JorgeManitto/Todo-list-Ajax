<?php 
    include_once 'include/funciones.php';

    $todos = new Todos();

    if(isset($_GET['delete'])){
        $todos -> eliminarTodo($_GET['delete']);
        header('location:../index.php');
    }
    ?>