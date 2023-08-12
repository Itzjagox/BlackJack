import { CrearMazo } from "./crear-baraja";
import { AddJugadores } from "./add-jugadores";
// Funcion para reiniciar el juego
export const NuevoJuego = (tipos, especiales) => {
  CrearMazo(tipos, especiales);

  let divPlayers = document.querySelectorAll(".carta");

  for (const item of divPlayers) {
    item.remove();
  }

  let puntos = document.querySelectorAll(".puntos");

  for (const item of puntos) {
    item.innerHTML = "0";
  }

  //AddJugadores();
  return 0;
};
