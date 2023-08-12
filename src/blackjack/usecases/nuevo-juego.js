import { CrearMazo } from "./crear-baraja";
import { AddJugadores } from "./add-jugadores";
// Funcion para reiniciar el juego

let deck = [];

/**
 *
 * @param {Array<string>} tipos
 * @param {Array<string>} especiales
 * @returns {number , Array<string>}
 */
export const NuevoJuego = (tipos, especiales) => {
  deck = CrearMazo(tipos, especiales);
  let divPlayers = document.querySelectorAll(".carta");

  for (const item of divPlayers) {
    item.remove();
  }

  let puntos = document.querySelectorAll(".puntos");

  for (const item of puntos) {
    item.innerHTML = "0";
  }

  //AddJugadores();
  return [0, deck];
};
