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


class DriftCar extends Car {
    drift(){
        console.log('i just went sideways tee hee')
        return this
    }
    counterSteer() {
        console.log('im sliding this hoe ya digg')
        return this
    }
    donut(){
        console.log('i thinkk im going to be sick')
        return this
    }
    burnOut(){
        console.log('my insurance will pay for this right?')
    }
}



const carOne = new Car('red', 'enzo', 'ferrari')
const carTwo = new Car('green', 'murcielago', 'lamborghini')
const carThree = new Car('pink', '911gt', 'porsche')

const driftOne = new DriftCar('black', '350z', 'nissan')


console.log(carTwo)
console.log(driftOne)


carOne.carStart().accelerate().carGoFaster()

carTwo.carStart().carGoFaster()

driftOne.carStart().carGoFaster().drift().counterSteer()