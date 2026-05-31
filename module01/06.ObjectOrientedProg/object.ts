const car = {
    brand: "BYD",
    model: "BYD Denza D9",
    price: 950000000,

    drive() {
        console.log(`The ${this.brand} ${this.model} is driving`);
    },
};

const car2: ICar = {
    brand: "Toyota",
    model: "Camry",
    price: 500000000,
    drive() {
        console.log(`The ${this.brand} ${this.model} is drifting.`);
    },
};

interface ICar {
    brand: string;
    model: string;
    price: number;
    drive(): void;
}

interface IParkingLot {
    cars: ICar[];
    park(...cars: ICar[]): void;
}

const park1: IParkingLot = {
    cars: [],
    park(...cars: ICar[]) {
        this.cars = [...this.cars, ...cars]
    }
}

console.log(car.drive());
console.log(car2.drive());

park1.park(car, car2);
console.log(park1.cars);

//Pattern backend

interface IController {
    findAll(): any[];
    findById(id: string): any;
    create(data: any): void;
    update(id: string, data: any): void;
    delete(id: string): void;
}

interface IUser {
    id: number;
    email: string;
    fullName: string;
}

interface IUserWithPassword extends IUser {
    password: string;
}

const user: IUserWithPassword = {
    id: 1,
    fullName: 
}

class UserController implements IController {
    findAll(): any[] {
        //Logic to find all user
        return [];
    }

    findById(id: string) {
        //Logic to find a user by id
        return `User with id ${id}`;
    }

    create(data: IUser): void {
        //Logic to create a new user
        console.log(`Creating user: ${data}`);
    }

    update(id: string, data: IUser): void {
        //Logic to update a user by id
        console.log(`Updating user with id ${id}: ${data}`);
    }

    delete(id: string): void {
        console.log(`Deleting user with id ${id}`);
    }
}