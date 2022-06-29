class Car {
    constructor(color, model, make){
        this.color = color
        this.model = model
        this.make = make
    }
    carStart(){
        console.log("the car is on")
        return this
    }
    accelerate(){
        console.log("the car is moving my dude")
        return this
    }

    carGoFaster() {
        console.log("ahhhhhhhhhHHHAHAHAHAH, slow the FUCK down!!")
        return this
    }
    carStop(){
        console.log("the car is no moving my dude")
        return this
    }
    carOff(){
        console.log("the car is off my dude")
    }
    
}

const carOne = new Car('red', 'enzo', 'ferrari')
const carTwo = new Car('green', 'murcielago', 'lamborghini')
const carThree = new Car('pink', '911gt', 'porsche')


console.log(carTwo)


carOne.carStart().accelerate().carGoFaster()