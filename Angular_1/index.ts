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
//data =[]
// data.hocVien = indefined
//data.hocVien.hoTen => error

// data && data.hocVien && data.hocVien.hoTen
//data?.hocVien?.hoTen

let diemToan = 0
console.log(diemToan || 'N/A');
console.log(diemToan ?? 'N/A');
//=> ?? chi kiem tra gia tri null va undefined

//Class
class NhanVien{
    hoTen: string
    tuoi: number

    constructor(hoTen: string, tuoi: number){
        this.hoTen = hoTen
        this.tuoi = tuoi
    }

    tinhLuong(): number{
        return 1000
    }
}

class GiamDoc extends NhanVien {
    heSoLuong: number

    constructor(hoTen: string, tuoi: number, heSoLuong: number){
        super(hoTen, tuoi)
        this.heSoLuong = heSoLuong
    }

    tinhLuong(): number {
        return super.tinhLuong() * this.heSoLuong
    }
}

const giamDoc = new GiamDoc('Nguyen Van Teo', 25, 5)
console.log(giamDoc.tinhLuong());

// Interface 
interface Animal {
    name: string;
    eat(): void
    sound(): void
    run(): void
}


interface Attribute{
    color: string
    type: string
}

class Dog implements Animal, Attribute {
    name: string;
    color: string;
    type: string;

    constructor(name: string, color: string, type: string){
        this.name = name;
        this.color = color;
        this.type = type;
    }

    eat(): void{
        console.log("Bof kobe")
    }

    sound(): void{
        console.log("Gau Gau")
    }
    run(): void{
        console.log(".......")
    }
}

const txtName = <HTMLInputElement>document.getElementById('txtName')
console.log(txtName.value);

const btnSubmit = <HTMLInputElement>document.getElementById('btSubmit')
btnSubmit.addEventListener('click', () => {
    console.log('Click');
    
})





