document.addEventListener("DOMContentLoaded", function() {
  var enlaces = document.querySelectorAll('.linkNav');

  enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function(event) {
      event.preventDefault(); // Evita el comportamiento predeterminado de navegación

      // Elimina la clase 'subrayado' y 'shadow' de todos los enlaces
      enlaces.forEach(function(e) {
        e.classList.remove('shadow');
      });

      // Agrega la clase 'subrayado' y 'shadow' al enlace actual
      this.classList.add('negrilla')
      this.classList.add('shadow');
    });
  });
});



// JavaScript en script.js
const inicioSection = document.querySelector('.content-title');
const descripcionSection = document.querySelector('.descripcion');

function isElementVisible(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function updateVisibility() {
  if (isElementVisible(inicioSection)) {
    inicioSection.style.opacity = '1';
    descripcionSection.style.opacity = '0';
  } else {
    inicioSection.style.opacity = '0';
    descripcionSection.style.opacity = '1';
  }
}

window.addEventListener('scroll', updateVisibility);
window.addEventListener('resize', updateVisibility);







