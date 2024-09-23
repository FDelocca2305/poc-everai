const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

let player = {
  x: 250,
  y: 250,
  size: 20,
  color: 'blue',
  speed: 5
};

function drawPlayer() {
  context.fillStyle = player.color;
  context.fillRect(player.x, player.y, player.size, player.size);
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}


let keys = {};

window.addEventListener('keydown', function(e) {
  keys[e.key] = true;
});

window.addEventListener('keyup', function(e) {
  keys[e.key] = false;
});

function movePlayer() {
  if (keys['w'] || keys['W']) {
    player.y -= player.speed;
  }
  if (keys['a'] || keys['A']) {
    player.x -= player.speed;
  }
  if (keys['s'] || keys['S']) {
    player.y += player.speed;
  }
  if (keys['d'] || keys['D']) {
    player.x += player.speed;
  }

  if (player.x < 0) player.x = 0;
  if (player.y < 0) player.y = 0;
  if (player.x + player.size > canvas.width) player.x = canvas.width - player.size;
  if (player.y + player.size > canvas.height) player.y = canvas.height - player.size;
}

function gameLoop() {
    clearCanvas();
    movePlayer();
    drawPlayer();
    requestAnimationFrame(gameLoop);
  }
  
  gameLoop();
