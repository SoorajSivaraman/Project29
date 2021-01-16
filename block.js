class Block {
  constructor(x, y, width, height, colour) {
      var options = {
        'isStatic': true,
          'restitution':0,
          'friction':1
}
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.colour = colour;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
     }
      display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
      strokeWeight(2);
      stroke(0);
      fill(this.colour);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
}