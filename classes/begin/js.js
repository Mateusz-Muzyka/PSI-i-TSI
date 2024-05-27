const text = document.getElementById("text");
const text2 = document.getElementById("text2");
class Vehicles {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    usage(x){
        return x - this.year   
    }
}

class type extends Vehicles{
    constructor(name,year,type){
        super(name,year);
        this.type = type;
    }
    show(){
        return "im using it around " + this.usage(2024) + "it is a " + this.type 
    }
}
const date = new Date();
let year = date.getFullYear();

const Car = new type("Vechicle",2002,"Car")
const Plane = new Vehicles("Airplane",2020)

text.innerHTML = Car.name + " " + Car.year + " " + Car.show() ;
text2.innerHTML = Car.usage(year)