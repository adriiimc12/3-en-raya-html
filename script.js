var estado_tablero = [0,0,0,0,0,0,0,0,0]
var jugador = 1

function dibujar() {
    for (i = 0; i<9; i++) {
    if (estado_tablero [i] == 0)
    document.getElementById("celda" + i).style = "background-color: white";
    if (estado_tablero [i] == 1)
    document.getElementById("celda" + i).style = "background-color: red";
    if (estado_tablero [i] == 2)
    document.getElementById("celda" + i).style = "background-color: blue";
    }
}

function clickcelda(celda) {
    if (estado_tablero[celda] == 0){
        if (jugador == 1){
            estado_tablero[celda] = 1;
            jugador = 2;
        } else{
            estado_tablero[celda] = 2;
            jugador = 1;
        }
    } else {
        alert("No puedes pintar una casilla coloreada")
    }
    dibujar();
}
