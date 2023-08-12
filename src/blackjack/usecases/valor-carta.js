/**
 *
 * @param {string} carta
 * @returns {number}
 */

export const ValorCarta = (carta) => {
  let splitCarta = carta.substring(0, carta.length - 1);

  return isNaN(splitCarta)
    ? splitCarta === "A"
      ? 11
      : 10
    : Number(splitCarta);
};
