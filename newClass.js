class Truck {
    constructor(color, size, wheels){
        this.color = color,
        this.size = size ,
        this.wheels = wheels
    }
    isOn(){
        console.log('this loud ass truck is on')
        return this
    }

    lowerGears(){
        console.log('this truck just shifted into lower gear')
        return this
    }

    higherGears(){
        console.log('this truck just shifted into higher gears')
        return this
    }

    honkHorn(){
        console.log('this truck just blew its loud ass horn')
    }

    isOff(){
        console.log('this loud ass truck is off')
        return this
    }
}


class monsterTruck extends Truck {
    burnOut(){
        console.log('the truck just did a burnout')
        return this
    }
    accelerate(){
        console.log('this sob just took off')
        return this
    }

    airTime(){
        console.log('this bih just flew my guy')
        return this
    }

    breakSlam(){
        console.log('slammed on the breaks and broke my neck')
        return this
    }
}




