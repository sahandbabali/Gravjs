// https://www.youtube.com/watch?v=urR596FsU68&list=PLRqwX-V7Uu6bLh3T_4wtrmVHOrOEM1ig_

var rotationn;

window.addEventListener("deviceorientation", handleOrientation, true);


 function handleOrientation(event) {
      var absolute = event.absolute;
      var alpha    = event.alpha;
      var beta     = event.beta;
      var gamma    = event.gamma;



      var xg = map(beta, -180, 180, -1, 1)
      var yg = map(gamma, -90, 90, -1, 1)


      engine.world.gravity.x =  yg;
      engine.world.gravity.y = xg;

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
 // document.getElementById("grav").addEventListener("click", gravvv);
  createCanvas(400, 660);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = [
      Bodies.rectangle(200, 0, 400, 10, { isStatic: true }),
       Bodies.rectangle(200, 660, 400, 10, { isStatic: true }),
      Bodies.rectangle(0, 350, 10, 660, { isStatic: true }),
      Bodies.rectangle(400, 350, 10, 660, { isStatic: true }),
];
  World.add(world, ground);
  //console.log(boxA);
}

function mouseDragged() {
  boxes.push(new Box(mouseX, mouseY, random(30, 50), random(40, 50)));
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
  background("#C0C0C0");
  stroke("#FF6347");
  noFill();
  strokeWeight(10);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }




}
