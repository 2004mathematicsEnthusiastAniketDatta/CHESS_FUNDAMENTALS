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

import number from "inquirer/lib/prompts/number";
//Variables: In Javascipt , undeclared variables do  not exist until code assigning them is executed.
//All undeclared variables needs to be declared before being required in code
console.log("TYPESCRIPT");
//Variable declarations are processed before code execution in Javascript
//Primitives
let a:number=12;
let b:number=15.15;
let str:string = "TYPESCRIPT";
let ch:string ='a';
console.table([a,b,str,ch]);
console.table([a,b,str,ch]);
//Here characters are single elements of string
//Reference Data Types: () {} []
// Arrays
let c =[1,2,3,4,5,"TYPESCRIPT",{name: "typescriptor"}];
let k:number[]=[1,0,1];
let d=c;
d=[1,2,3,4];
console.log(c)
console.log(d);
//tuples: fixing the type of array-like data structure elements
let tuple: [string,number] =["TYPESCRIPT",20];
console.log(tuple);
//Enumerations: enums
enum UserRoles{
  ADMIN = "admin",
  GUEST = "guest",
  SUPER_ADMIN = "super_admin"
}
enum StatusCodes{
  ABANDONED="abandoned status code 500",
  NOTFOUND ="not found status code 404",
  OK="OK 200"
}
console.log(StatusCodes.OK);
console.log(UserRoles.GUEST);
//Functions
function abcd(): void{
 console.log("Hey");
}
//non returnable :void
abcd();
//map
let obj={
  a:"TYPESCRIPT",
  b:"IS",
  c:"BETTER"
}
console.log(obj)
//Any,Unknown,Void,Null,Undefined,Never
let x: any;
// x:boolean : Error
x=true;
let y:boolean;
y=false;

let z:unknown;
z=0;
z="Aniket";
if (typeof z == "string")
  z=z.toUpperCase();
console.log(z);
let p : string | null;
p = "TYPESCRIPT"
 
//never
function abcde():never{
  while (true) {}
}
abcd();
console.log("heylloo");

//Type inference
let num="12";
console.log(typeof(num)); //we did not need to infer the type of data stored  to num
//Understanding Type Inference
let num0:number=12; //TYpe annotations
console.log(typeof(num0));

function func(a:number,b:number):void{
  console.log(a+b);
}
func(0,1);

//Interfaces and Type Aliases

function func3(a:number , b:string){
let  l=a.toPrecision();
  console.log(l);
  console.log(b.charAt(0));
}
func3(15,"Interfaces");

//Interfaces describes the shape of an object
//Type Aliases : User-Defined types

interface User
{
  age:number,
  name: string,
  email:string,
  password:string,
  gender?:string
}
function getDataOfUser(obj:User){
   console.log(obj.name);
   console.log(obj.gender);//undefined
}
//using interfaces to define object shapes
getDataOfUser({
  age: 20, name: "Aniket", email: "abcd@gmail.com", password: "1234",
  nm: "",
  changeName: function (): void {
    throw new Error("Function not implemented.");
  }
});

//Extending Interfaces
interface Usr{
  name: string;
  email:string;
  password: string;
}

interface Admin extends Usr{
  admin:boolean;
}
function f3(obj5: Admin){
  console.log(obj5)
}
f3({name: "Aniket Datta",email:"abcdefghij@gmail.com",password: "1234567890",admin:true});

//Merging of two interfaces with same name
interface Abcd{
  name: string;
}
interface Abcd{
  email: string
}
function f4(obj:Abcd){
 console.log(obj.name);
 console.log(obj.email); 
}
f4({name: "Aniket",email:"xyz@rediffmail.com"});


//Type Aliases

type sankhya = number | null;
type arg = number | string | null;
let n1: sankhya;
let n2:arg;
n1=5;
n2="TYPESCRIPT";

//Intersection Types
type you = {
name: string,
email: string,
}

type adm = User & {
  getDetails(ur:string):void;
}

