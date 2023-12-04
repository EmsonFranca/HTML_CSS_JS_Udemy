function menuFn (x) {
  x.classList.toggle("change");
}
// quando o documento tiver pronto aparecerar o menu
$(document).ready(function() {
  $('.burguer-container').on('click', function () {
    $(".main-navigation").toggle('slow');
  })
});