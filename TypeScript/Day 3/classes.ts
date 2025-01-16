// Defining a class Person with properties name and age, and a method greet.
class Person{
    name:string;
    age:number;

    // Constructor to initialize the properties.
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    // Method to print a greeting message.
    greet():void{
        console.log(`hi ${this.name}`);
    }
}

// Creating instances of the Person class.
const obj1 = new Person("Rohit",20);
const obj2 = new Person("Nitin",11);
console.log(obj1);
console.log(obj2);

// Accessing and printing the name property of obj1.
console.log(obj1.name);
obj1.greet();

// Defining a class Customer with properties name, age, and balance, and a method meet.
class Customer{
    public name:string; // Public property.
    private age:number; // Private property.
    protected balance:number; // Protected property.

    // Constructor to initialize the properties.
    constructor(name:string,age:number,balance:number){
        this.name = name;
        this.age = age;
        this.balance = balance;
    }

    // Method to increase age and return the new age.
    meet():number{
       this.age = this.age+10;
       return this.age;
    }
}

// Creating an instance of the Customer class.
const P1 = new Customer("Deepak",20,420);
console.log(P1.name); // Accessing the public property.

console.log(P1.meet()); // Calling the meet method.

// Defining a class Employee that extends Customer.
class Employee extends Customer {
    salary:number; // Additional property.

    // Constructor to initialize the properties.
    constructor(salary:number,name:string,age:number,balance:number){
        super(name,age,balance); // Calling the constructor of the base class.
        this.salary = salary;
    }

    // Overriding the meet method to print the balance.
    greet():void{
        console.log(this.balance);
    }

    // Overriding the meet method to return a fixed value.
    meet():number{
        console.log("Hello Coder armu");
        return 10;
    }
}

// Creating an instance of the Employee class.
const E1 = new Employee(420,"Rohit", 20,320);
console.log(E1.meet()); // Calling the overridden meet method.
console.log(E1.salary); // Accessing the salary property.

// *Generic function to return the input value without modification.
function value<T>(a:T):T{
    return a;
}

// Testing the generic function with different types.
console.log(value<number>(10));
console.log(value<string>("Rohit"));
console.log(value([10,11,12,13,14]));
console.log(value(true));
console.log(value(["MOhan","Rohan"]))

// Defining an interface Admin with generic types T and U.
interface Admin<T,U> {
    name:string,
    age:number,
    addhar:T,
    salary:U
}

// Creating instances of the Admin interface with different types.
const obj10: Admin<number,number> = {
    name:"Rohit",
    age:20,
    addhar:123,
    salary:23213
}

const obj11: Admin<string,number>={
    name:"Rohit",
    age:20,
    addhar:"32112",
    salary:13
}

