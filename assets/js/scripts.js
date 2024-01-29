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
// se coloca el titulo en rojo al hacer doble click
$(".ingredientes>H3").dblclick(function () {
  $(".preparacion>H3").css("background-color", "white")
  $(".ingredientes>H3").css("background-color", "red")
});

$(".preparacion>H3").dblclick(function () {
  
  $(".ingredientes>H3").css("background-color", "white")
  $(".preparacion>H3").css("background-color", "red")
});

});
