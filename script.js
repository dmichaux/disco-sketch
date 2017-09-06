var gridRow = 0;
var gridCol = 0;
var color = 'black';
var disco = false;

$(document).ready(function () {
  newGrid();
  hover();
  defineColor();
  randomColor();
  rainbowInit();
  discoInit();
});

function newGrid() {

  // Get user input
  $('.new').click(function() {
    gridRow = prompt("Let's build a grid. How many rows do you want?");
      if (gridRow === null) {
        alert("OK. Let's go back to the beginning.");
      } else if (isNaN(gridRow)) {
        gridRow = prompt("Sorry, that wasn't a valid number. How many rows do you want?");
      } else {
        gridCol = prompt("How many columns are in your grid?");
          if (gridCol === null) {
            alert("OK. Let's go back to the beginning.");
          } else if (isNaN(gridCol)) {
            gridCol = prompt("Sorry, that wasn't a valid number. How many columns do you want?");
          } else {
            var accept = confirm("Great! You want a " +gridRow+ " x " +gridCol+ " grid.");
              if (accept === false) {
                alert("OK. Let's go back to the beginning.");
              } else {

                // Empty container, draw grid
                $('.grid-container').empty();
                for (var i = 1; i <= gridRow; i++) {
                  $('.grid-container').append('<div class="grid-row"><div>');
                  for (var j = 1; j <= gridCol; j++) {
                    $('.grid-row:last-child').append('<div class="box"><div>');
                  }
                }
                discoStop();
                hover();
              }
          }
      }
  });
}

function hover() {
  $(document).on('mouseenter', '.box', function() {
    $(this).css('background-color', color);
  });
}

// Choose color function
function defineColor() {
  $('.color').on('change', function() {
    color = $('.color').val();
  });
}

// Random static color function
function randomColor() {
  $('.random-button').click(function() {
    color = genRandomHexColor();
    $('.color').val(color);
  });
}

function rainbowInit() {
  $('.rainbow-button').on('click', function() {
    $('.box').on('mouseenter', function() {
      color = genRandomHexColor();
      $('.color').val(color);
      $(this).css('background-color', color);
    });
  });
}

// Disco functions
function discoInit() {
  $('.disco-button').click(function() {
    if (disco === false) {
      discoStart();
    } else {
      discoStop();
    }
  });
}

function discoStart() {
  disco = setInterval(function() {
    discoLights();
    discoLights();
  }, 100);
}

function discoStop() {
  clearInterval(disco);
  disco = false;
}

function discoLights() {
  $('.grid-row:nth-child(' +genRandomRow()+ ') .box',)
    .css('background-color', genRandomHexColor());
}

function genRandomRow() {
  return Math.floor(Math.random() * gridRow + 1);
}

function genRandomHexColor() {
  return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);
  });
}
