// Esta funcion me permite pedir una carta y eliminarla del mazo
/**
 * 
 * @param {Array<string>} mazo 
 * @returns {number}
 */

export const PedirCarta = (mazo) => {
  if (mazo.length === 0) throw "No hay cartas en el mazo";

  return mazo.pop();
};
