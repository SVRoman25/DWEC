const orden = () =>{
    //Creamos el array de ciudades y con sort lo ordenamos
    let ciudades=["Sevilla","Cadiz", "Huelva","Malaga","Granada","Almeria","Jaen","Cordoba"];
    ciudades.sort();
    
    //Creamos la tabla 
    document.write('<table border ="1" cellspacing=0 cellpadding="5px" width="150px">'+ '');
    
    //Rellenamos la tabla recorriendo el array con el for 
    for(let i = 0; i<8; i++){
        document.write('<tr>'+'<td>'+ciudades[i]);
    }
    
    //Una vez que termine de recorrer el for cerramos la tabla
    document.write('</table>')
    
}