function funcuser(a:adm){
  a.getDetails
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
class Device{
  name="lg";
  price=12000;
  category="digital";
}
let d1= new Device();
let d2 = new Device();

class Bottle{
  radius = 120;
  price = 100;
  color = "white";
}
let b1 = new Bottle();

//ek aisi machine jo produce kr rhi hain final consumable product ,aise hi machine ko constructor bolte hain , (aur jo bane hue object ko destroy krne mein madat kre woh destructor)
//constructor -> object creator, class mein instantiate krne mein 

class BottleMaker{
  constructor(public name: string,public price:number){}
}
let bottle1=new BottleMaker("Milton",1200);

class HumanMaker{
  age=0;
  constructor(public name:string,public ishandsome:boolean){}

}
let human = new HumanMaker("Aniket",true);
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
  public name;
  public artist;
  public thumbnail;
  public length;
  public free;
  constructor(name: string,artist: string,thumbnail: symbol | string,length: number,free: boolean){
    this.name = name;
    this.artist = artist;
    this.thumbnail = thumbnail;
    this.length=length;
    this.free=free;
  }
}

let song = new Music("chal chhaiyaan chhaaiyaan","vaiyaa","chaiyaan.jpg",100,true);

//This keyword
class CLN{
  name="anonymous";
  changeSomeMoreStuff(){
    console.log("Hey");
  }
  changeName(){
    console.log(this.name);
    this.changeSomeMoreStuff();
  }

}
let obj4 = new CLN();
obj4.changeName();

//access modifiers
//public
class PublicAccess{
constructor(public nm: string){
  this.nm=nm;
}
changing(){
  this.nm="Learner";
  console.log(this.nm);
}
}
let bew=new PublicAccess("LearningMe");
bew.nm="MeLearning";
bew.changing()

//private
class BottleMakerTwo{
  constructor(private name:string){
    this.name=name;
  }
  changing2(){
    this.name="Milton";
    console.log(this.name);
  }
}
let bottleobj=new BottleMakerTwo("MILTON");
bottleobj.changing2();
//bottleobj.name=""; not accessible
//Same class only for private
//Protected

class BottleMakerThree{
  protected num:number=5;
  constructor(protected name: string){}
}
class MetalBottleMaker extends BottleMakerThree{
  constructor(name: string){
    super(name);
  }
  getValue(){
    console.log(this.name,this.num);
  }
}
let b6=new MetalBottleMaker("MILTON");
b6.getValue();

// Define an interface for the InheritanceIndustry
interface InheritanceIndustry {
  name: string;
  address: string;
  executor: Executor;
  beneficiaries: Beneficiary[];
}

// Define an interface for the Executor
interface Executor {
  name: string;
  address: string;
  email: string;
  phone: string;
}

// Define an interface for the Beneficiary
interface Beneficiary {
  name: string;
  address: string;
  percentage: number;
}

// Define a class for the InheritanceIndustry
class InheritanceIndustryImpl implements InheritanceIndustry {
  public name: string;
  public address: string;
  public executor: Executor;
  public beneficiaries: Beneficiary[];

  constructor(
    name: string,
    address: string,
    executor: Executor,
    beneficiaries: Beneficiary[]
  ) {
    this.name = name;
    this.address = address;
    this.executor = executor;
    this.beneficiaries = beneficiaries;
  }

  // Method to calculate the total percentage of beneficiaries
  public calculateTotalPercentage(): number {
    return this.beneficiaries.reduce((acc, beneficiary) => acc + beneficiary.percentage, 0);
  }

  // Method to add a new beneficiary
  public addBeneficiary(beneficiary: Beneficiary): void {
    this.beneficiaries.push(beneficiary);
  }

  // Method to remove a beneficiary
  public removeBeneficiary(beneficiary: Beneficiary): void {
    const index = this.beneficiaries.indexOf(beneficiary);
    if (index !== -1) {
      this.beneficiaries.splice(index, 1);
    }
  }
}

// Define a class for the Executor
class ExecutorImpl implements Executor {
  public name: string;
  public address: string;
  public email: string;
  public phone: string;

  constructor(
    name: string,
    address: string,
    email: string,
    phone: string
  ) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
  }
}
//protected
class BottleMakers{
// private name = "Milton";
protected name="MILTON";
}
class MetalBottleMakers extends BottleMakers{
public material = "metal";
changeName(){
  this.name="Milton";
  console.log(this.name,this.material);
}
}
let b7=new MetalBottleMakers();
b7.changeName();
//Readonly properties
class User{
  constructor(public readonly nm:string){ }
  changeName(){
    // this.nm="hello"; readonly variables value cannot be rewritten
  }
}
let u1=new User("RO");
u1.changeName();

