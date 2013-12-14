/*
 * All co-ordinates are measured relative to the top center, so CSS positioning reflects that
 * i.e. x runs left to right, y runs down the page
 */

var snake = {};
snake.interval;
 
snake.settings = {
  speed: 100,
  pixWidth: 20,
  pixHeight: 20,
  boxWidth: 18,
  boxHeight: 18,
}

snake.variables = {
  direction: null,
  directionQueue: []
}


/* Initialise */
snake.init = function() {
  /* Check if already playing */
  if ($('#snake_snake').length > 0)
    return false;
  
  /* Set default variables */
  snake.variables = {
    direction:2,
    directionQueue: []
  }
  
  /* Create containers */
  $('body').append('<div id="snake_snake"></div><div id="snake_food"></div>');
  $('head').append('<style>.snake_piece{width:'+snake.settings.boxWidth+'px;height:'+snake.settings.boxHeight+'px;}</style>');
  
  /* Create the initial snake */
  for (i = 0; i < 3; i++)
    snake.makePiece(0, i);
  
  /* Place the first piece of food */
  snake.placeFood();
  
  /* Set up movement & interaction */
  snake.play();
}

/* Pause */
snake.pause = function() {
  clearInterval(snake.interval);
  $(document).off('.snake');
}

/* Play */
snake.play = function() {
  snake.interval = setInterval(snake.update, snake.settings.speed);
  $(document).on('keydown.snake', snake.keypress);
}

/* Kill */
snake.destroy = function() {
  $('#snake_snake, #snake_food').remove();
  $(document).off('.snake');
  clearInterval(snake.interval);
  return true;
}

/* Restart */
snake.restart = function() {
  snake.destroy();
  snake.init();
}

/* Restart */
snake.lose = function(cause) {
  console && console.log("You lose: "+cause);
  console && console.log("Size: "+$('#snake_snake>.snake_piece').length);
  snake.restart();
}

/* Create a piece of snake or food */
snake.makePiece = function(x, y) {
  var food = (arguments.length > 2 && arguments[2]);
  var marginLeft = (x - 0.5) * snake.settings.pixWidth;
  var top = y * snake.settings.pixHeight;
  
  var elm = food ? $('#snake_food') : $('#snake_snake');
  
  return $(document.createElement('div')).addClass('snake_piece').css({'top':top, 'margin-left':marginLeft}).attr('data-x', x).attr('data-y', y).appendTo(elm);
}

/* Update the snake's position */
snake.update = function() {
  var pieces = $('#snake_snake>.snake_piece');
  if (pieces.length < 2) {
    /* There is no snake */
    console && console.error('Snake removed');
    clearInterval(snake.interval);
  }
  
  if (snake.settings.ai) {
    snake.ai.decide();
  }
  
  var head = pieces.last();
  var x = eval(head.attr('data-x'));
  var y = eval(head.attr('data-y'));
  
  var d;
  while (typeof d == 'undefined' || (snake.variables.direction - d + 4) % 4 == 2) {
    if (snake.variables.directionQueue.length > 0)
      d = snake.variables.directionQueue.shift();
    else
      d = snake.variables.direction;
  }
  
  if (d == 0)
    y--;
  else if (d == 1)
    x++;
  else if (d == 2)
    y++;
  else if (d == 3)
    x--;
  else {
    console && console.error('Direction can\t be '+d);
    return;
  }
  
  /* Check for death by wall */
  if (Math.abs(x)*snake.settings.pixWidth > $(document).width()/2) {
    // Left & Right Wall
    snake.lose('You hit a wall');
    return;
  }
  if (y < 0 || y*snake.settings.pixHeight > $(document).height()) {
    // Top & Bottom Wall
    snake.lose('You hit a wall');
    return;
  }
  
  var collision = snake.getPiece(x, y);
  /* Test is food is being eaten */
  if (!collision || collision.closest('#snake_food').length == 0) {
    pieces.first().remove();
  } else {
    snake.placeFood();
    collision.remove();
  }
  
  /* Check for death by self-collision */
  if (collision && collision.closest('#snake_snake').length > 0) {
    snake.lose('You hit yourself');
    return;
  }
  
  snake.variables.direction = d;
  snake.makePiece(x, y);
}

/* Create a piece of food */
snake.placeFood = function() {
  var minY = 0;
  var maxY = Math.floor($(document).height()/snake.settings.pixHeight);
  var minX = -Math.floor($(document).width()/2/snake.settings.pixWidth);
  var maxX = -minX;
  
  var x;
  var y;
  
  while(typeof x == 'undefined' || snake.getPiece(x, y)) {
    var y = Math.floor(Math.random()*maxY);
    var x = Math.floor(Math.random()*(maxX-minX))+minX;
  }
  
  snake.makePiece(x, y, true);

  if ($('#snake_snake>.snake_piece').length % 10 == 0) {
    snake.settings.speed *= 1/1.2;
    snake.pause();
    snake.play();
  }
}

/* Return the piece at specific co-ordinates, or false if no piece exists */
snake.getPiece = function(x, y) {
  var piece = $('.snake_piece[data-x='+x+'][data-y='+y+']');
  return (piece.length > 0) ? piece : false;
}

/* Handle keypresses */
snake.keypress = function(e) {
  var k = e.keyCode;
  var d;
  if (k == 38)
    d = 0;
  else if (k == 39)
    d = 1;
  else if (k == 40)
    d = 2;
  else if (k == 37)
    d = 3;
  else
    return;
  
  // Disable AI on arrow key press
  snake.settings.ai = false;
  // Do not allow the same direction to be repeated
  if (snake.variables.directionQueue[snake.variables.directionQueue.length-1] != d)
    snake.variables.directionQueue.push(d);
}