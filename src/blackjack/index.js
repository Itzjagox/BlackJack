import { AddJugadores, CrearMazo, PedirCarta, Turno } from "./usecases";

(() => {
  "use strict";

  //
  let puntajeJugador = 0;

  // Referencias del HTML
  const btnPedirCarta = document.querySelector("#btnPedir"),
    puntosComputadora = document.querySelector("#puntosComputadora"),
    divComputadora = document.querySelector("#computadora"),
    btnDetener = document.querySelector("#btnDetener"),
    btnNuevo = document.querySelector("#btnNuevo");

  const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"];

  // Se agregan los jugadores
  const jugadores = AddJugadores();
  const deck = CrearMazo(tipos, especiales);

  // Turno
  let i = 0;
  let [puntosJugador, divPlayer] = Turno(i);

  // Funcion para obtener el valor de la carta
  const ValorCarta = (carta) => {
    let splitCarta = carta.substring(0, carta.length - 1);

    return isNaN(splitCarta)
      ? splitCarta === "A"
        ? 11
        : 10
      : Number(splitCarta);
  };

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
      }
    }, 50);
  });

  // Evento turno computadora
  btnDetener.addEventListener("click", () => {
    if (i === jugadores.length) null;
    i += 1;
    [puntosJugador, divPlayer] = Turno(i);
    puntajeJugador = 0;
    //TurnoComputadora(puntajeJugador);
  });

  btnNuevo.addEventListener("click", () => {
    NuevoJuego();
  });
})();
