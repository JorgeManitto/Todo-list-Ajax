<?php
 include_once 'include/funciones.php';

 $todos = new Todos();

 $lista = $todos -> mostrarTodos();

 foreach ($lista as $todo) {
     echo '<div class="text_content">
     <label class="cb cb2" >
     <input type="checkbox" name="check" class="checkbox" onclick="cbChange(this)" href='.$todo['id'].'><i></i>
     <span>'.$todo['texto'].'</span>

     
     <a  onclick="eliminarTodo(e)" href="eliminar-todo.php/?delete='.$todo['id'].'" class="delete">Eliminar</a>
     </div>';
 }
 

?>