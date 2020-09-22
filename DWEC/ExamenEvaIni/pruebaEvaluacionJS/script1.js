
const inicializar = () =>{
    //creamos un array vacio y un contador 
    let array=[];
    let conta=0;

    //Hacemos un bucle el cual vamos incrementando el contador cada ves que introducimos nombre
    for(let i=0; conta<5; i++){
        let nombre = prompt("Introduzca nombre");

        //Hacemos otro bucle para comprobar que el nombre no se repite
        for(let j=0; j<=5;){

            //En caso que se repita pedimos al usuario que introdusca otro nombre y ponemos el contador a 0 
            //para volver a comprobar que el nombre no existe y si no existe suma 1 al contador 
            if(array.includes(nombre)){
               nombre=prompt("Este nombre ya existe por favor introducir otro");
               j=0;
            
            }else{
               j++;
            }
            
        }
        //Añadimos 1 al contador y al array el nuevo nombre luego con sort lo ordenamos
        conta++;
        array.push(nombre);
    }
    
    array.sort();

    //Por ultimo vamos recorriendo el array ordenado transformando cada nombre a upper y cojiendo el primer caracter
    for(let k=0; k<array.length;k++){
        
        //Guardamos el nombre
        let nombre=array[k];
    
        //Transformamos la primera en mayusculas
        let mayus=nombre.charAt(0).toUpperCase()

        //Remplazamos el primer caracter del nombre a mayuscula
        let repla=nombre.replace(nombre.charAt(0),mayus);

        console.log(repla);


    }
} 