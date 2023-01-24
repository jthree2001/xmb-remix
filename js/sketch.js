function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, -150);
    canvas.style('z-index', '-1');
    
    colorMode(HSB, 360);
    angleMode(DEGREES);
    angle = 0;
    if(width > height) {
      radius = height-60;
    } else {
      radius = width-60;
    }
    
    frameRate(120);
    cycleColors = true;
    strokeWeight(0);
  }
  
  function draw() {
    fill(0, 0, 0, 18);
    rect(0, 0, width, height);
    if(angle<=0)
      background(30);
    stroke(0);
    c = angle/2%360;
    if(cycleColors) {
      c0 = color(c, 300, 360);
      c1 = color((c+180)%360, 300, 360);
    } else {
      c0 = 0;
      c1 = 360;
    }
      
      
    //background(30);
    translate(width/2, height/2-10);
    
    applyMatrix(1, 0, 0, 1, 0, 0);
    
    rotate(angle);
    translate(radius/4, 0);
    rotate(-2*angle);
    translate(radius/8, 0);
    rotate(3*angle);
    translate(radius/16, 0);
    rotate(-4*angle);  
    translate(radius/32, 0);
    rotate(-5*angle);  
    translate(radius/64, 0);
    
    fill(c0);
    ellipse(0, 0, radius/64);
    translate(-radius/32, 0);
    fill(c1);
    //ellipse(0, 0, radius/62);
    
    translate(radius/64, 0); 
    rotate(5*angle);
    translate(-radius/16, 0);
    rotate(-5*angle);
    translate(radius/64, 0);
    
    fill(c0);
    //ellipse(0, 0, radius/62);
    translate(-radius/32, 0);
    fill(c1);
    ellipse(0, 0, radius/62);
    
    translate(radius/64, 0);
    rotate(5*angle);
    translate(radius/32, 0);
    rotate(4*angle);
    translate(-radius/8, 0);
    rotate(-4*angle); 
    translate(radius/32, 0);
    rotate(-5*angle);  
    translate(radius/64, 0);
    
    fill(c0);
    ellipse(0, 0, radius/62);
    translate(-radius/32, 0);
    fill(c1);
    //ellipse(0, 0, radius/62);
    
    translate(radius/64, 0);
    rotate(5*angle);
    translate(-radius/16, 0);
    rotate(-5*angle);  
    translate(radius/64, 0);
    
    fill(c0);
    //ellipse(0, 0, radius/62);
    translate(-radius/32, 0);
    fill(c1);
    ellipse(0, 0, radius/62);
    
    translate(radius/64, 0);
    rotate(5*angle);
    translate(radius/32, 0);
    rotate(4*angle);
    translate(radius/16, 0);
    rotate(-3*angle);
    translate(-radius/4, 0);
    rotate(3*angle);  
    translate(radius/16, 0);
    rotate(-4*angle);
    translate(radius/32, 0);
    rotate(-5*angle);
    translate(radius/64, 0);
    
    fill(c0);
    ellipse(0, 0, radius/62);
    translate(-radius/32, 0);
    fill(c1);
    //ellipse(0, 0, radius/62);
    
    translate(radius/64, 0);
    rotate(5*angle);
    translate(-radius/16, 0);
    rotate(-5*angle);
    translate(radius/64, 0);
    
    fill(c0);
    //ellipse(0, 0, radius/62);
    translate(-radius/32, 0);
    fill(c1);
    ellipse(0, 0, radius/62);
    
    translate(radius/64, 0);
    rotate(5*angle);
    translate(radius/32, 0);
    rotate(4*angle);
    translate(-radius/8, 0);
    rotate(-4*angle);
    translate(radius/32, 0);
    rotate(-5*angle);
    translate(radius/64, 0);
    
    fill(c0);
    ellipse(0, 0, radius/62);
    translate(-radius/32, 0);
    fill(c1);
    //ellipse(0, 0, radius/62);
    
    translate(radius/64, 0);
    rotate(5*angle);
    translate(-radius/16, 0);
    rotate(-5*angle);
    translate(radius/64, 0);
    
    fill(c0);
    //ellipse(0, 0, radius/62);
    translate(-radius/32, 0);
    fill(c1);
    ellipse(0, 0, radius/62);
    
    translate(radius/64, 0);
    rotate(5*angle);
    translate(radius/32, 0);
    rotate(4*angle);
    translate(radius/16, 0);
    rotate(-3*angle);
    translate(radius/8, 0);
    rotate(2*angle);
    translate(-radius/2, 0);
    rotate(-2*angle); 
    translate(radius/8, 0);
    rotate(3*angle);
    translate(radius/16, 0);
    rotate(-4*angle);
    translate(radius/32, 0);
    rotate(-5*angle);
    translate(radius/64, 0);
    
    fill(c0);
    ellipse(0, 0, radius/62);
    translate(-radius/32, 0);
    fill(c1);
    //ellipse(0, 0, radius/62);
    
    translate(radius/64, 0);
    rotate(5*angle);
    translate(-radius/16, 0);
    rotate(-5*angle);
    translate(radius/64, 0);
    
    fill(c0);
    //ellipse(0, 0, radius/62);
    translate(-radius/32, 0);
    fill(c1);
    ellipse(0, 0, radius/62);
    
    translate(radius/64, 0);
    rotate(5*angle);
    translate(radius/32, 0);
    rotate(4*angle);
    translate(-radius/8, 0);
    rotate(-4*angle);
    translate(radius/32, 0);
    rotate(-5*angle);
    translate(radius/64, 0);
    
    fill(c0);
    ellipse(0, 0, radius/62);
    translate(-radius/32, 0);
    fill(c1);
    //ellipse(0, 0, radius/62);
    
    translate(radius/64, 0);
    rotate(5*angle);
    translate(-radius/16, 0);
    rotate(-5*angle);
    translate(radius/64, 0);
    
    fill(c0);
    //ellipse(0, 0, radius/62);
    translate(-radius/32, 0);
    fill(c1);
    ellipse(0, 0, radius/62);
    
    translate(radius/64, 0);
    rotate(5*angle);
    translate(radius/32, 0);
    rotate(4*angle);
    translate(radius/16, 0);
    rotate(-3*angle);
    translate(-radius/4, 0);
    rotate(3*angle);
    translate(radius/16, 0); 
    rotate(-4*angle);
    translate(radius/32, 0);
    rotate(-5*angle);
    translate(radius/64, 0);
    
    fill(c0);
    ellipse(0, 0, radius/62);
    translate(-radius/32, 0);
    fill(c1);
    //ellipse(0, 0, radius/62);
    
    translate(radius/64, 0);
    rotate(5*angle);
    translate(-radius/16, 0);
    rotate(-5*angle);
    translate(radius/64, 0);
    
    fill(c0);
    //ellipse(0, 0, radius/62);
    translate(-radius/32, 0);
    fill(c1);
    ellipse(0, 0, radius/62);
    
    translate(radius/64, 0);
    rotate(5*angle);  
    translate(radius/32, 0);
    rotate(4*angle);
    translate(-radius/8, 0);
    rotate(-4*angle);
    translate(radius/32, 0);
    rotate(-5*angle);
    translate(radius/64, 0);
    
    fill(c0);
    ellipse(0, 0, radius/62);
    translate(-radius/32, 0);
    fill(c1);
    //ellipse(0, 0, radius/62);
    
    translate(radius/64, 0);
    rotate(5*angle);
    translate(-radius/16, 0);
    rotate(-5*angle);
    translate(radius/64, 0);
    
    fill(c0);
    //ellipse(0, 0, radius/62);
    translate(-radius/32, 0);
    fill(c1);
    ellipse(0, 0, radius/62);
    
    translate(radius/64, 0);
    rotate(5*angle);
    translate(radius/32, 0);
    rotate(4*angle);
    translate(radius/16, 0);
    rotate(-3*angle);
    translate(radius/8, 0);
    rotate(2*angle);
    translate(radius/2, 0);
    
    angle+=.20;
  }
  
  function myCheckedEvent() {
    cycleColors = !cycleColors;
  }