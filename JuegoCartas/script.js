class Cartas{

    constructor(name, img, point){
        this.name=name;
        this.img=img;
        this.point=point;
    
    }

    getName(){
        return this.name;
    }

    getPoint(){
        return this.point;
    }

    getImagen(){
        return this.img;
    }

}

let imagen = new Image(200,290);

const carta1 = new Cartas("1 Bastos", imagen.src="imagenes/imagenes/1Bastos.jpg",1 );
const carta2 = new Cartas("1 Copas", imagen.src="imagenes/imagenes/1Copas.jpg",1 );
const carta3 = new Cartas("1 Espadas", imagen.src="imagenes/imagenes/1Espadas.jpg",1 );
const carta4 = new Cartas("1 oros", imagen.src="imagenes/imagenes/1Oros.jpg",1 );
const carta5 = new Cartas("2 Bastos", imagen.src="imagenes/imagenes/2Bastos.jpg",2 );
const carta6 = new Cartas("2 Copas", imagen.src="imagenes/imagenes/2Copas.jpg",2 );
const carta7 = new Cartas("2 Espadas", imagen.src="imagenes/imagenes/2Espadas.jpg",2 );
const carta8 = new Cartas("2 oros", imagen.src="imagenes/imagenes/2Oros.jpg",2 );
const carta9 = new Cartas("3 Bastos", imagen.src="imagenes/imagenes/3Bastos.jpg",3 );
const carta10 = new Cartas("3 Copas", imagen.src="imagenes/imagenes/3Copas.jpg",3 );
const carta11 = new Cartas("3 Espadas", imagen.src="imagenes/imagenes/3Espadas.jpg",3 );
const carta12 = new Cartas("3 Oros", imagen.src="imagenes/imagenes/3Oros.jpg",3 );
const carta13 = new Cartas("4 Bastos ", imagen.src="imagenes/imagenes/4Bastos.jpg",4 );
const carta14 = new Cartas("4 Copas", imagen.src="imagenes/imagenes/4Copas.jpg",4 );
const carta15 = new Cartas("4 Oros", imagen.src="imagenes/imagenes/4Oros.jpg",4 );
const carta16 = new Cartas("4 Espadas", imagen.src="imagenes/imagenes/4Espadas.jpg",4 );
const carta17 = new Cartas("5 Bastos", imagen.src="imagenes/imagenes/5Bastos.jpg",5 );
const carta18 = new Cartas("5 Copas", imagen.src="imagenes/imagenes/5Copas.jpg",5 );
const carta19 = new Cartas("5 Oros", imagen.src="imagenes/imagenes/5Oros.jpg",5);
const carta20 = new Cartas("5 Espadas", imagen.src="imagenes/imagenes/5Espadas.jpg",5 );
const carta21 = new Cartas("6 Bastos", imagen.src="imagenes/imagenes/6Bastos.jpg",6 );
const carta22 = new Cartas("6 Copas", imagen.src="imagenes/imagenes/6Copas.jpg",6 );
const carta23 = new Cartas("6 Oros", imagen.src="imagenes/imagenes/6Oros.jpg",6 );
const carta24 = new Cartas("6 Espadas", imagen.src="imagenes/imagenes/6Espadas.jpg",6 );
const carta25 = new Cartas("7 Bastos", imagen.src="imagenes/imagenes/7Bastos.jpg",7 );
const carta26 = new Cartas("7 Copas", imagen.src="imagenes/imagenes/7Copas.jpg",7 );
const carta27 = new Cartas("7 Oros", imagen.src="imagenes/imagenes/7Oros.jpg",7 );
const carta28 = new Cartas("7 Espadas", imagen.src="imagenes/imagenes/7Espadas.jpg",7 );
const carta29 = new Cartas("10 Bastos", imagen.src="imagenes/imagenes/8Bastos.jpg",0.5);
const carta30 = new Cartas("10 Copas", imagen.src="imagenes/imagenes/8Copas.jpg",0.5 );
const carta31 = new Cartas("10 Oros", imagen.src="imagenes/imagenes/8Oros.jpg",0.5 );
const carta32 = new Cartas("10 Espadas", imagen.src="imagenes/imagenes/8Espadas.jpg",0.5 );
const carta33 = new Cartas("11 Bastos", imagen.src="imagenes/imagenes/9Bastos.jpg",0.5 );
const carta34 = new Cartas("11 Copas", imagen.src="imagenes/imagenes/9Copas.jpg",0.5 );
const carta35 = new Cartas("11 Oros", imagen.src="imagenes/imagenes/9Oros.jpg",0.5 );
const carta36 = new Cartas("11 Espadas", imagen.src="imagenes/imagenes/9Espadas.jpg",0.5 );
const carta37 = new Cartas("12 Bastos", imagen.src="imagenes/imagenes/10Bastos.jpg",0.5 );
const carta38 = new Cartas("12 Copas", imagen.src="imagenes/imagenes/10Copas.jpg",0.5 );
const carta39 = new Cartas("12 Oros", imagen.src="imagenes/imagenes/10Oros.jpg",0.5 );
const carta40 = new Cartas("12 Espadas", imagen.src="imagenes/imagenes/10Espadas.jpg",0.5 );

var arrayCartas=[carta1,carta2,carta3,carta4,carta5,carta6,carta7,carta8,carta9,carta10,carta11,carta12,carta13,carta14,carta15,carta16,carta17,carta18,carta19,carta20,
    carta21,carta22,carta23,carta24,carta25,carta26,carta27,carta28,carta29,carta30,carta31,carta32,carta33,carta34,carta35,carta36,carta37,carta38,carta39,carta40];



    
  


