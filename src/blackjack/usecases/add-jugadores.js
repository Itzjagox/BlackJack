// Variables
let jugadores = [];
// Html DOM
const divMesa = document.querySelector("#table-game");

export const AddJugadores = () => {
  const cant = prompt("Ingrese la Cantidad de jugadores");

  for (let i = 0; i <= cant; i++) {
    jugadores[i] = 0;

    const AddContainer = document.createElement("div");
    const AddJugador = document.createElement("h3");
    const AddDivJugadores = document.createElement("div");

    //Siempre agregamos un jugador mas para la computadora

    // Agregamos el contenedor
    AddContainer.classList.add("row");
    AddContainer.classList.add("jugadores");
    divMesa.append(AddContainer);

    // Agregamos el label de los jugadores
    let number = i + 1;
    AddJugador.innerHTML =
      i === Number(cant)
        ? "Computadora - <span class='puntos' id='puntosComputadora'>0</span>"
        : "Jugador " +
          number +
          `- <span class='puntos' id=player_${number}>0</span>`;
    divMesa.append(AddJugador);

    // Agregamos el div de los jugadores para las cartas
    AddDivJugadores.classList.add("player");
    AddDivJugadores.id = i === Number(cant) ? "computadora" : `player${number}`; // para agregar las cartas al jugador que tenga el turno
    divMesa.append(AddDivJugadores);
  }

  return jugadores;
};
