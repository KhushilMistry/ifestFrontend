$(document).ready(function () {
  $(".button-class").click(function () {


    var effect = 'slide';
    var options = { direction: 'right' };
    var duration = 500;

    $('.top-navbar-links').toggle(effect, options, duration);

    $("#top-navbar-content").toggle();
    $("#top-navbar-cross").toggle();
  });
});

