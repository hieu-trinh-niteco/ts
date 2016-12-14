let isDone: boolean = false;
console.log(isDone);

let decimal: number = 6;
console.log(decimal);

let string: string = "color"
console.log(string)

let fulName:string = "hieutt"
let age:number = 26
var next = 1
let sentence: string = `
    Hello, my name is ${fulName}
    I'll be ${age + next} years old next year
`
console.log(sentence);

let list1: number[] = [1,2,3]
let list2: Array<number> = [1,2,3]
let x:[string, number];
x = ['hello' , 2]
// x = [1, 'hello'] => error

enum Color {Red = 1, Green, Blue};
let c: Color = Color.Green;
console.log(c)