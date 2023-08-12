// Funcion para reiniciar el juego
const NuevoJuego = () => {
    mazo = [];
    CrearMazo();

    puntajeComputadora = 0;
    puntajeJugador = 0;

    divPlayer1.innerHTML = "";
    divComputadora.innerHTML = "";

    puntosJugador.textContent = 0;
    puntosComputadora.textContent = 0;

    btnPedirCarta.disabled = false;
    btnDetener.disabled = false;
  };