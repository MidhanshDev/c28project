class Mango {
    constructor(x,y,r) {
      var options = {
        isStatic: true,
        restitution :0,
        friction :1
      }
      this.r = r
      this.body = Bodies.circle(x,y,this.r,options);
      this.image = loadImage("mango.png")
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      //rectMode(CENTER);
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      image(this.image,0,0,this.r*2,this.r*2);
      pop();
      //rect(pos.x, pos.y, this.width, this.height);
    }
  };