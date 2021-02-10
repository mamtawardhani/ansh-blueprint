//namespacing
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var en, wo
var gr

function setup(){
  createCanvas(400,400)

  en = Engine.create()
  console.log(en)

  wo=en.world
  console.log(wo)

  gr = new Ground(200, 300,400,20)

}

function draw(){
  background(0)
Engine.update(en)
gr.display()
  
}

//Naming, Creating a new object, Properties, Function 