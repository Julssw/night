
let nightModeBtn = document.querySelector('.night-mode-btn');
let mode = document.querySelector('body');

nightModeBtn.addEventListener("click", removeFunctionNight);
function removeFunctionNight() {
  if (mode.classList.contains('night')) {
    nightModeBtn.textContent = "Включить дневной режим";
    mode.classList.toggle('night');
  } else {
    mode.classList.remove('night')
    nightModeBtn.textContent = "Включить ночной режим";
    mode.classList.toggle('night');
  }
} 