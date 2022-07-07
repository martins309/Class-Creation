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