class Users{
  constructor(public name: string,public age: number,public gender?:string){
    this.name=name;
    this.age=age;
    this.gender=gender;
  }
}

let U4=new Users("Aniket Datta",20,"male");
let U5= new Users("Aniket Datta",20);
//parameter properties
class User7{
  constructor(public name: string,public age: number){ 
    this.name=name;
    this.age=age;   
  }
  getName(){
   return this.name;
  }
  setName(value: string){
    this.name = value;
  }
}
let u5=new User7("harsh",25);
u5.setName("RAM");
u5.getName();
//get and set
class Userz{
  constructor(public _name:string,public _age: number){ }
  get name() {
    return this._name;
  }
  set name(value:string)
  {
    this._name=value;
  }
  get age(){
    return this._age;
  }
  set age(value:number){
     this._age=value;
  }
}
let u6=new Userz("aniket",25);
u6.name // name and age behave like attributes and not methods
u6.age

//static members

// 01. accessing class properties without new keyword
//In TypeScript, the static keyword is used to declare a static member of a class. 
//Static members are shared by all instances of the class 
//and can be accessed without creating an instance of the class.
class Hero{
  static version=1.0;
  static getRandomNumber(){
    return Math.random();
  }
}
// 02. static: object can be accessed only once

class Calculator {
  add(arg0: number, arg1: number): any {
    throw new Error("Method not implemented.");
  }
  static PI: number = 3.14;

  static calculateCircleArea(radius: number): number {
    return Calculator.PI * radius ** 2;
  }
}

console.log(Calculator.PI); // 3.14
console.log(Calculator.calculateCircleArea(5)); // 78.5

//Abstract Classes and Methods

