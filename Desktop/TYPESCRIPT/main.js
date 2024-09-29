"use strict";
//memory allocation -> code execution principle?
//single-threaded javascript: Each line of code is executed line by line from top to bottom(say),works on a single thread, (one process at a time)
//Google V8 Engine or spider monkey as JS Engines for frontend on-Browser work
//Essential Javascript internals
//Execution context:
//Memory Execution Context:During the context runtime , the parser parses the source code and allocates the memory for the variables and functions. The source code is generated and executed.
//Two types of Execution context are there : Global and local and local can be execution context of functions as well. Function's execution context is known as well. The global execution contextis created when a Javascript script first starts to run and this rpepresents the global scope in javascript.
//A function execution context is created when a function is called.
//Phases of Javascript Execution Context:
//Creation Phase: In this phase , the javascript engine creates the execution context and sets up the script's environmenr.
//Execution Phase: In this phase ,  the javascript engine executes the code in the execution context.This processes any statements or expressions in the scriptand evaluates any function calls 
//Javascript Engine atleast consists of a Call Stack and a Memory Heap which will run on one thread
//The javascript Engines themselves run in several threads(proccesses) that do different things: compressor for example, Garbage Collection,etc.,
//In Ahead of time Compilation all the code is converted to machine language at once, and then written to a file in assembly, so that the computer can run the software, which can even happen after a long time the file was created
//Compiler mainly performs this task: Lexical Analysis , Syntactical Analysis and Parsing 
//In Interpretation  , the interpreter goes through initial pass and then executes the source code line by line. During the runtime, while running line by line, the code is also compiled into machine language
//Types
//Source Code -> Byte Code ->Portable file -> Assembly level Instructions -> Machine Code -> Binary code  ,ther are a number of intermeddiate files and languages between each of the stage 
//In the Just-In Time compilation approach , the entire code is translated into machine language in a single step and is executed immediately afterwards, During the conversion proccess no intermeddiate files are created;instead , the code is directly compiled into machine language in a single step and is executed immediately afterward. During the conversion proccess,no intermediate files are created ; instead the code is directly compiled 
//Generally, for your code to execute, the programming language needs to be transformed into machine code. There are several approaches to how and when this transformation can happen.
//The most common way of transforming the code is by performing ahead-of-time compilation. It works exactly as it sounds: the code is transformed into machine code before the execution of your program during the compilation stage.
//This approach is used by many programming languages such as C++, Java, and others.
//On the other side of the table, we have interpretation: each line of the code will be executed at runtime. This approach is usually taken by dynamically typed languages like JavaScript and Python because it’s impossible to know the exact type before execution.
//Because ahead-of-time compilation can assess all the code together, it can provide better optimization and eventually produce more performant code. Interpretation, on the other side, is simpler to implement, but it’s usually slower than the compiled option.
//To transform the code faster and more effectively for dynamic languages, a new approach was created called Just-in-Time (JIT) compilation. It combines the best from interpretation and compilation.
//While using interpretation as a base method, V8 can detect functions that are used more frequently than others and compile them using type information from previous executions.
//However, there is a chance that the type might change. We need to de-optimize compiled code and fallback to interpretation instead (after that, we can recompile the function after getting new type feedback). 
//Let's explore each part of JIT compilation in more detail.
//V8 uses an interpreter called Ignition. Initially, it takes an abstract syntax tree and generates byte code.
//Byte code instructions also have metadata, such as source line positions for future debugging. Generally, byte code instructions match the JS abstractions.
//Now let's take our example and generate byte code for it manually:
/*function foo() {
  let bar = 1;
  return bar;
}

  LdaSmi #1 // write 1 to accumulator
Star r0   // read to r0 (bar) from accumulator
Ldar r0   // write from r0 (bar) to accumulator
Return    // returns accumulator*/
//ES6 standards
//Case-sensitive
//statement terminates with a semicolon
// not sensitive to whitespaces or ;line breaks directly
// // ->single 
/*  Multiline
   Comments */
//Javascript run from top to bottom
// variable naming: camelCase
//Typescript has types for each of the data type -> kind of static typing
//TYPESCRIPT is kind of Strongly typed Superset of Javascript with type checking
// Reserved keywords are keywords which have special meaning to typescript transpiler and then Javascript Engine
//Program stores data with the help of variables
//Document Object Model as a whole is the structure of any Webpage frontend's User experience or User Interface
//Everything in Javascript happens inside execution context
//This happens in two Phases: Memory creation Phase and code execution Phase
/* Execution context:
   Memory -> all variables functions and functions are allocated in memory
   Code -> Code is executed from functions with in call stack and variables are assigned to data which has to be stored and preproccesing happens*/
