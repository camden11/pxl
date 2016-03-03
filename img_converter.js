// Class for RGB color. Converts to css friendly rbg() string
function Rgb(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
  
  this.toString = function() {
    return "rgb(" + this.r.toString(); + ", " + this.g.toString() + ", " + 
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
    canvas.getContext('2d').drawImage($target[0], 0, 0, $target.width, $target.height);
    console.log(canvas.getContext('2d').getImageData(1,1,1,1).data[0]);
  })
}

function process() {
  upload();
  convert();
}