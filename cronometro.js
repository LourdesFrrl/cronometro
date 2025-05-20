let segundos = 0;
let intervalo = null;

function mostrarCronometro() {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const seg = segundos % 60;

  const formato = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(seg).padStart(2, '0')}`;
  pantalla.textContent = formato;
}

function manejarInicio() {
  if (intervalo === null) {
    intervalo = setInterval(() => {
      segundos++; //para que el reloj comience a correr
      mostrarCronometro();
    }, 1000);
  }
}

function manejarPausa() {
  clearInterval(intervalo);
  intervalo = null; //para q el reloj deje de correr
}

function manejarReset() {
  clearInterval(intervalo);
  intervalo = null;
  segundos = 0;
  mostrarCronometro();
}

const btnIniciar = document.getElementById("iniciar");
const btnPausar = document.getElementById("pausar");
const btnReset = document.getElementById("reset");
const pantalla = document.querySelector(".display-3");

btnIniciar.addEventListener("click", manejarInicio);
btnPausar.addEventListener("click", manejarPausa);
btnReset.addEventListener("click", manejarReset);
