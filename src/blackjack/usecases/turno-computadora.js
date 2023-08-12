import { PedirCarta } from "./pedir-carta";
import { ValorCarta } from "./valor-carta";

/**
 *
 * @param {<number>} puntosminimos
 * @param {<number>} puntajeComputadora
 * @param {Array<string>} deck
 */

export const TurnoComputadora = (
  puntosminimos,
  puntajeComputadora,
  deck,
  index
) => {
  const puntosComputadora = document.querySelector("#puntosComputadora"),
    divComputadora = document.querySelector("#computadora");

  do {
    const carta = PedirCarta(deck);
    puntajeComputadora = puntajeComputadora + ValorCarta(carta);
    // Agregamos el valor del puntaje al tag span
    puntosComputadora.textContent = puntajeComputadora;
    // Creamos las imagenes de las cartas
    const imgCarta = document.createElement("img");
    imgCarta.classList.add("carta");
    imgCarta.src = `./assests/img/cartas/${carta}.png`;
    // Agregamos el tag img al HTML del jugador
    divComputadora.append(imgCarta);
  } while (puntajeComputadora <= puntosminimos);

  setTimeout(() => {
    if (puntajeComputadora >= puntosminimos && puntajeComputadora <= 21) {
      alert("La computadora ha ganado");
    } else if (puntajeComputadora > 21) {
      alert(`El jugador ${index + 1} ha ganado`);
    }
  }, 50);

  btnPedirCarta.disabled = true;
  btnDetener.disabled = true;
};
