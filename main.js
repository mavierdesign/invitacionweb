
/*Confirmacion asistencia*/
document.getElementById('rsvp-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('¡Gracias por confirmar tu asistencia! ❤️');
  this.reset(); // Limpia el formulario
});


const asistenciaSelect = document.getElementById('asistencia');
const acompanantesInput = document.getElementById('acompanantes');

asistenciaSelect.addEventListener('change', () => {
if (asistenciaSelect.value === 'No') {
  acompanantesInput.disabled = true;
  acompanantesInput.value = ''; // Limpia el campo
} else {
  acompanantesInput.disabled = false;
}
});



// Cuenta regresiva
const countdownElement = document.getElementById('countdown');
const targetDate = new Date('2025-09-20T18:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    countdownElement.innerHTML = '¡Ya llegó el gran día!';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `Faltan ${days} días, ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);


/*animaciones*/

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
 


window.addEventListener('load', () => {
setTimeout(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, 10);
});
