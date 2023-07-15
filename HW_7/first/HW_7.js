let cararray=[]
class Car {
    constructor(year, model, name, amountofpurchase){
        this.year=year;
        this.model=model;
        this.name=name;
        this.amountofpurchase=amountofpurchase;
    }
    toarray(){
        cararray.push({Year:this.year, Model:this.model, Name:this.name, Amoun:this.amountofpurchase});
        return cararray;
    }
}

let firstCar = new Car(1990, 'Mersedes', 'X5', 11244);
let secondCar = new Car(1989, 'BMW', 'GOLF', 112444);
let thirdCar = new Car(2000, 'Lamborgini', '100x', 1233);
let fourth = new Car(2015, 'Porsche', 'Tycan', 2233);
let fifthCar = new Car(1995, 'Opel', 'EL', 624444);
console.log(firstCar.toarray())
console.log(secondCar.toarray())
console.log(thirdCar.toarray())
console.log(fifthCar.toarray())
console.log(fifthCar.toarray())
//================================



//for  ({Model,Amount} of cararray) =               //не проблема якщо в масиві 1 машина але якщо декілька то виникає проблема як по всім ним пройтись... 