let total=0;
let arrayPuntos=[];
let arrayPuntosBanco=[];
let conta=40;
let arrayRepetidos=[];
let salir=false;
let next=0;
let getImg;
let puntos;
let siguiente=0;
const plantarse=document.getElementById("plantarse");
const sacar = document.getElementById("jugador");
var boleano=false;
let desactivar=document.getElementById("jugador");
let activarBanco=document.getElementById("juBanco");

sacar.addEventListener("click", (e) =>{
        e.preventDefault();

        //Obtenemos el numero randow
        let numRandow=Math.floor(Math.random() * (conta- 0 + 1));
       
        //Quitamos las cartas repetidas hacemos un blucle que recorra un array de cartas repetidas
        // y el array de cartas normales, si el nombre de ambas cartas coincide crea otro numero randow
        for(let i=0; i<arrayRepetidos.length && salir!=true; i++){
            
            if(arrayRepetidos[i].getName()==arrayCartas[numRandow].getName()){
               let nuevoNum=Math.floor(Math.random() * (conta - 0 + 1));
                getImg=arrayCartas[nuevoNum].getImagen();
                puntos=arrayCartas[nuevoNum].getPoint();
                
                salir=true;
        }
    }

        if(salir==false){
             getImg=arrayCartas[numRandow].getImagen();
             puntos=arrayCartas[numRandow].getPoint();
        }

        conta--;
        arrayRepetidos.push(arrayCartas[numRandow]);

        //Creamos un array de puntos 
        arrayPuntos.push(puntos);

        //Cambiamos el src de la imagen del html por la obtenida
        document.getElementById("volteado").src=getImg;
              
        //Aqui creamos la imagen y con unos atributos y se lo añadimos 
        //al div donde apareceran las cartas que han salido
        let divGuardadas = document.getElementById("guardadas");
        let reinicio=document.getElementById("prueba");

        let img=document.createElement("img");
        img.setAttribute("src",getImg);
        img.setAttribute("width","100");
        img.setAttribute("height","140");
        divGuardadas.insertBefore(img, reinicio);

        //Borramos la carta que nos ha salido
        arrayCartas.splice(numRandow,1);


        
        for(let i=next; i<arrayPuntos.length; i++){
            
            total=total+arrayPuntos[i];

        }
        next++;
  
        document.getElementById("puntosJugador").innerHTML="Total jugador:"+total;
      
        if(total>7.5){
         document.getElementById("ganador").innerHTML="Ganador: Banca";

        
        desactivar.style.pointerEvents="none";
        activarBanco.style.pointerEvents="auto";
        

        }
        
});


    let totalBanca=0;
    //Si hacemos click en plantarse suma los puntos y empieza a jugar la banca
    plantarse.addEventListener("click", (d) => {
      d.preventDefault();

      
      desactivar.style.pointerEvents="none";
      activarBanco.style.pointerEvents="auto";


    
const sacarBanco=document.getElementById("juBanco");
     
do{
  sacarBanco.click(sacarBanco.addEventListener("click", () =>{
  
  let numRandow=Math.floor(Math.random() * (conta - 0 + 1));
  
  for(let j=0; j<arrayRepetidos.length && salir!=true; j++){
      
      if(arrayRepetidos[j].getName()==arrayCartas[numRandow].getName()){
        
          let nuevoNum=Math.floor(Math.random() * (conta - 0 + 1));

          getImg=arrayCartas[nuevoNum].getImagen();
          puntos=arrayCartas[nuevoNum].getPoint();
          
          salir=true;
  }
}

  if(salir==false){
       getImg=arrayCartas[numRandow].getImagen();
       puntos=arrayCartas[numRandow].getPoint();
  }

  conta--;
  arrayRepetidos.push(arrayCartas[numRandow]);

  //Creamos un array de puntos 
  arrayPuntosBanco.push(puntos);
  

  document.getElementById("volBanco").src=getImg;
      
  let divGuardadas = document.getElementById("guardadasBanco");
  let reinicio=document.getElementById("pruebaBanco");

  let img=document.createElement("img");
  img.setAttribute("src",getImg);
  img.setAttribute("width","100");
  img.setAttribute("height","140");
  divGuardadas.insertBefore(img, reinicio);

  arrayCartas.splice(numRandow,1);

  for(let k=siguiente; k<arrayPuntosBanco.length; k++){
          
      totalBanca=totalBanca+arrayPuntosBanco[k];

  }
  siguiente++;

  document.getElementById("puntosBanca").innerHTML="Total banca:"+totalBanca;

  if(totalBanca>total && totalBanca<=7.5){
    document.getElementById("ganador").innerHTML="Ganador: Banca";

    activarBanco.style.pointerEvents="none";
    desactivar.style.pointerEvents="none";

    }else if(total==totalBanca){
        document.getElementById("ganador").innerHTML="Ganador: Empate";

        activarBanco.style.pointerEvents="none";
        desactivar.style.pointerEvents="none";
    }else{
        document.getElementById("ganador").innerHTML="Ganador: Jugador";

        activarBanco.style.pointerEvents="none";
        desactivar.style.pointerEvents="none";
    }
  
    })
 );
}while(totalBanca<total);
});




const reinicio = document.getElementById("reinicio");

reinicio.addEventListener("click", () =>{

    location.reload();

});

   





