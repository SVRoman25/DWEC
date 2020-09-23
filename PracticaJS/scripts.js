
    const button = document.getElementById('box');
    const tecla  = document.getElementById("textito");
    button.addEventListener('mouseenter', () => {
        
        button.style.backgroundColor="green";
    
    })

    button.addEventListener('mouseleave', () => {
        
        button.style.backgroundColor="red";
    
    })

    button.addEventListener('mousedown', () => {
    
        console.log("Has pulsado la caja");
    
    })

    button.addEventListener('mouseup', () => {
        
        console.log("Has soltado el boton izquierdo dentro de la caja");
      
      })

      tecla.addEventListener("keydown" ,() =>{

        console.log("Has pulsado una tecla");

      });

      tecla.addEventListener("keyup" ,() =>{

        console.log("Has soltado una tecla");

      });

      tecla.addEventListener("keydown" ,(e) =>{

        console.log(e.key); //Con key podemos saber que tecla pulsamos

      });