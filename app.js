import readlineSync from "readline-sync";
import { generarNumeroAleatorio, verificarAdivinanza } from "./adivinanza.js";

const obtenerNumeroUsuario = () => {
    // El método debe ser questionInt para no causar problemas al momento de comparar los números
    return readlineSync.questionInt("Ingresa un número: ");
    // En caso de ser question se deberían cambiar todos los comparadores de (===) a (==) y (!==) a (!=)
};

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;
    console.log("¡Bienvenido a Adivina el número secreto!");
    console.log("Intenta adivinar el número del 1 al 100.\n");
    while (numeroAdivinado !== numeroSecreto) {
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
    }
};

juegoAdivinanza();
