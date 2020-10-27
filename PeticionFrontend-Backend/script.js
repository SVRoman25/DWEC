
const nombre = document.getElementById("name");
const ape = document.getElementById("apellido");
const dni = document.getElementById("dni");
const tele = document.getElementById("tele");
const gmail = document.getElementById("gmail");
const crear = document.getElementById("enviar");
const leer = document.getElementById("consultar");


//Cuando hacemos click en leer entramos y obtenemos el valor de dni y busca y muestra al cliente con ese dni
leer.addEventListener("click", (e) =>{
    e.preventDefault();

    let cliente= document.getElementById("dni2").value;

    fetch(`http://localhost:8080/apiController/cliente/${cliente}`)
        .then(res => res.ok? Promise.resolve(res):Promise.reject(res))
        .then(res => res.json())
        .then(res => {

            nombre.value=res.nombre;
            ape.value=res.apellido;
            dni.value=res.dni;
            tele.value=res.telefono;
            gmail.value=res.gmail;
  
        })
        .catch(error => 

           {if(error.status==404){
                alert("El cliente no existe");
            }
        
        })
            
         

})

//Cuando hacemos click en crear recoge los ratos de todos los campos y crea a esa persona en caso de que suceda algo inesperado lanza un error
crear.addEventListener("click", (e)=>{
    e.preventDefault();

    fetch(`http://localhost:8080/apiController/cliente`,  {
        method: 'POST',
        body: JSON.stringify({
            nombre:nombre.value,
            apellido:ape.value,
            dni:dni.value,
            telefono: tele.value,
            gmail:gmail.value

        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(res => res.ok? Promise.resolve(res):Promise.reject(res))
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(error => console.log(error))


    


})