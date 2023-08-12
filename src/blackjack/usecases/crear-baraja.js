import _ from "underscore";

// Esta funcion crea una baraja
/**
 *
 * @param {Array<string>} tipos ["C", "D", "H", "S"]
 * @param {Array<string>} especiales ["A", "J", "Q", "K"]
 * @returns {Array<string>}
 */

let mazo = [];

export const CrearMazo = (tipos, especiales) => {
  if (!tipos || tipos.length === 0)
    throw "El argumento tipos no puede estar vacio y tampoco ser nulo";

  if (!especiales || especiales.length === 0)
    throw "El argumento especiales no puede estar vacio y tampoco ser nulo";

  for (let i = 2; i <= 10; i++) {
    for (let j = 0; j < tipos.length; j++) {
      mazo.push(i + tipos[j]);
    }
  }

  for (const tipo of tipos) {
    for (const especial of especiales) {
      mazo.push(especial + tipo);
    }
  }

  mazo = _.shuffle(mazo);
  return mazo;
};
