const TurnoComputadora = (puntosminimos) => {
  do {
    const carta = PedirCarta();
    puntajeComputadora = puntajeComputadora + ValorCarta(carta);
    // Agregamos el valor del puntaje al tag span
    puntosComputadora.textContent = puntajeComputadora;
    // Creamos las imagenes de las cartas
    const imgCarta = document.createElement("img");
    imgCarta.classList.add("carta");
    imgCarta.src = `./img/cartas/${carta}.png`;
    // Agregamos el tag img al HTML del jugador
    divComputadora.append(imgCarta);
  } while (puntajeComputadora <= puntosminimos);

  setTimeout(() => {
    if (puntajeComputadora >= puntosminimos && puntajeComputadora <= 21) {
      alert("La computadora ha ganado");
    } else if (puntajeComputadora > 21) {
      alert("El jugador 1 ha ganado");
    }
  }, 50);

  btnPedirCarta.disabled = true;
  btnDetener.disabled = true;
};
