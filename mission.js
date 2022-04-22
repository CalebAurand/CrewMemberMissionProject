//create a class that creates a vehicle
class Vehicle {
    //type of vehicle being created
    type;
    //name or id of vehicle being created
    name;
    //array of the crew assigned to the vehicle
    crew;

    /**
     * 
     * @param {string} type - type of vehicle being created
     * @param {string} name - name of vehicle being created
     */
    constructor(type, name){
        //type of vehicle set by input parameter
        this.type = type;

        //name of vehicle set by the input parameter
        this.name = name;

        //crew is empty array for each vehicle when created
        this.crew = [];
    }

    //create a method called canGo, that returns true if the vehicle
    //has the minimum staff/crew necessary to pilot the craft
    canGo(){
        //find vehicle type
        let vehc = this.type.toLowerCase();
        //program necessary comparison: crew title for vehicle type
        /**bus has driver, plane has pilot, train has conductor, 
        boat has captain */
        if(vehc === 'bus'){
            console.log(`${this.name} is a bus`);
            if(this.crew.find(el => el.title === 'Driver')){
                return true;
            }else return false; //evaluate if that crew member is in vehicle
        }else if(vehc === 'plane'){
            console.log(`${this.name} is a plane`);
            if(this.crew.find(el => el.title === 'Pilot')){
                return true;
            }else return false;
        }else if(vehc === 'train'){
            console.log(`${this.name} is a train`);
            if(this.crew.find(el => el.title === 'Conductor')){
                return true;
            } else return false;
        }else if(vehc === 'boat'){
            console.log(`${this.name} is a boat`);
            if(this.crew.find(el => el.title === 'Captain')){
                return true;
            } else return false;
        }else{
            console.log("UVO's are not allowed");
            return false;
        };
        //return true if true
        //return false if right title crew is not on board
    };
};


//create a class Crew that creates each new crew member
class Crew {
    //name of the crew member
    name;
    //title of the crew member - driver, captain, pilot, or conductor
    title;
    //holds current vehicle crew member is assigned to
    currentVehicle;

    /**
     * 
     * @param {string} name - name of the crew member
     * @param {*} title - title of the crew member
     */
    constructor(name, title){
        this.currentVehicle = '';
        this.name = name;
        this.title = title;

    }

    assign(vehicle){
        if(this.currentVehicle === ''){
            //assign crew member to the crew array of the vehicle
            vehicle.crew.push(this);
            //change the crew member's current vehicle variable to their newly assigned vehicle name
            this.currentVehicle = vehicle.name;
        };
    }

};





// Example tests that can be run

let v1 = new Vehicle("Plane", "Boeing 737");
let v2 = new Vehicle("Plane", "Birdie");
let v3 = new Vehicle("Boat", "Sinkalot");
let v4 = new Vehicle("Bus", "Big Yellow");
let v5 = new Vehicle("Train", "Thomas");

let e1 = new Crew("John", "Crew");
let e2 = new Crew("James", "Pilot");
let e3 = new Crew("Jack", "Pilot");
let e4 = new Crew("Jessie", "Driver");
let e5 = new Crew("Blake", "Captain"); 
let e6 = new Crew("Tom", "Engineer");

let v6 = new Vehicle("plane", "Boeing 738");
v6.canGo();
e1.assign(v6);
console.log(`v6.canGo() is ${v6.canGo()}`);

v1.canGo() // v1 is a plane and needs a pilot, should return false
console.log("v1 is a "+v1.type);
console.log("v1.canGo() is : " + v1.canGo());
e2.assign(v1); //assign James to v1 "Boeing 737"
console.log(`v1.crew is`);
console.log(v1.crew);
v1.canGo(); // now true because it has a pilot
console.log("v1.canGo() is : " + v1.canGo());

e2.assign(v2); //return false, because James is already assigned to Boeing 737
            // so should not add James to Birdie's crew
v2.canGo();
console.log("v1 is a "+v1.type);
console.log("v2.crew is : "+v2.crew);
console.log("v2.canGo() is : " + v2.canGo());
