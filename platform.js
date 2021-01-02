class Platform{
    constructor(x, y, width, height){
        var options={
            isStatic : true
        }
        this.body = Matter.Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        var Pos = this.body.position;
        push();
        translate(Pos.x, Pos.y);
        fill("cyan");
        rect(0, 0, this.width, this.height);
        pop();
    }
}