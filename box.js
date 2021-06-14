class box{
    constructor(x,y,width,height){
    this.box = Matter.Bodies.rectangle(x,y,width,height)
    Matter.World.add(world,this.box);
    this.width = width;
    this.height = height;
    }
    display(){
        fill("red");
        rectMode(CENTER);
        rect(this.box.position.x,this.box.position.y,this.width,this.height);
    }
}

