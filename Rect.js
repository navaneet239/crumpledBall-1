class Rect{

    constructor(x, y, width, height){

        var options={

            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2

        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
        rect(this.body, this.width, this.height);
    }

}


