class Polygon{
    constructor(x, y) {
        /*this.x = x;
        this.y = y;*/
        var options = {
          isStatic:false,
            'restitution':0.1,
            'friction':1.0,
            'density':0.5
        }
        this.body = Bodies.circle(x,y,50,options);

        Matter.Body.setMass(this.body.mass,this.body.mass*3);
        
        this.image = loadImage("o.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        pop();

        stroke("black");
        strokeWeight(4);

        fill("blue");

      
       imageMode(CENTER);
       image(this.image,pos.x,pos.y,100,100);
       
      }
}