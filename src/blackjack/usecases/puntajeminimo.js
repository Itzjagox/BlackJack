/**
 *
 * @param {Array<number>} jugadores
 * @param {number , number}
 */
export const puntMinimo = (jugadores) => {
  let puntajeMinimo = jugadores[0], // Asumimos que el primer valor es el mayor e iteramos
    index = 0; // Index por defecto

  for (const value of jugadores) {
    if (puntajeMinimo < value && value <= 21) {
      puntajeMinimo = value;
      index += 1;
    }
  }

  return [puntajeMinimo, index];
};
