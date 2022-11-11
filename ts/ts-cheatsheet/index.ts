// Primitive Types
//explicit type annotation
let firstname: string = "Danny"

//implicit type annotation
let othername = "Danny"

// Union Types
let age: number | string
age = 26
age = "26"

// Dynamic Types
// JS alike
let ageDynamic: any = 100
ageDynamic = true

// Literal Types
let direction: "UP" | "DOWN"
direction = "UP"

// Object
let people: {
    name: string
    isProgrammer: boolean
}

people = {
    name: "ayo",
    isProgrammer: true,
}
/* Error - no properties
people.age = 1
people.isProgrammer = "maybe" */

// Arrays
let ids: number[] = []
ids.push(1)
/* Error - wrong type
ids.push("2") */
let options: (string | number)[]
options = [10, "UP"]

let person = ["ayo", 32]
/* Error - types infered
person[0] = true */

// Tuples
let optionsTuple: [string, number]
optionsTuple = ["10", 1]

//Functions
function circleOne(diam: number): string {
    return "Circumf= " + Math.PI * diam 
}

const circleTwo = (diam: number): string => "Circumf= " + Math.PI * diam
console.log(circleTwo(1));
//declare
let sayHi: (name: string) => void //can't use const
sayHi = (name: string) => console.log("hi, " + name)
sayHi("Danny")

//Type Aliases
type StringOrNum = string | number
let id: StringOrNum = 24

//Interfaces
interface IPerson {
    readonly name: string
    isProgrammer: boolean
}

let p1: IPerson =  {
    name: "mew",
    isProgrammer: false,
}
/* ERROR
p1.name = "newonw" */
//two way
interface ISpeech {
    sayHi(name: string): string
    sayBye: (name: string) => string
}

let speech: ISpeech = {
    sayHi: function(name: string) {
        return "Hi, " + name
    },
    sayBye: (name: string) => "Bye, " + name,
}
//extending
interface Animal {
    name: string
}

interface Dog extends Animal {
    breed: string
}

// The DOM & Type Casting
// const link = document.querySelector("a")!
// const form = document.getElementById("signupform") as HTMLFormElement

// Generics
interface HasLength {
    length: number
}
// logLength accepts all types with a length property
const logLength = <T extends HasLength>(a: T) => {
    console.log(a.length)
}

// TS "captures" the type implicitly
logLength("Hello") //5

// Can also explicitly pass the type to T
logLength<number []>([1,2,3]) //3
// Type T can change in your interface
//
interface IDog<T> {
    breed: string
    treats: T
}

let labradoe: IDog<string> = {
    breed: "labrador",
    treats: "chew sticks, tripe",
}

let scottieDog: IDog<string[]> = {
    breed: "scottich terrier",
    treats: ["turkey", "haggis"],
}

//Enums
enum ResourceType {
    BOOK,
    FILE,
    FILM
}

ResourceType.BOOK // 0
ResourceType.FILE // 1

// Narrowing
let agePrecise: string | number
agePrecise = "100"
if (typeof agePrecise === "string"){
    agePrecise 
    console.log(agePrecise)
}