//the content of Reference data types are stored in heap and the conyent assigned or stored in variables are present in stack*/
// Call stack maintaines the order of execution of execution context
//TypeScript does not support hoisting directly
//undefined means provided with no value
//not defined means the variable or whatever code element is that , the variable was never defined and used 
//Global exececution context is where you see instance and global variables the entire program space, each function and code block have their own local execution context which are accessed with the help of callStack
//Javascript first allocates memory to all the variables , functions ,objects arrays and then accesses the fucntion or local scopes within  and executes each of them first and gets the return value or output and finally executes the global execution context with all the updated values of variables and return value of functions
//Memory is the variable environment
//shortest Typescript program is Empty index.ts file which when executed after transpiling to index.js will have the Global Execution context and window 
//Call Stack: A stack following the principle of of Last in First out ,maintains the order of the execution contexts and this is known as call stack
//Call Stack keeps track of all the contexts including Global execution context and functions,Associated to Browser or Javascript-runtimes and Javascript Engine needs the call stack to execute the execution contexts in proper order.
/*Call Stack

The call stack is a region of memory that stores information about the active subroutines (functions) of a program. It's a LIFO (Last In, First Out) data structure, meaning that the most recently called function is the first one to be executed when the program returns.

Here's a step-by-step explanation of how the call stack works in TypeScript (and JavaScript):

    Function call: When a function is called, a new stack frame is created and pushed onto the call stack. The stack frame contains the function's local variables, parameters, and return address.
    Execution: The function's code is executed, and the program counter (PC) points to the first instruction of the function.
    Function returns: When the function completes its execution, it returns to the caller. The stack frame is popped from the call stack, and the program counter is updated to point to the instruction after the function call.
    Repeat: Steps 1-3 are repeated until the program returns to the main function.


Example

Consider the following TypeScript code:

function greet(name: string) {
  console.log(`Hello, ${name}!`);
}

function main() {
  greet('John');
  console.log('Main function');
}

main();

function greet(name: string) {
  console.log(`Hello, ${name}!`);
}

function main() {
  greet('John');
  console.log('Main function');
}

main();


Here's how the call stack would look like:

    main() is called, and a new stack frame is created.
    The program counter points to the first instruction of main().
    greet('John') is called, and a new stack frame is created.
    The program counter points to the first instruction of greet().
    greet() completes its execution, and the stack frame is popped.
    The program counter points to the instruction after the greet() call in main().
    main() completes its execution, and the program returns.


JavaScript Virtual Machine (JVM)

The JavaScript Virtual Machine (JVM) is a software component that executes JavaScript code. It's responsible for interpreting and executing the code, managing memory, and providing a runtime environment for the code to run in.

Here's a high-level overview of how the JVM executes code:

    Bytecode generation: The TypeScript compiler (or JavaScript engine) generates bytecode from the source code.
    Bytecode loading: The JVM loads the bytecode into memory.
    Execution: The JVM executes the bytecode, using a combination*/
Object.defineProperty(exports, "__esModule", { value: true });
//Variables: In Javascipt , undeclared variables do  not exist until code assigning them is executed.
//All undeclared variables needs to be declared before being required in code
console.log("TYPESCRIPT");
//Variable declarations are processed before code execution in Javascript
//Primitives
let a = 12;
let b = 15.15;
let str = "TYPESCRIPT";
let ch = 'a';
console.table([a, b, str, ch]);
console.table([a, b, str, ch]);
//Here characters are single elements of string
//Reference Data Types: () {} []
// Arrays
let c = [1, 2, 3, 4, 5, "TYPESCRIPT", { name: "typescriptor" }];
let k = [1, 0, 1];
let d = c;
d = [1, 2, 3, 4];
console.log(c);
console.log(d);
//tuples: fixing the type of array-like data structure elements
let tuple = ["TYPESCRIPT", 20];
console.log(tuple);
//Enumerations: enums
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ABANDONED"] = "abandoned status code 500";
    StatusCodes["NOTFOUND"] = "not found status code 404";
    StatusCodes["OK"] = "OK 200";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.OK);
