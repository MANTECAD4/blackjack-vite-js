import { crearDeck, pedirCarta, acumularPts, addCarta } from './usecases/index.js';
import { turnoComputadora } from './usecases/turno-computadora.js';
const Main = (() => {

  'use strict'

  let deck = [];
  const tipos         = ['C', 'D', 'H', 'S'],
        especiales    = ['A', 'J', 'K', 'Q'];

  let ptsJugadores    = [];
  // Referencias HTML
  const btnPedir      = document.querySelector('#btnPedir'),
        btnDetener    = document.querySelector('#btnDetener'),
        btnNuevo      = document.querySelector('#btnNuevo');

  const contadores    = document.querySelectorAll('small'),
        manoJugadores = document.querySelectorAll('.divCartas');

  const initGame = ( numPlayers = 1 ) => {
      deck = crearDeck( tipos,especiales );
      ptsJugadores = [];
      for ( let i = 0; i <= numPlayers; i++){
          ptsJugadores.push(0);
          // manoJugadores.forEach( element => element.innerHTML = "");
          manoJugadores[i].innerHTML = "";
          contadores[i].innerText = 0;
      }

      btnPedir.disabled = false;        
      btnDetener.disabled = false;
      
  };
  
  // Eventos
  btnPedir.addEventListener('click', () => {
      const carta = pedirCarta( deck );
      const ptsJugador = acumularPts( 0, carta, ptsJugadores, contadores);
      addCarta( 0, carta, manoJugadores );
      if (( ptsJugador > 21)  || ( ptsJugador === 21) ) {
          btnPedir.disabled = true;        
          btnDetener.disabled = true;
          turnoComputadora( ptsJugador, ptsJugadores, deck, contadores, manoJugadores);
      }
  });

  btnDetener.addEventListener('click', () =>{
      btnPedir.disabled = true;        
      btnDetener.disabled = true;
      turnoComputadora( ptsJugadores[0], ptsJugadores, deck, contadores, manoJugadores);
  });

  btnNuevo.addEventListener('click', () => { 
      
      initGame();

  });

  return {
      newGame : initGame
  };

})();