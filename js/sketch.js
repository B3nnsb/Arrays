let circleArr = [];

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");

    background(220);
    for(i=0; i<25; i++){
       var circleObj = {
             x: random(width),
             y: random(height),
             r: 30

       } ; circleArr.push(circleObj)
       
       
      
       
    }
   for(var j =0; j< circleArr. length; j++){

         ellipse(circleArr[j].x, circleArr[j].y, circleArr[j].r)
       }
}

function draw() {
    

   

}



