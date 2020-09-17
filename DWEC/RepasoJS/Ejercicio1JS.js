const añadir = () =>{
    //Obtenemos el valor de la posicion el del equipo y los puntos
    let posi  = document.getElementById("posicion").value;
    let equi = document.getElementById("equipo").value;
    let punto = document.getElementById("puntos").value;

    //Localizamos la fila y las columnas que nos interesa cambiar
    document.getElementsByTagName("tr")[posi].getElementsByTagName("td")[1].innerHTML=equi;
    document.getElementsByTagName("tr")[posi].getElementsByTagName("td")[2].innerHTML=punto;

}

