
document.getElementById('bEnviar').addEventListener('click', function(e){
    e.preventDefault();
   nuevoTodo();
});

// document.getElementById('delete').addEventListener('click', function(e){
//     e.preventDefault();
//    eliminarTodo();
// });

function nuevoTodo(){
    const todo = document.getElementById('todo');
    let header = "todo=" + todo.value;
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            cargarTodos();
        }
    }
    xmlhttp.open('POST',"nuevo-todo.php",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send(header);
}

function cargarTodos(){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
         document.getElementById("mostrar-todo-container").innerHTML = this.responseText;
            // console.log(this.responseText);
        }
    }

    xmlhttp.open("GET","mostrar-todos.php",true);
    xmlhttp.send();
}

function eliminarTodo(e){
    e.preventDefault();
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            cargarTodos();
        }
    }

    xmlhttp.open("GET","eliminar-todo.php",true);
    xmlhttp.send();
}


function cbChange(obj) {
    
    if(obj.checked){
        obj.parentNode.childNodes[2].classList.add("inputChange")
        obj.parentNode.parentElement.classList.add("bg-label")
        obj.classList.add("inputChange")

        let palabra = "completado-todo.php/?upload=" + obj.getAttribute("href");
        let link = palabra.replace(/\s/g, '');
        
        // test(link)

    }
    else{
        obj.parentNode.childNodes[2].classList.remove("inputChange")
        obj.classList.remove("inputChange")
        obj.parentNode.parentElement.classList.remove("bg-label")

        let palabra = "incompleto-todo.php/?upload=" + obj.getAttribute("href");
        let link = palabra.replace(/\s/g, '');
        
        test(link)
        
    }
   
  }
  
  function test($link){
        console.log($link)
        window.location=$link;
  } 