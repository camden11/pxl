var docPxlsPerLine = 24;

// Class for RGB color. Converts to css friendly rbg() string
function Rgb(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
  
  this.toString = function() {
    return "rgb(" + this.r.toString() + ", " + this.g.toString() + ", " + 
      this.b.toString() + ")";
  }
}

// Adds form image to canvas
function upload() {
  var $target = document.querySelector('#target');
  var photo = document.querySelector('input[type=file]').files[0]
  var reader = new FileReader();
  
  reader.onloadend = function() {
    $target.src = reader.result;
  }
  
  if (photo) {
    reader.readAsDataURL(photo);
  } else {
    $target.src = "";
  }
}

function convert() {
  var canvas = document.createElement('canvas');
  var $target = $('#target');
  
  $target.on('load', function() {
    canvas.width = $target.width();
    canvas.height = $target.height();
    var context = canvas.getContext('2d');
    context.drawImage($target[0], 0, 0, canvas.width, canvas.height);
    var colors = convertImageToColors(context, docPxlsPerLine, canvas.width, canvas.height);
    pxlate(colors);
    addToDocument(colors);
  })
}

function convertImageToColors(context, pxlsPerLine, width, height) {
  var allColors = [];
  var pxlSize = width / pxlsPerLine;
  var iterations = pxlsPerLine * (height / pxlSize);
  for (var i = 0; i < iterations; i++) {
    var imageData = context.getImageData(
      (i * pxlSize) % width, Math.floor((i * pxlSize / width)) * pxlSize, 1, 1
    ).data;
    allColors.push(new Rgb(imageData[0], imageData[1], imageData[2]).toString());
  }
  return allColors;
}

function addToDocument(colors) {
  var i;
  $('p').append('[');
  for (i = 0; i < colors.length -1; i++) {
    $('p').append('"' + colors[i] + '", ');
  }
  $('p').append('"' + colors[i] + '"]');
}

function process() {
  upload();
  convert();
}