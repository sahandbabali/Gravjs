// https://www.youtube.com/watch?v=urR596FsU68&list=PLRqwX-V7Uu6bLh3T_4wtrmVHOrOEM1ig_

var rotationn;

window.addEventListener("deviceorientation", handleOrientation, true);


 function handleOrientation(event) {
      var absolute = event.absolute;
      var alpha    = event.alpha;
      var beta     = event.beta;
      var gamma    = event.gamma;


      rotationn = alpha.toFixed(0);

      document.getElementById("text").textContent = `${rotationn}`;


      engine.world.gravity.x = Math.sin(rotationn);
      engine.world.gravity.y = Math.cos(rotationn);

      // Do stuff with the new orientation data
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
var ground = [];
var grav = 1;



function setup() {
      var w2 = windowWidth/2;
var h2 = windowHeight/2;
  document.getElementById("grav").addEventListener("click", gravvv);
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = [
      Bodies.rectangle(w2, 0, width, 10, { isStatic: true }),
      Bodies.rectangle(w2, height, width, 10, { isStatic: true }),
       Bodies.rectangle(0, h2, 10, height, { isStatic: true }),
      
        Bodies.rectangle(width, h2, 10, height, { isStatic: true }),
];
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