console.log(UserRoles.GUEST);
//Functions
function abcd() {
    console.log("Hey");
}
//non returnable :void
abcd();
//map
let obj = {
    a: "TYPESCRIPT",
    b: "IS",
    c: "BETTER"
};
console.log(obj);
//Any,Unknown,Void,Null,Undefined,Never
let x;
// x:boolean : Error
x = true;
let y;
y = false;
let z;
z = 0;
z = "Aniket";
if (typeof z == "string")
    z = z.toUpperCase();
console.log(z);
let p;
p = "TYPESCRIPT";
//never
function abcde() {
    while (true) { }
}
abcd();
console.log("heylloo");
//Type inference
let num = "12";
console.log(typeof (num)); //we did not need to infer the type of data stored  to num
//Understanding Type Inference
let num0 = 12; //TYpe annotations
console.log(typeof (num0));
function func(a, b) {
    console.log(a + b);
}
func(0, 1);
//Interfaces and Type Aliases
function func3(a, b) {
    let l = a.toPrecision();
    console.log(l);
    console.log(b.charAt(0));
}
func3(15, "Interfaces");
function getDataOfUser(obj) {
    console.log(obj.name);
    console.log(obj.gender); //undefined
}
//using interfaces to define object shapes
getDataOfUser({
    age: 20, name: "Aniket", email: "abcd@gmail.com", password: "1234",
    nm: "",
    changeName: function () {
        throw new Error("Function not implemented.");
    }
});
function f3(obj5) {
    console.log(obj5);
}
f3({ name: "Aniket Datta", email: "abcdefghij@gmail.com", password: "1234567890", admin: true });
function f4(obj) {
    console.log(obj.name);
    console.log(obj.email);
}
f4({ name: "Aniket", email: "xyz@rediffmail.com" });
let n1;
let n2;
n1 = 5;
n2 = "TYPESCRIPT";
function funcuser(a) {
    a.getDetails;
}
// types cannot be merged
// type num=number;
// type num=null;
//WINDOW IS A GLOBAL ONJECT
// console.log(this==window);//true
//At the global level ,this == windows
//Window  acts like a global object that contains lot of javascript functions/methods.
//the members of global execution context are members of window object as well
//Typescript has type guards, which is there in the upcoming lines of code
// CLASSES AND OBJECTS
//Topics to be covered:
//Class definition
//Constructors
//Access modifiers(public , private , protected)
//Readonly properties
//Optional properties
//Parameter properties
//Getters and Setters
//Static members
//Abstract classes and methods
class Device {
    constructor() {
        this.name = "lg";
        this.price = 12000;
        this.category = "digital";
    }
}
let d1 = new Device();
let d2 = new Device();
class Bottle {
    constructor() {
        this.radius = 120;
        this.price = 100;
        this.color = "white";
    }
}
let b1 = new Bottle();
//ek aisi machine jo produce kr rhi hain final consumable product ,aise hi machine ko constructor bolte hain , (aur jo bane hue object ko destroy krne mein madat kre woh destructor)
//constructor -> object creator, class mein instantiate krne mein 
class BottleMaker {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let bottle1 = new BottleMaker("Milton", 1200);
class HumanMaker {
    constructor(name, ishandsome) {
        this.name = name;
        this.ishandsome = ishandsome;
        this.age = 0;
    }
}
let human = new HumanMaker("Aniket", true);
//This keyword -> 'this' refers to the which object depends on how "this" is being invoked
//for global execution context this refers to Window
// In TypeScript, the this keyword refers to the current object in various cases:
// Method calls: When you call a method on an object, this refers to the object itself.
// class Person {
// name: string;
// constructor(name: string) {
// this.name = name;
// }
// greet() {
// console.log(`Hello, my name is ${this.name}!`);
// }
// }
// let person = new Person('John');
// person.greet();
// Output: Hello, my name is John!
// n this example, this refers to the person object.
// Arrow functions: When you use an arrow function as a method, this refers to the parent scope, not the object.
// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   greet = () => {
//     console.log(`Hello, my name is ${this.name}!`);
//   }
// }
// let person = new Person('John');
// person.greet(); // Output: Hello, my name is undefined!
// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   greet = () => {
//     console.log(`Hello, my name is ${this.name}!`);
//   }
// }
// let person = new Person('John');
// person.greet(); // Output: Hello, my name is undefined!
// In this example, this refers to the global object (usually the window object in a browser or the global object in a Node.js environment), not the person object.
//     Event handlers: When you pass an arrow function as an event handler, this refers to the parent scope, not the object.
// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   handleClick = () => {
//     console.log(`Hello, my name is ${this.name}!`);
//   }
// }
// let person = new Person('John');
// document.getElementById('button').addEventListener('click', person.handleClick);
// // Output: Hello, my name is undefined!
// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   handleClick = () => {
//     console.log(`Hello, my name is ${this.name}!`);
//   }
// }
// let person = new Person('John');
// document.getElementById('button').addEventListener('click', person.handleClick);
// Output: Hello, my name is undefined!
// In this example, this refers to the global object, not the person object.
// Class methods: When you call a class method on an object, this refers to the object itself.
// class Person {
// name: string;
// constructor(name: string) {
// this.name = name;
// }
// static greet() {
// console.log('Hello!');
// }
// }
// let person = new Person('John');
// Person.greet(); // Output: Hello!
// class Person {
// name: string;
// constructor(name: string) {
// this.name = name;
// }
// static greet() {
// console.log('Hello!');
// }
// }
// let person = new Person('John');
// Person.greet(); // Output: Hello!
// In this example, this refers to the Person class, not the person object.
// class Music{
//   constructor(public name:string,public artist:string,public thumbnail:symbol|string,public length: number,public free: number){}
// }
class Music {
    constructor(name, artist, thumbnail, length, free) {
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free;
    }
}
let song = new Music("chal chhaiyaan chhaaiyaan", "vaiyaa", "chaiyaan.jpg", 100, true);
//This keyword
class CLN {
    constructor() {
        this.name = "anonymous";
    }
    changeSomeMoreStuff() {
        console.log("Hey");
    }
    changeName() {
        console.log(this.name);
        this.changeSomeMoreStuff();
    }
}
let obj4 = new CLN();
obj4.changeName();
//access modifiers
//public
class PublicAccess {
    constructor(nm) {
        this.nm = nm;
        this.nm = nm;
    }
    changing() {
        this.nm = "Learner";
        console.log(this.nm);
    }
}
let bew = new PublicAccess("LearningMe");
bew.nm = "MeLearning";
bew.changing();
//private
class BottleMakerTwo {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    changing2() {
        this.name = "Milton";
        console.log(this.name);
    }
}
let bottleobj = new BottleMakerTwo("MILTON");
bottleobj.changing2();
//bottleobj.name=""; not accessible
//Same class only for private
//Protected
class BottleMakerThree {
    constructor(name) {
        this.name = name;
        this.num = 5;
    }
}
class MetalBottleMaker extends BottleMakerThree {
    constructor(name) {
        super(name);
    }
    getValue() {
        console.log(this.name, this.num);
    }
}
let b6 = new MetalBottleMaker("MILTON");
b6.getValue();
// Define a class for the InheritanceIndustry
class InheritanceIndustryImpl {
    constructor(name, address, executor, beneficiaries) {
        this.name = name;
        this.address = address;
        this.executor = executor;
        this.beneficiaries = beneficiaries;
    }
    // Method to calculate the total percentage of beneficiaries
    calculateTotalPercentage() {
        return this.beneficiaries.reduce((acc, beneficiary) => acc + beneficiary.percentage, 0);
    }
    // Method to add a new beneficiary
    addBeneficiary(beneficiary) {
        this.beneficiaries.push(beneficiary);
    }
    // Method to remove a beneficiary
    removeBeneficiary(beneficiary) {
        const index = this.beneficiaries.indexOf(beneficiary);
        if (index !== -1) {
            this.beneficiaries.splice(index, 1);
        }
    }
}
// Define a class for the Executor
class ExecutorImpl {
    constructor(name, address, email, phone) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
    }
}
//protected
class BottleMakers {
    constructor() {
        // private name = "Milton";
        this.name = "MILTON";
    }
}
class MetalBottleMakers extends BottleMakers {
    constructor() {
        super(...arguments);
        this.material = "metal";
    }
    changeName() {
        this.name = "Milton";
        console.log(this.name, this.material);
    }
}
let b7 = new MetalBottleMakers();
b7.changeName();
//Readonly properties
class User {
    constructor(nm) {
        this.nm = nm;
    }
    changeName() {
        // this.nm="hello"; readonly variables value cannot be rewritten
    }
}
let u1 = new User("RO");
u1.changeName();
class Users {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
let U4 = new Users("Aniket Datta", 20, "male");
let U5 = new Users("Aniket Datta", 20);
//parameter properties
class User7 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    setName(value) {
        this.name = value;
    }
}
let u5 = new User7("harsh", 25);
u5.setName("RAM");
u5.getName();
//get and set
class Userz {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
}
let u6 = new Userz("aniket", 25);
u6.name; // name and age behave like attributes and not methods
u6.age;
//static members
// 01. accessing class properties without new keyword
//In TypeScript, the static keyword is used to declare a static member of a class. 
//Static members are shared by all instances of the class 
//and can be accessed without creating an instance of the class.
class Hero {
    static getRandomNumber() {
        return Math.random();
    }
}
Hero.version = 1.0;
// 02. static: object can be accessed only once
class Calculator {
    add(arg0, arg1) {
        throw new Error("Method not implemented.");
    }
    static calculateCircleArea(radius) {
        return Calculator.PI * radius ** 2;
    }
}
Calculator.PI = 3.14;
console.log(Calculator.PI); // 3.14
console.log(Calculator.calculateCircleArea(5)); // 78.5
//Abstract Classes and Methods
class Numbers {
    //static members
    static getRandomNum() {
        return Math.random() * 100;
    }
}
console.log(Numbers.getRandomNum());
//paytm/phonepe/gpay payment
//Mango tree / Banyan Tree,humans: abstract : have some meaning but the meaning is hidden
//Payment
// class Payment{
//   constructor(protected amount: number,protected account: number){
//    isPaymentValid(amount: number){
//     return this.amount > 0;
//    }
//   }
// }
// function isPaymentValid(amount: number, number: any) {
//   throw new Error("Function not implemented.");
// }
class food {
    constructor(gas, gasName) {
        this.gas = gas;
        this.gasName = gasName;
    }
}
class Vegies extends food {
}
class nonvegies extends food {
}
class Controller {
}
class UserController extends Controller {
    index() {
        // Implement user index logic
    }
    show(id) {
        // Implement user show logic
    }
    store() {
        // Implement user store logic
    }
    update(id) {
        // Implement user update logic
    }
    destroy(id) {
        // Implement user destroy logic
    }
}
class ProductController extends Controller {
    index() {
        // Implement product index logic
    }
    show(id) {
        // Implement product show logic
    }
    store() {
        // Implement product store logic
    }
    update(id) {
        // Implement product update logic
    }
    destroy(id) {
        // Implement product destroy logic
    }
}
class Service {
}
class UserService extends Service {
    async getAll() {
        // Implement user get all logic
    }
    async get(id) {
        // Implement user get logic
    }
    async create(data) {
        // Implement user create logic
    }
    async update(id, data) {
        // Implement user update logic
    }
    async delete(id) {
        // Implement user delete logic
    }
}
class ProductService extends Service {
    get(id) {
        throw new Error("Method not implemented.");
    }
    create(data) {
        throw new Error("Method not implemented.");
    }
    update(id, data) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    async getAll() {
        // Implement product get all logic
    }
}
//Functions -> code reusability,simplifying tasks ,Do not Repeat Yourself
//Function Types 
//Optional and default parameters
//Rest Parameters
//overloads
//Function Types:
//returneable functions
function func9() {
    return "hey";
}
//void returning functions
function functnonreturnablefunc() {
}
//callbacks
// function callback(name:string,cb:(value:string)){}
function ghijkl(name, age, cb) {
    cb();
}
ghijkl("harsh", 25, () => {
    console.log("abcdefghijkl");
});
//Callback Functions : (function as an arguement of another function)
function understand(name, age, cb2) {
    cb2("hey");
}
understand("KNOWLEDGE", 25, (arg) => {
    console.log("FUNCTIONS");
});
//optional and Default parameters
//default parameters
function hardwork(name, age, gender) {
}
//arguements
hardwork("harsh", 25, "male");
hardwork("whoami", 20, "female");
//Rest Parameter
function restoperatedfunction(...args) {
}
restoperatedfunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
//Rest/spread Operator
function summation(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum = sum + args[i];
    }
    return sum;
}
summation(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
console.log("Sum of first nine natural numbers with rest operator function:", summation(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));
function friends(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
friends("Aniket", "Ram");
let arr = [0, 1, 2, 3, 4, 5];
let arr1 = [...arr];
console.log(arr1);
//spread
const arr0 = [1, 2, 3];
const arr2 = [...arr0, 4, 5, 6];
console.log(arr2); // [1, 2, 3, 4, 5, 6]
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3, d: 4 };
console.log(obj2); // { a: 1, b: 2, c: 3, d: 4 }
//Function Overloading
// class NClass {
//   constructor(public ooo: () => void = NClass.defaultOoo) {}
//   static defaultOoo(): void {}
// }
// const instance = new NClass();
// instance.ooo(); // Okay
// class NClass {
//   constructor(public ooo: () => void) {}
// }
// class Calculators {
//   add(x: number, y: number): number;
//   add(x: string, y: string | number): string;
//   add(x: any, y: any): any {
//     return x + y;
//   }
// }
// const calculator = new Calculator();
// console.log(calculator.add(2, 3)); // 5
// console.log(calculator.add('a', 'b')); // "ab"
//Generics
//Generic functions
//Generic interfaces
//Generic classes
//humein ek function banana hain jo ki accept krega koi bhi value and usey print karega
function logger(a) {
    //a. -> intellisense not working , cant detect whether a is a string or number
}
logger("hey");
//logger(12);
function logger2(a) {
    //a.
}
logger2("hey");
logger2(undefined);
logger2(10);
//hum ek function ko use krte waqt bata sakte hain ki function arguement kis type se treat kre?
function func8(a) {
    console.log(a);
}
func8("GENERICS");
func8(10);
//shortening console.log()
function log(a) {
    console.log(a);
}
log("hey");
log(5);
log(undefined);
log(null);
//Generic inferencing
//Generic functions
function lg(val) {
    console.log(val);
}
lg("Aniket"); //<string> not written here
//generic functions with string literals
function abcdef(a, b) {
    //return "hey" as T;
    return "hey";
}
abcdef("hey", "hello");
function info(obj) {
}
info({ name: "foo", age: 25, key: "arv" });
//generic class
class objmaker {
    constructor(key) { }
}
let variable = new objmaker("hey");
let variable0 = new objmaker("hey");
console.log(variable, variable0);
//Type Assertions
//Type casting
//Non-null assertion operator
//type assertion  : this is required when we know more about the type of the variable than typescript
// let typeassert:any =12;
//console.log((typeassert as string).charAt(0));
//(typeassert as string).charAt(0);
// <number>typeassert
// console.log(typeof typeassert)
let typeassert;
typeassert = "hello";
console.log(typeassert.charAt(0));
typeassert.charAt(0);
//Type Guards
//Using typeof and instanceof
//Partial , required and readonly
function abdv(arg) {
    if (typeof arg === "number") {
        return "number";
    }
    else if (typeof arg === "string") {
        return "string";
    }
    else {
        throw new Error("pagal hu mein");
    }
}
console.log(abdv(12));
console.log(abdv("hello"));
// console.log(abdv(undefined));
//instanceof
class TVRemote {
    switchTvoff() {
        console.log("Switching off tv");
    }
}
class CarRemote {
    switchCarOff() {
        console.log("Switch off car");
    }
}
const tv = new TVRemote();
const car = new CarRemote();
function switchoffkaro(device) {
    if (device instanceof TVRemote) {
        device.switchTvoff();
    }
    else if (device instanceof CarRemote) {
        device.switchCarOff();
    }
}
switchoffkaro(tv);
// import fs from'fs';
//ES6 arrow functions in typescript
let funcname = () => {
    console.log("Hello world");
};
// funcname is a variable storing a function 
//In a function in strict mode , this is undefined 
//Scope and Lexical Environment:-
let b8;
function scope() {
    console.log(b8);
    console.log("Scope of Function scope()");
}
b8 = 10;
scope();
// let b9:number;
// function parentScope(){
//   scope00();
//   function scope00(){
//     console.log(b7);
//   }
// }
// b9=10;
// parentScope();
//scoping means the region in which a specific variable/function can be accessed within  a code block
//scope:-Determines the accessibility of variables,objects and functions from different parts of the code.
//lexical environment of a function includes own environment + parent function environment
//Lexical Environment
