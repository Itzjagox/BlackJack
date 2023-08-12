// DOM de los jugadores

/**
 *
 * @param {number} turno
 * @returns {number , DOM}
 */

export const Turno = (turno = 0) => {
  let i = turno;
  const puntosJugador = document.querySelector(`#player_${i + 1}`);
  const divPlayer = document.querySelector(`#player${i + 1}`);

  return [puntosJugador, divPlayer];
};
