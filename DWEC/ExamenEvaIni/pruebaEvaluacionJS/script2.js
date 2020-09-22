const insertar = () =>{
    //Recogemos los datos
    window.alert("Insertar nuevo empleado");
    let numEmple = prompt("Numero de empleado");
    let dni = prompt("Dni del empleado");
    let nombre = prompt("Nombre del empleado");
    let apellido=prompt("Apellido del empleado");
    
    //Creamos un tr con todos los td necesario
    let prueba='<tr>'+'<td>'+numEmple+'</td>'+'<td>'+dni+'</td>'+'<td>'+nombre+'</td>'+'<td>'+apellido+'</td></tr>';
     
    //Creamos un elemento tr
    let añadir = document.createElement("tr");

    //Agregamos al elemento tr el tr que hemos creado con todos sus td y lo añadimos a la tabla
    añadir.innerHTML=prueba;
    document.getElementById("tablita").appendChild(añadir);
    

}

const borrar = () => {

    let dni = prompt("Dni del empleado");
    let tamaño = document.getElementsByTagName("tr").length-1;
    let tabla = document.getElementById("tablita");
    
    for(let i=0; i<tamaño; i++){

        let emple=tabla.getElementsByTagName("tr")[i].innerHTML;

        console.log(emple);

        if(emple == dni){

            tabla.removeChild(emple);

        }
    }


}