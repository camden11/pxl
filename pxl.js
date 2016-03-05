function makePxl(color) {
  $('.pxl-container').append("<div class='pxl' style='background-color: " + color + ";'></div>");
}

function pxlate(colors) {
  for (var i = 0; i < colors.length; i++) {
    makePxl(colors[i]);
  }
}

