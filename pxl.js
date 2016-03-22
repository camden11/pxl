// A grid of pxls
function PxlGrid(colorArrays, rowLength) {
  
  // Converts color arrays to color objects
  this.convertColorArrays = function(colorArrays) {
    var colorObjects = [];
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
  this.makePxl = function(color, index) {
    $('.pxl-container').append("<div class='pxl' data-pxlid='" + index.toString() + "' style='background-color: " + color.color(1) + ";'></div>");
  }
  
  // Converts colors to pxls in the document
  this.pxlate = function() {
    for (var i = 0; i < this.colors.length; i++) {
      this.makePxl(this.colors[i], i);
    }
  }
}


// An rgb color
function Rgb(red, green, blue) {
  this.red = red;
  this.green = green;
  this.blue = blue;
  
  this.toString = function(r, g, b) {
    return "rgb(" + r.toString() + ", " + g.toString() + ", " + 
      b.toString() + ")";
  }
  
  this.color = function(level) {
    var factor = 1 / level;
    var red = Math.floor(factor * this.red);
    var green = Math.floor(factor * this.green);
    var blue = Math.floor(factor * this.blue);
    return this.toString(red, green, blue);
  }
}


