let sayi1 =  10
sayi1 = "Engin Demirog"
let student = {id:1, name:"Engin"}
//console.log(student);

function sava (puan =10, ogrenci){
    consol.log(ogrenci.name + ":" + puan)
}
//save(undefined,student);

let students =["Endin Demirog","Halit Kalayci","Engin Toprak",]

//console.log(students)

let students2 =[student,{id:2,name:"Halit"},"Ankara" ,{city:"Istanbul"}]
//console.log(students2)

//rest geriye kalanlar 
//parans
//varArgs
let showProducts = function (id,...products){
   consol.log(id)
   console.log(products[0])
}

//consol.log(typeof showProducts)
//showProducts(10,"Elma","Armut","Karpuz")

//spread ayristirmak
let poins =[1,2,3,4,50,5,60,14]
console.log(...poins)
console.log( Math.max(...poins))
console.log(..."ABC","D",..."EFG","H")

//Destructuring* parcalamak
let populations = [10000,20000,30000[40000,10000]]
let [small,medium,high,[veryHiye,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHiye)
console.log(maximum)

function someFunction([small1],number){
    console.log(small1)
}

someFunction(populations)

let category = {id :1,name:"Icecek"}
console.log(category.id)
console.log["name"]

let{id,name} = category
console.log(id)
console.log(name)

