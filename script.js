var gridRow = 0;
var gridCol = 0;
var color = 'blue';
var disco = false;
function genRandomHexColor() {
  return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);
  });
}
function genRandomRow() {
  return Math.floor(Math.random() * gridRow + 1);
}

$(document).ready(function() {
  $('.new').hide();
  $('.start').click(function() {
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
                $('.instructions').remove();
                $('.new').show();
                $('.start').hide();
                for (var i = 1; i <= gridRow; i++) {
                  $('.grid-container').append('<div class="grid-row"><div>');
                  for (var j = 1; j <= gridCol; j++) {
                    $('.grid-row:last-child').append('<div class="box"><div>');
                  }
                }
              }
          }
      }
  });
  $('.new').click(function() {
    gridRow = prompt("Let's build a new grid. How many rows do you want?");
      if (gridRow === null) {
        alert("OK. Do you want to try again?");
      } else if (isNaN(gridRow)) {
        gridRow = prompt("Sorry, that wasn't a valid number. How many rows do you want?");
      } else {
        gridCol = prompt("How many columns are in your grid?");
          if (gridCol === null) {
            alert("OK. Do you want to try again?");
          } else if (isNaN(gridCol)) {
            gridCol = prompt("Sorry, that wasn't a valid number. How many columns do you want?");
          } else {
            var accept = confirm("Great! You want a new " +gridRow+ " x " +gridCol+ " grid.");
              if (accept === false) {
                alert("OK. Do you want to try again?");
              } else {
                $('.grid-container').empty();
                for (var i = 1; i <= gridRow; i++) {
                  $('.grid-container').append('<div class="grid-row"><div>');
                  for (var j = 1; j <= gridCol; j++) {
                    $('.grid-row:last-child').append('<div class="box"><div>');
                  }
                }
              }
          }
      }
  });
  $(document).on('mouseenter', '.box', function() {
    $(this).css('background-color', color);
  });
  $('.color').on('change', function() {
    color = $('.color').val();
  });
  $('.random-button').click(function() {
    color = genRandomHexColor();
    $('.color').val(color);
  });
  $('.disco-button').click(function() {
    if (disco === false) {
      disco = true;
      if (disco) {
        var discoParty1 = setInterval(function() {
        $('.grid-row:nth-child(' +genRandomRow()+ ') .box').css('background-color', genRandomHexColor());
        }, 100);
        var discoParty2 = setInterval(function() {
        $('.grid-row:nth-child(' +genRandomRow()+ ') .box').css('background-color', genRandomHexColor());
        }, 100);
        $('.disco-button').click(function() {
          clearInterval(discoParty1);
          clearInterval(discoParty2);
        });
      }
    } else {
      disco = false;
    }
  });
});