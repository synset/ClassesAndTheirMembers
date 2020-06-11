class Circle {
    constructor(radius) {
        this.radius = radius;
        this.area = this.area();
    }  

    get diameter() {
        return this.radius * 2;
    }

    set diameter(diam) {
        this.diam = Number(diam);
        this.radius = this.diam / 2;
    }
    
    area() {
        return (this.radius * this.radius * Math.PI);
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`); //expected output: 2
console.log(`Diameter: ${c.diameter}`); //expected output: 4
console.log(`Area: ${c.area}`); //expected output: 12.566370614359172

c.diameter = 1.6;
console.log(`Radius: ${c.radius}`); //expected output: 2
console.log(`Diameter: ${c.diameter}`); //expected output: 4
console.log(`Area: ${c.area}`); //expected output: 