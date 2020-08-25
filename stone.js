class Stone {
    constructor(x,y,r) {
      var options = {
          restitution:0,
          friction:1,
          density:1
      }
      this.r = r;
      this.body = Bodies.circle(x,y,this.r/2,options);
      this.image = loadImage("stone.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      //rectMode(CENTER);
      translate(pos.x,pos.y);
      imageMode(CENTER);
      image(this.image,0,0,this.r*2,this.r*2);
      pop();
      //rect(pos.x, pos.y, this.width, this.height);
    }
  };