$(function () {
  
  const myCarouselElement = document.querySelector('#carrusel_Ricomida')
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false
  })
  
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  
  // jq procesos aplicados
$("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente...");
});


});