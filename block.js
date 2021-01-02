class Block {
    constructor(x, y){
        this.body = Bodies.rectangle(x, y, 25, 35);
        this.width = 25;
        this.height = 35;
        this.visiblity = 255;
        World.add(world, this.body);
    }

    score(){
        if(this.visiblity<0 && this.visiblity>-105){
            score++;
        }
    }

    display(){
        if(this.body.speed<3.5){
        rectMode(CENTER);
        var Pos = this.body.position;
        rect(Pos.x, Pos.y, this.width, this.height);
        }
        else if(this.body.speed>3.5){
        push();
        World.remove(world, this.body);
        this.visiblity = this.visiblity - 5;
        pop();
        }
    }
}