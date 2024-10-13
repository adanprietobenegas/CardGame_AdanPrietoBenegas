class Carta { //clase carta
    constructor(tipo) {
        this.tipo = tipo;     
        this.puntos = 0;    
    }


  
}

// Clase jugador
class Jugador{   
    constructor(nombre){
        this.nombre = nombre;
        this.cartas = [];
        this.eliminado = false;
        this.turno = false;

    }
// Devuelve la cantidad de cartas que tiene un jugador
    contarCartas(){
       return this.cartas.length;
    }


// Añade una carta pasada por parametro al jugador
    addCarta(carta){
        this.cartas.push(carta);
    }

    // Obtiene el total de puntos del jugador
    getPuntos() {
            return this.cartas.reduce(function(total, carta) {
                return total + carta.puntos;
            }, 0);
        }
    
       
// Devuelve el numero de cartas de este tipo
        numSaltarTurno() {
  let saltarTurno = this.cartas.filter(carta => carta.tipo === "SaltarTurno");
  return saltarTurno.length;
}

// Devuelve el numero de cartas de este tipo
    numDesactivar() {
        let desactivar = this.cartas.filter(carta => carta.tipo === "Desactivación");
  return desactivar.length;
}
    
// Busca la carta de desactivar en el array de cartas del jugador, la borra y la añade a las cartas descartas
    gastarCartaDesactivar() {
        let indexDeCartaDesactivar = this.cartas.findIndex((carta) => carta.tipo === "Desactivación");
        this.cartas.splice(indexDeCartaDesactivar,1);
        return  descartes.descartados.push(this.cartas[indexDeCartaDesactivar]);
    }

// Busca la carta de salto de turno en el array de cartas del jugador, la borra y la añade a las cartas descartas
    gastarCartasSaltoTurno() {

            let indexSaltarTurno = this.cartas.findIndex((carta) => carta.tipo === "SaltarTurno");
            this.cartas.splice(indexSaltarTurno,1);
            return  descartes.descartados.push(this.cartas[indexDeCartaDesactivar]);
        }

}



// Clase de la baraja
class Deck{
    constructor() {
        this.mazo = [];
    }

    // Añade los distintos tipos de cartas a la baraja y despues las mezcla aleatoriamente
    inicializar() {
        for (let i = 0; i < 6; i++) {
            this.mazo.push(new Carta("Bomba"));
}
        for (let i = 0; i < 6; i++) {
            this.mazo.push(new Carta("Desactivación"));
        }
        for (let i = 0; i < 10; i++) {
            this.mazo.push(new Carta("SaltarTurno"));
        }
        for (let i = 0; i < 33; i++) {
            let cartaPuntos = new Carta("Puntos");
            cartaPuntos.puntos = Math.floor(Math.random() * 10) + 1;
            this.mazo.push(cartaPuntos);
        }
        this.mezclarCartas(this.mazo);
    }

// Intercambia las posiciones de las cartas en la baraja aleatoriamente mediante el algoritmo Fisher-Yates Shuffle.
    mezclarCartas() {
        for (let i = this.mazo.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.mazo[i], this.mazo[j]] = [this.mazo[j], this.mazo[i]];
        }
    }

    // Roba la última carta del mazo para añadirla a un jugador
    robar() {
        return this.mazo.pop(); 
    }
}


class Descartes{
    constructor() {
        this.descartados = [];
}
}


buttonRobar = document.getElementById("btnRobar");
buttonPasar = document.getElementById("btnPasar");

let jugador1 = new Jugador("p1");
let jugador2 = new Jugador("p2");
let jugador3 = new Jugador("p3");
let deck = new Deck();
let descartes = new Descartes();

let jugadorActual;
let salir = true;
let indexActual = 0;

    function jugarTurno() {
        if (indexActual >= jugadores.length) {
            indexActual = 0;
        }
        let jugadorActual = jugadores[indexActual];
        jugadorActual.turno = true;
        
        if(jugadorActual.numSaltarTurno == 0){
            jugadorActual.addCarta(robar());
            let a = jugadorActual.cartas[jugadorActual.cartas.length - 1];
            if (a.tipo) {
                    if(jugadorActual.numDesactivar == 0){
                        jugadorActual.eliminado=true;
                        console.log(`${jugadorActual.nombre} ha sido eliminado`);  
                        jugadores.splice(indexActual,1);
                       }else{
                        jugadorActual.gastarCartaDesactivar();
                       }
            }
            jugadorActual.turno = false;
            indexActual++;
        }else{
            if(jugadorActual.numSaltarTurno > 0){
                buttonPasar.addEventListener("click",saltar)
            }else{ jugadorActual.addCarta(robar());
                let a = jugadorActual.cartas[jugadorActual.cartas.length - 1];
                if (a.tipo) {
                        if(jugadorActual.numDesactivar == 0){
                            jugadorActual.eliminado=true;
                            console.log(`${jugadorActual.nombre} ha sido eliminado`);  
                            jugadores.splice(indexActual,1);
                           }else{
                            jugadorActual.gastarCartaDesactivar();
                           }
                }
                jugadorActual.turno = false;
                indexActual++;
            }}
            for (let i = 0; i < jugadores.length; i++) {
                const element = jugadores[i];
                if(element.eliminado==true && element.cartas.length > 0){
                   for (let j = 0; j < element.cartas.length; j++) {
                    const element2 = element.cartas[j];
                    descartes.descartados.push(element2);
                    element2.this.mazo.pop;
                   }
                    }
                }
            }    
            
            if(deck.mazo.length==0 || jugadores.length==1){
                    salir=false;
                
        }       
        
      
            
    
function saltar(){
    jugadorActual.turno = false;
    indexActual++;
}

    

    function newgame(){
        let jugadores = [jugador1,jugador2,jugador3];
        deck.inicializar();
    
        while(salir==true){
           buttonRobar.addEventListener("click",jugarTurno);
                }
if (jugadores.length==1) {
    console.log(`${jugadorActual.nombre} ha ganado.`);
}else if (deck.mazo.length==0) {
    for (let i = 0; i < jugadores.length; i++) {
        console.log(`${jugadores[i].nombre} 'tiene ${jugadores[i].getPuntos()} puntos.`);    
    }
}
    }

    newgame();

/*
Funcion que devuelve el path de una imagen
de robot de manera aleatoria

function getRandomPathImg(){
    let random = Math.floor(Math.random() * 20) + 1;
    if (random < 10) {
        return `./img/card/robot_0${random}.png`;
    }
    return `./img/card/robot_${random}.png`;
}
    */

