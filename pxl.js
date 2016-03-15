// A grid of pxls
function PxlGrid(colorArrays, rowLength) {
  
  // Converts color arrays to color objects
  this.convertColorArrays = function(colorArrays) {
    colorObjects = [];
    for (var i = 0; i < colorArrays.length; i++) {
      colorObjects.push(new Rgb(colorArrays[i][0],
                                colorArrays[i][1],
                                colorArrays[i][2]));
    }
    return colorObjects;
  }
  
  this.colors = this.convertColorArrays(colorArrays);
  this.rowLength = rowLength;
  
  // Add a pxl to the document
  this.makePxl = function(color) {
    $('.pxl-container').append("<div class='pxl' style='background-color: " + color.toString() + ";'></div>");
  }
  
  // Converts colors to pxls in the document
  this.pxlate = function() {
    for (var i = 0; i < this.colors.length; i++) {
      this.makePxl(this.colors[i]);
    }
  }
  
}


// An rgb color
function Rgb(red, green, blue) {
  this.red = red;
  this.green = green;
  this.blue = blue;
  
  this.toString = function() {
    return "rgb(" + this.red.toString() + ", " + this.green.toString() + ", " + 
      this.blue.toString() + ")";
  }
}


