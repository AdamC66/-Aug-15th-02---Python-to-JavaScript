let cars = [];

function getNewCar(){
    let newCar={
        city:'Toronto',
        passengers:0,
        gas:100
    };
    return newCar;
}

function addCar(cars, newCar){
    cars.push(newCar);
    return `adding new car to fleet, fleet size is now ${cars.length}`;
}

function pickUpPassengers(car){
    car.passengers += 1;
    car.gar -= 10;
    return `Picked up passenger. Car now has ${car.passengers} passengers`;
}

function getDestination(car){
    if (car.city === 'Toronto'){
        return 'Mississauga';
    }else if (car.city ==='Mississauga'){
        return 'London';
    }else if (car.city === 'London'){
        return 'Toronto';
    }
}

function fillUpGas(car){
    let oldGas = car.gas;
    car.gas = 100;
    return(`Filled up gas from ${oldGas} to ${car.gas}`)
}

function getGasDisplay(gasAmount){
    return(`{gas_amount}`);
}

function drive(car, cityDistance){
    if(car.gas < cityDistance){
        return(fillUpGas(car));
    }
    car.city = getDestination(car);
    car.gas -= cityDistance;
    return(`Drove to ${car.city}. Remaining gas: ${car.gas}`);
}

function dropOffPassengers(car){
    let previousPassengers = car.passengers;
    car.passengers = 0;
    return(`Dropped off ${previousPassengers} passengers`);
}

function act(car){
    let distanceBetweenCities = 50;
    if (car.gas < 20){
        return(fillUpGas(car));
    }else if (car.passengers < 3){
        return pickUpPassengers(car);
    }else{
        if (car.gas < distanceBetweenCities){
            return(fillUpGas(car));
        }
        let drove_to = drive(car, distanceBetweenCities);
        let passengers_dropped = dropOffPassengers(car);
        }
}

function commandeFleet(cars){
    let i = 1;
    cars.forEach(car => {
        let action = act(car);
        console.log(`Car ${i}: ${action}`);
        i++;
    });
}

function addOneCarPerDay(cars, numDays){
    for (day=0; day<numDays; day++){
        let newCar = getNewCar();
        console.log(addCar(cars, newCar));
        commandeFleet(cars)
    }
}

addOneCarPerDay(cars, 10)