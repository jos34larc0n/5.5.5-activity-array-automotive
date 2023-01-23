/*import vehicle.js file*/
/*import { Vehicle as VehicleModule } from './vehicle';*/
/*extend class add properties required*/
class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    /* add desired methods*/
    loadPassenger(num) {
        if (this.passenger < this.maximumPassengers) {
            this.passenger += num;
            console.log(`Passengers Onboard (${num})`);
        } else {
            console.log("Car is Full");
        }
    }

    start() {
        if (this.fuel > 0) {
            this.started = true;
            console.log("Lets Go !!");
        } else {
            this.started = false;
            console.log("You are Out of fuel!!");
        }
    }

    Service(mileage) {
        if (mileage >= 30000) {
            this.scheduleService = true;
            console.log("Your car need maintenance");
            this.mileage = 0;  // reset mileage counter
        } else {
            console.log("maintenance is not required")
        }
    }
}

let mercurySedan = new Car('mercury', 'rad_sedan', '2002', 'white', 50000)

mercurySedan.start()
mercurySedan.loadPassenger(5)
mercurySedan.stop()
mercurySedan.Service()

console.log(mercurySedan )
