import * as vtp from "./vecterrapen.js"
const window = vtp.penScreen(screen.width, screen.height)
window.bgColor("black")
const turtle = vtp.addPenTo(window)  

function drawRect(){
  let color = vtp.UTILS.randRGB()
  turtle.penColor(color)
  turtle.fillColor(color)

  vtp.addPathsTo(turtle)
  let turtleActions = []

  let w = vtp.UTILS.randInt(5,300)
  let h = vtp.UTILS.randInt(5,300)

  for (let i = 0; i < 2; i++) {
    turtleActions.push("forward", h)
    turtleActions.push("left", 90)
    turtleActions.push("forward", w)
    turtleActions.push("left", 90)
  }
  turtle.pathLinear({
    actions: turtleActions,
    options: "fill"
  })
}

function start(){
  let x = vtp.UTILS.randInt(-250,250)
  let y = vtp.UTILS.randInt(-250,250)
  turtle.penUp()
  turtle.goto(x,y)
  turtle.penDown()
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run(){
  turtle.left(90)
  let rectRange = vtp.UTILS.randInt(5,11)
  for (let i = 0; i < rectRange; i++){
    start()
    drawRect()
    await sleep(500)
  }
}

async function main(){
  while (true){
    await sleep(1000)
    run()
    await sleep(10000)
    turtle.clear()
  }
}

main()
