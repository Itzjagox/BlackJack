import {
  AddJugadores,
  CrearMazo,
  PedirCarta,
  Turno,
  TurnoComputadora,
  ValorCarta,
  NuevoJuego,
  puntMinimo,
} from "./usecases";

(() => {
  "use strict";
  //
  let puntajeJugador = 0;
  let puntajeComputadora = 0;

  // Referencias del HTML
  const btnPedirCarta = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnDetener"),
    btnNuevo = document.querySelector("#btnNuevo");

  const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"];

  let puntajeMinimo = 0,
    index = 0;

  // Se agregan los jugadores
  const jugadores = AddJugadores();
  const deck = CrearMazo(tipos, especiales);

  // Turno
  let i = 0;
  let [puntosJugador, divPlayer] = Turno(i);
  btnNuevo.disabled = true;
  // Evento click pedir carta
  btnPedirCarta.addEventListener("click", () => {
    const carta = PedirCarta(deck);
    puntajeJugador = puntajeJugador + ValorCarta(carta);
    // Agregamos el valor del puntaje al tag span
    puntosJugador.textContent = puntajeJugador;
    // Creamos las imagenes de las cartas
    const imgCarta = document.createElement("img");
    imgCarta.classList.add("carta");
    imgCarta.src = `./assests/img/cartas/${carta}.png`;
    // Agregamos el tag img al HTML del jugador
    divPlayer.append(imgCarta);

    setTimeout(() => {
      if (puntajeJugador > 21) {
        alert(`El jugador ${i + 1} ha perdido`);
        i += 1;
        [puntosJugador, divPlayer] = Turno(i);
        puntajeJugador = 0;

        if (i >= jugadores.length - 1) {
          btnDetener.disabled = true;
          btnPedirCarta.disabled = true;
          [puntajeMinimo, index] = puntMinimo(jugadores);
          TurnoComputadora(puntajeMinimo, puntajeComputadora, deck, index);
          btnNuevo.disabled = false;
        }
      }
    }, 50);
  });

  btnDetener.addEventListener("click", () => {
    jugadores[i] = puntajeJugador;
    i += 1;

    if (i < jugadores.length - 1) {
      [puntosJugador, divPlayer] = Turno(i);
      puntajeJugador = 0;
    }

    if (i >= jugadores.length - 1) {
      btnDetener.disabled = true;
      btnPedirCarta.disabled = true;

      [puntajeMinimo, index] = puntMinimo(jugadores);
      TurnoComputadora(puntajeMinimo, puntajeComputadora, deck, index);
      btnNuevo.disabled = false;
    }
  });

  btnNuevo.addEventListener("click", () => {
    i = NuevoJuego(tipos, especiales);
    [puntosJugador, divPlayer] = Turno(i);
    puntajeJugador = 0;
    puntajeComputadora = 0;
    btnNuevo.disabled = true;
    btnPedirCarta.disabled = false;
    btnDetener.disabled = false;
  });
})();
