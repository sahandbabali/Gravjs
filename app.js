// https://www.youtube.com/watch?v=urR596FsU68&list=PLRqwX-V7Uu6bLh3T_4wtrmVHOrOEM1ig_



if(window.DeviceMotionEvent){
      window.addEventListener("devicemotion", motion, false);
    }else{
      console.log("DeviceMotionEvent is not supported");
}

function motion(event){
      document.getElementById("text").textContent = `event.accelerationIncludingGravity.x + event.accelerationIncludingGravity.y`;
    }





function Box(x, y, w, h) {
  this.body = Bodies.rectangle(x, y, w, h);
  // Friction between 0 and 1
  this.body.friction = 10;
  this.body.restitution = 0;
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  };
}

var Engine = Matter.Engine,
  //   Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];
var ground;
var grav = 1;

function setup() {
  document.getElementById("grav").addEventListener("click", gravvv);
  createCanvas(400, 700);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = Bodies.rectangle(400, 300, 400, 10, { isStatic: true });
  World.add(world, ground);
  //console.log(boxA);
}

function mouseDragged() {
  boxes.push(new Box(mouseX, mouseY, random(10, 30), random(10, 30)));
}

function gravvv() {
  if (grav == 1) {
    engine.world.gravity.y = 0;
    grav = 0;
  } else {
    engine.world.gravity.y = 1;
    grav = 1;
  }
}

function draw() {
  console.log(boxes);
  background("#2a9d8f");
  stroke("#e9c46a");
  noFill();
  strokeWeight(3);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }




}