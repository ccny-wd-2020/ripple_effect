//showing how to convert vanilla js to jquery from docs
function createRipple(event) {
  var button = $(this);

  var circle = $("<span>");
  var diameter = Math.max(button.innerWidth(), button.innerHeight());
  var radius = diameter / 2;

  circle.css("height", `${diameter}px`);
  circle.css("width", circle.css("height"));
  circle.css("left", `${event.clientX - button.offset().left - radius}px`);
  circle.css("top", `${event.clientY - button.offset().top - radius}px`);
  circle.addClass("ripple-one");

  var ripple = $(".ripple-one");

  if (ripple) {
    ripple.remove();
  }

  button.append(circle);
}

const buttons = $("#button-one");

$("#button-one").on("click", createRipple);
