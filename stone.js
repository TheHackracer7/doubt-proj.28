class Stone
{
    constructor(x,y,width,height)
    {

       var options={
            isStatic:true,
            friction:1,
            density:0.1,
            restitution:0
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image = loadImage("stone.png");

        World.add(world,this.body);
    }

   
   
    display()
    {
        var pos=this.body.position;


        rectMode(CENTER);
        fill("white");
        
        
        image(this.image, pos.x, pos.y, this.width, this.height);
}
}