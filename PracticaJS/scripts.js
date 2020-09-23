
    const button = document.getElementById('box');
    const tecla  = document.getElementById("textito");
    const text = document.getElementById("frase");
    const envi = document.getElementById("enviar");
    const galeria=document.getElementById("gallery");

    //Ejercicio 1
    button.addEventListener('mouseenter', () => {
        
        button.style.backgroundColor="green";
    
    });

    button.addEventListener('mouseleave', () => {
        
        button.style.backgroundColor="red";
    
    });

    button.addEventListener('mousedown', () => {
    
        console.log("Has pulsado la caja");
    
    });

    button.addEventListener('mouseup', () => {
        
        console.log("Has soltado el boton izquierdo dentro de la caja");
      
      });



    //Ejercicio 2
    tecla.addEventListener("keydown" ,() =>{

        onsole.log("Has pulsado una tecla");

    });

    tecla.addEventListener("keyup" ,() =>{

      console.log("Has soltado una tecla");

    });

    tecla.addEventListener("keydown" ,(e) =>{

      console.log(e.key); //Con key podemos saber que tecla pulsamos

    });

    //Ejercicio 3
    envi.addEventListener("click", (d)=>{
      d.preventDefault();

      text.addEventListener("keyup" ,(e) =>{

        console.log(e.key);

      });

    });


    //Ejercicio 4
    galeria.addEventListener("click", (e)=>{
      e.preventDefault();
      
      console.log(e.target.textContent);
    });


    

    
