const añadir = () =>{

    //Obtenemos el valor del nuevo elemento y de la posicion
    let newElement = document.getElementById("nuevo").value;
    let pos = document.getElementById("posi").value;

    //Obtenemos la lista y el elemento viejo 
    let lista= document.getElementById("lista");
    let elementoViejo =document.getElementsByTagName("li")[pos-1];
   
    //Creamos un nuevo elemento li y le asignamos el valor obtenido anteriormente
    let nuevoli = document.createElement("li");
    let texto = document.createTextNode(newElement);
    nuevoli.appendChild(texto);

    //Con insertBefore cambiamos el elemento nuevo por el viejo
    lista.insertBefore(nuevoli,elementoViejo);


}

const borrar = () =>{
    
    //Obtenemos la lista completa
    let lista = document.getElementById("lista");
   
    //Obtenemos la posicion que el usuario ha elegido 
    let posElement = document.getElementById("posi").value;

    //Respecto a la posicion anterior obtenemos el elemento li
    let deleteElement = document.getElementsByTagName("li")[posElement-1];
   
    //Y lo removemos de la lista
    lista.removeChild(deleteElement);
}