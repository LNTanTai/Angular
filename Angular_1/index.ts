console.log("hello typescript")

//cach khai bien bien
//var, let, const

//redelare
// var a = 1
// var a = 2

// let b = 1
// let b = 2

//Hoisting 
// console.log(a)
// var a = 1

// console.log(b)
// let b = 1

//scope
//var: function scope
//let & & const : block scope


//   for (var i = 0; i < 5; i++) {
//       setTimeout(function(){
//           console.log("var", i)
//       }, 1000)
//   }

//   for (let i = 0; i < 5; i++) {
//     setTimeout(function(){
//         console.log("let", i)
//     }, 1000)
// }

// for (var i = 0; i < 5; i++) {
//     timeout(i)
// }

// function timeout(i){
//     setTimeout(function(){
//         console.log("var", i)
//     }, 1000)
// }


//Type
// let a: number = 5;
// let b: number = '5';

// let hello1: string = "Hello";
// let hello2: string = true;

// let isActive: boolean = true
// isActive = false

// let arr1: Array<string> = ['a', 'b', 'c'];

// let arr2: number[] = [1,2,3,4,5];

// tuple 
// let tuple: [string, number] = ['Tuoi', 25]

//Enum
// enum Color {black = '#000', white = "#fff", red = "#f00"}
// console.log(Color.black);

//null, undefined
// let n: null = null
// let u: undefined = undefined

//any
// let any: any = 1
// any = 'Hello'
// any = true

// let result1: number | string = 5
// result1 = 'ok'
// result1 = 0

// let result2: string[] | null = null
// result2 = ['a', 'b', 'c', 'd']

// function hello(): void {
//     console.log("hello typescript");
// }

// function tinhLuon(): number{
//     return 5000
// }

type HocVien = {
    hoTen: string
    lop: string
    tuoi?: number
}

const hocvien1: HocVien = {
    hoTen: "Nguyen van Teo",
    lop: 'FE52',
    tuoi: 25
}

const hocvien2: HocVien = {
    hoTen: "Nguyen van Teo",
    lop: 'FE52',
}

// Opinal chaining



