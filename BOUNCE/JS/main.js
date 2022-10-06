const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');



const sys = {
  fps: 1,
  rad: 20
}

let pos = {
x: 40,
y: 40,
velx: Math.random()*2,
vely: Math.random()*2,
}
function bullet() {
  ctx.save();
  ctx.beginPath();

  ctx.translate(pos.x, pos.y);
  ctx.fillStyle = "white"
  ctx.arc(0, 0, sys.rad, 0, Math.PI*2);
  ctx.fill();
  
  ctx.closePath();
  ctx.restore();
  pos.x += pos.velx;
  pos.y += pos.vely;
}
function bounce() {
  if(pos.x >= canvas.width - sys.rad) {
    pos.velx *= -1
  }else if(pos.x <= sys.rad) {
    pos.velx *= -1
  }

  if(pos.y >= canvas.height - sys.rad) {
    pos.vely *= -1
  }else if(pos.y <= sys.rad) {
    pos.vely *= -1
  }

}

 function colission() {
    if (pos.y + sys.rad >= canvas.height - 30 && pos.x > playerSet.x - playerW*0.5 && pos.x < playerSet.x + playerW*0.5) {
      pos.vely *= -1;
    } 
 }

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player();
  bullet();
  bounce();
  colission();
}


let playerSet = {
  x: canvas.width*0.5,
  y: canvas.height - 30,
}
const playerW = 80;
const playerH = 20;

function player() {
  ctx.save();
  ctx.translate(playerSet.x - playerW*0.5, playerSet.y);
  ctx.fillStyle = "gold"
  ctx.fillRect(0,0,playerW,playerH);
  ctx.stroke();
  ctx.restore();

  if(rightMov === true && playerSet.x <= canvas.width - playerW*0.5) {
    playerSet.x += 2.5;
  } else if (leftMov === true && playerSet.x >= playerW*0.5) {
    playerSet.x -= 2.5;
  }
}

let rightMov = false;
let leftMov = false;

document.addEventListener("keydown", pressed, false);
document.addEventListener("keyup", unpressed, false);

function pressed(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
     rightMov = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftMov = true;
  }
}

function unpressed(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightMov = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftMov = false;
  }
}

let interval = setInterval(draw, sys.fps);

function stop() {
  interval = clearInterval(interval)
}
function start() {
  interval = setInterval(draw, sys.fps)
}