// A grid of pxls
function PxlGrid(colorArrays, rowLength, minWidth) {
  
  // Converts color arrays to color objects
  this.convertColorArrays = function(colorArrays) {
    var pxls = [];
    for (var i = 0; i < colorArrays.length; i++) {
      pxls.push(new Pxl(colorArrays[i][0],
                                colorArrays[i][1],
                                colorArrays[i][2], i));
    }
    return pxls;
  }
  
  this.pxls = this.convertColorArrays(colorArrays);
  this.rowLength = rowLength;
  this.minWidth = minWidth;
  
  // Sets size of all pxls based on row size
  this.setPxlSize = function() {
    $('.pxl').css({'width': (100/this.rowLength).toString() + '%',
                   'padding-bottom': (100/this.rowLength).toString() + '%'});
  }
  
  
  // Converts colors to pxls in the document
  this.pxlate = function() {
    $('.pxl-container').css('min-width', this.minWidth)
    for (var i = 0; i < this.pxls.length; i++) {
      this.pxls[i].renderOnto($('.pxl-container'));
    }
    this.setPxlSize();
  }
  
  this.removeRow = function() {
    var columnSize = this.pxls.length / this.rowLength
    for (var i = 0; i < (columnSize); i++) {
      console.log(i);
      this.pxls[(columnSize - i) * this.rowLength - 1].remove();
      this.pxls.splice((columnSize - i) * this.rowLength - 1, 1);
    }
    this.rowLength -= 1;
    this.setPxlSize();
  }
  
  this.listen = function() {
    var pxls = this.pxls;
    var rowLength = this.rowLength;
    $('.pxl').hover(
      function() {
        var index = $(this).data('pxlid');
        pxls[index].changeColor(.6);
        pxls[index - 1].changeColor(.75);
        pxls[index - 2].changeColor(.9);
        pxls[index + 1].changeColor(.75);
        pxls[index + 2].changeColor(.9);
        pxls[index - rowLength].changeColor(.75);
        pxls[index - rowLength -1].changeColor(.825);
        pxls[index - rowLength +1].changeColor(.825);
        pxls[index - 2 * rowLength].changeColor(.9);
        pxls[index + rowLength].changeColor(.75);
        pxls[index + rowLength -1].changeColor(.825);
        pxls[index + rowLength +1].changeColor(.825);
        pxls[index + 2 * rowLength].changeColor(.9);
        
        pxls[index - rowLength - 2].changeColor(.95);
        pxls[index - rowLength + 2].changeColor(.95);
        pxls[index + rowLength - 2].changeColor(.95);
        pxls[index + rowLength + 2].changeColor(.95);
        
        pxls[index - 2 * rowLength - 1].changeColor(.95);
        pxls[index - 2 * rowLength + 1].changeColor(.95);
        pxls[index + 2 * rowLength - 1].changeColor(.95);
        pxls[index + 2 * rowLength + 1].changeColor(.95);
        
        pxls[index - 2 * rowLength - 2].changeColor(.97);
        pxls[index - 2 * rowLength + 2].changeColor(.97);
        pxls[index + 2 * rowLength - 2].changeColor(.97);
        pxls[index + 2 * rowLength + 2].changeColor(.97);
      },
      function() {
        var index = $(this).data('pxlid');
        pxls[index].changeColor(1);
        pxls[index].changeColor(1);
        pxls[index - 1].changeColor(1);
        pxls[index - 2].changeColor(1);
        pxls[index + 1].changeColor(1);
        pxls[index + 2].changeColor(1);
        pxls[index - rowLength].changeColor(1);
        pxls[index - rowLength -1].changeColor(1);
        pxls[index - rowLength +1].changeColor(1);
        pxls[index - 2 * rowLength].changeColor(1);
        pxls[index + rowLength].changeColor(1);
        pxls[index + rowLength -1].changeColor(1);
        pxls[index + rowLength +1].changeColor(1);
        pxls[index + 2 * rowLength].changeColor(1);
        
        pxls[index - rowLength - 2].changeColor(1);
        pxls[index - rowLength + 2].changeColor(1);
        pxls[index + rowLength - 2].changeColor(1);
        pxls[index + rowLength + 2].changeColor(1);
        
        pxls[index - 2 * rowLength - 1].changeColor(1);
        pxls[index - 2 * rowLength + 1].changeColor(1);
        pxls[index + 2 * rowLength - 1].changeColor(1);
        pxls[index + 2 * rowLength + 1].changeColor(1);
        
        pxls[index - 2 * rowLength - 2].changeColor(1);
        pxls[index - 2 * rowLength + 2].changeColor(1);
        pxls[index + 2 * rowLength - 2].changeColor(1);
        pxls[index + 2 * rowLength + 2].changeColor(1);
      }
    );
  }
}


// Represents one pxl square
function Pxl(red, green, blue, pxlid) {
  this.red = red;
  this.green = green;
  this.blue = blue;
  this.pxlid =pxlid;
  
  this.toString = function(r, g, b) {
    return "rgb(" + r.toString() + ", " + g.toString() + ", " + 
      b.toString() + ")";
  }
  
  // Changes color by a ratio of the given level
  this.color = function(factor) {
    var red = Math.floor(factor * this.red);
    var green = Math.floor(factor * this.green);
    var blue = Math.floor(factor * this.blue);
    return this.toString(red, green, blue);
  }
  
  this.changeColor = function(level) {
    $("[data-pxlid='" + this.pxlid.toString() +"']").css("background-color", this.color(level));
  }
  
  // Renders this pxl onto the given container
  this.renderOnto = function($container) {
    $container.append("<div class='pxl' data-pxlid='" + this.pxlid.toString() + "' style='background-color: " + this.color(1) + ";'></div>");
  }
  
  this.remove = function() {
    $("[data-pxlid='" + this.pxlid.toString() +"']").css('display', 'none');
  }
  
}


