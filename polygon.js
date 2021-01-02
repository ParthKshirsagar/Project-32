class polygon {
    constructor(x, y){
        this.body = Bodies.circle(x, y, 20.5);
        this.radius = 20.5;
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
        }
        display(){
            imageMode(CENTER);
            image(this.image, this.body.position.x, this.body.position.y, 40,40);
        }
    
}