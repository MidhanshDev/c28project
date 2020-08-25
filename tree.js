class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.bottomBody = Bodies.rectangle(x,y,450,10,options);
      this.leftBody = Bodies.rectangle(0,y-300,10,600,options);
      this.rightBody = Bodies.rectangle(x+225,y-300,10,600,options);
      this.image = loadImage("tree.png")
      this.width = width;
      this.height = height;
      World.add(world, this.bottomBody);
      World.add(world, this.leftBody);
      World.add(world, this.rightBody);
    }
    display(){
      var pos =this.bottomBody.position;
      push()
      translate(pos.x,pos.y);
      //rectMode(CENTER);
      imageMode(CENTER);
      image(this.image,0,-300,450,600);
      pop();
      //rect(pos.x, pos.y, this.width, this.height);
    }
  };