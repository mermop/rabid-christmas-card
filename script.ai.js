snake.ai = {};

snake.ai.decide = function() {
  var pieces = $('#snake_snake>.snake_piece');
  var food = $('#snake_food>.snake_piece:first');
  var head = pieces.last();
  var d;
  
  h = {};
  f = {};
  h.x = eval(head.attr('data-x'));
  h.y = eval(head.attr('data-y'));
  f.x = eval(food.attr('data-x'));
  f.y = eval(food.attr('data-y'));
  
  if (Math.abs(h.x-f.x) > Math.abs(h.y-f.y)) {
    if (h.x > f.x) {
      // Go left
      d = 3;
    } else {
      // Go right
      d = 1;
    }
  } else {
    if (h.y < f.y) {
      // Go down
      d = 2;
    } else {
      // Go up
      d = 0;
    }
  }
  
  var r = 1;
  while (!snake.ai.isPossible(h, d) && r++ < 4) {
    d = (d+1)%4;
  }
  
  snake.variables.directionQueue.push(d);
}

snake.ai.isPossible = function(h_o, d) {
  if (Math.abs(snake.variables.direction - d) == 2)
    return false;
  var h = $.extend({}, h_o);
  if (d == 0)
    h.y--;
  else if (d == 1)
    h.x++;
  else if (d == 2)
    h.y++;
  else
    h.x--;
  
  var p = snake.getPiece(h.x, h.y);
  if (p && p.closest('#snake_snake').length > 0)
    return false;
  return true;
}