class Numbers{
  //static members
  static getRandomNum(){
    return Math.random()*100;
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

abstract class food {
  constructor(protected gas:number,public gasName:string){ }
}
class Vegies extends food{

}
class nonvegies extends food{

}

abstract class Controller {
  abstract index(): void;
  abstract show(id: number): void;
  abstract store(): void;
  abstract update(id: number): void;
  abstract destroy(id: number): void;
}

class UserController extends Controller {
  index(): void {
    // Implement user index logic
  }

  show(id: number): void {
    // Implement user show logic
  }

  store(): void {
    // Implement user store logic
  }

  update(id: number): void {
    // Implement user update logic
  }

  destroy(id: number): void {
    // Implement user destroy logic
  }
}

class ProductController extends Controller {
  index(): void {
    // Implement product index logic
  }

  show(id: number): void {
    // Implement product show logic
  }

  store(): void {
    // Implement product store logic
  }

  update(id: number): void {
    // Implement product update logic
  }

  destroy(id: number): void {
    // Implement product destroy logic
  }
}
abstract class Service {
  abstract getAll(): Promise<any>;
  abstract get(id: number): Promise<any>;
  abstract create(data: any): Promise<any>;
  abstract update(id: number, data: any): Promise<any>;
  abstract delete(id: number): Promise<any>;
}

class UserService extends Service {
  async getAll(): Promise<any> {
    // Implement user get all logic
  }

  async get(id: number): Promise<any> {
    // Implement user get logic
  }

  async create(data: any): Promise<any> {
    // Implement user create logic
  }

  async update(id: number, data: any): Promise<any> {
    // Implement user update logic
  }

  async delete(id: number): Promise<any> {
    // Implement user delete logic
  }
}

class ProductService extends Service {
  get(id: number): Promise<any> {
    throw new Error("Method not implemented.");
  }
  create(data: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  update(id: number, data: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async getAll(): Promise<any> {
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
function func9():string{
  return "hey";
}
//void returning functions
function functnonreturnablefunc():void{

}
//callbacks
// function callback(name:string,cb:(value:string)){}

function ghijkl(name: string, age: number,cb:()=>void){ 
  cb()
}

ghijkl("harsh",25,()=>{
  console.log("abcdefghijkl");
})
//Callback Functions : (function as an arguement of another function)
function understand(name: string , age: number, cb2:(arg: string)=>void){
  cb2("hey");
}
understand("KNOWLEDGE",25,(arg: string)=>{
  console.log("FUNCTIONS");
})
//optional and Default parameters
//default parameters
function hardwork(name: string,age: number,gender?: string){

}
//arguements
hardwork("harsh",25,"male");
hardwork("whoami",20,"female");

//Rest Parameter
function restoperatedfunction(...args:number[]){

}
restoperatedfunction(1,2,3,4,5,6,7,8,9,0);

//Rest/spread Operator
function summation(...args:number[]):number{
  let sum = 0;
for(let i:number=0;i<args.length;i++){
 sum=sum + args[i];
}
return sum;
}
summation(1,2,3,4,5,6,7,8,9,0)
console.log("Sum of first nine natural numbers with rest operator function:",summation(1,2,3,4,5,6,7,8,9,0));

function friends(...args:string[]){
  for(let i:number=0;i<args.length;i++){
    console.log(args[i]);
   }
}
friends("Aniket","Ram");

let arr:number[]=[0,1,2,3,4,5];
let arr1:number []=[...arr];
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

function logger(a:any){
   //a. -> intellisense not working , cant detect whether a is a string or number
}

logger("hey");
//logger(12);
function logger2 (a: string | null | undefined | string | number){
  //a.
}
logger2("hey");
logger2(undefined);
logger2(10);

//hum ek function ko use krte waqt bata sakte hain ki function arguement kis type se treat kre?
function func8<T>(a:T){
  console.log(a);
  
}
func8<string>("GENERICS");
func8<number>(10);

//shortening console.log()
function log<T>(a:T){
  console.log(a);
}
log<string>("hey");
log<number>(5);
log<undefined>(undefined);
log<null>(null);

//Generic inferencing
//Generic functions
function lg<T>(val: T){
console.log(val);
}
lg("Aniket"); //<string> not written here


//generic functions with string literals
function abcdef<T>(a: T, b: T):T{
  //return "hey" as T;
    return <T> "hey"
}
abcdef<string>("hey","hello");

//generic interface
interface INF<T>{
  name: string;
  age: number;
  key: T;
}
function info(obj: INF<string>){

}
info({name:"foo",age:25,key: "arv"});

//generic class
class objmaker<T>{
  constructor(key: T){}
}
let variable= new objmaker<string>("hey");
let variable0= new objmaker("hey");
console.log(variable,variable0);

//Type Assertions
//Type casting
//Non-null assertion operator
//type assertion  : this is required when we know more about the type of the variable than typescript
// let typeassert:any =12;
//console.log((typeassert as string).charAt(0));
//(typeassert as string).charAt(0);
// <number>typeassert
// console.log(typeof typeassert)
let typeassert:null | undefined | string;
typeassert="hello";
console.log( typeassert!.charAt(0));
 typeassert!.charAt(0);

//Type Guards
//Using typeof and instanceof
//Partial , required and readonly
function abdv(arg: string|number){
if (typeof arg === "number"){
return "number";
}
else if(typeof arg==="string"){
return "string";
}
else{
      throw new Error("pagal hu mein");
}
}
console.log(abdv(12));
console.log(abdv("hello"));
// console.log(abdv(undefined));

//instanceof
class TVRemote{
  switchTvoff(){
    console.log("Switching off tv");
  }
}
class CarRemote{
  switchCarOff(){
    console.log("Switch off car");
  }
}
const tv=new TVRemote();
const car=new CarRemote();
function switchoffkaro(device:TVRemote | CarRemote){
  if(device instanceof TVRemote){
    device.switchTvoff();
  }
  else if(device instanceof CarRemote){
    device.switchCarOff();
  }
}
switchoffkaro(tv);
// import fs from'fs';
//ES6 arrow functions in typescript
let funcname=()=>{
  console.log("Hello world");
}
// funcname is a variable storing a function 
//In a function in strict mode , this is undefined 


//Scope and Lexical Environment:-
let b8:number;
function scope(){
  console.log(b8);
  console.log("Scope of Function scope()");
}
b8=10;
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