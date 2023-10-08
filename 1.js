//variable declaration
var sayi1 = 5;
const sayi2 = 5; //Sabit
let x = 7;       //Degisken
const name = 'John';
name = "Joe";
let z = 10;
z = 12;
console.log(z);







const sayi2 = 5;

if ({} == {}) {
    console.log('esit');
}
else {
    console.log('esit degil');
}


//primitive types  ilkel type
//number
//string
//boolean



//nonprimitive types Referans degerleri farklidir.
//object
//array



const person = {}
const otherPerson = {}
if ({ name: 'Ali' } == { name: 'Ali' }) {
    console.log('esit')
}
else {
    console.log('esit degil')
}



//JSON.stringify :Stringe donusturme
if (JSON.stringify({ name: 'Ali' }) === JSON.stringify({ name: 'Ali' })) {
    console.log('esit')
}
else {
    console.log('esit degil')
}


//type equality
const sayi1 = '5'
const sayi2 = 5
if (sayi1 == sayi2)
if (sayi1 === sayi2)


const sayi1 = '5'
const sayi2 = 5
let toplam = sayi1 + sayi2
cosnole.log(toplam)



let text = Array(16).join('wat' - 1) + 'batman'
console.log(text)
//"NaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNbatman"



console.log(undifined === null) //false
console.log(undifined == null) //true
console.log(NaN === NaN) //false


if (undifined) {
    console.log('success')
}


if (null) {
    console.log('success')
}

//Degerlerin dogrulugu


undifined == null //true