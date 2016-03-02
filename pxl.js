// Example array of pxls
var colors = [
  "#173B51",
  "#0D1F2B",
  "#1B435A",
  "#185574",
  "#326E92",
  "#194F71",
  "#0C3D5B",
  "#0E4669",
  "#1A3E56",
  "#0D1F2B",
  "#204A62",
  "#206285",
  "#307094",
  "#2F6589",
  "#0D3858",
  "#1D5F81",
  "#193D55",
  "#10222E",
  "#234B62",
  "#226288",
  "#35769C",
  "#276B90",
  "#0C3B59",
  "#387C9F",
  "#183E55",
  "#1C2E3A",
  "#21475E",
  "#24658D",
  "#498AB0",
  "#4B8DAD",
  "#226486",
  "#4F93B8" 
];

function makePxl(color) {
  $('.pxl-container').append("<div class='pxl' style='background-color: " + color + ";'></div>");
}

function pxlate(colors) {
  for (var i = 0; i < colors.length; i++) {
    makePxl(colors[i]);
  }
}

$(document).ready(function() {
  pxlate(colors);
})

