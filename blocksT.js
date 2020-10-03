class BlocksT{
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        var options = {
          isStatic:false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("BLOCKS.png");
        World.add(world, this.body);
        this.Visiblity = 255;

      }
      display(){
        var pos = this.body.position;
        if(this.body.speed < 5){
          push();
          fill("yellow");
          rectMode(CENTER);
          rect(pos.x, pos.y, this.width, this.height);
            pop();
         }
         else{
          
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
           
           pop();
         }
         
       
      }

      score(){
        if(this.Visiblity<0 && this.Visiblity>-1005){
          score++;
        }
      }
     
     
     
}