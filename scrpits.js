console.log("Hello Again");

var Intruduce = [20, "Erfan", "Saadati", "Isfahan"];

var name = Intruduce[1];
var age = Intruduce[0];
var lastname = [2];
var city = Intruduce[3];

console.log("Name:" + name);
console.log("Age:" + age);
console.log("Lastname:" + lastname);
console.log("City:" + city);
// 

console.log(Intruduce);

function Sum(a, b) {
  return a + b;
}

var c = Sum(1, 2);
console.log(c);
var d = c;

var c = Sum(2, 2);
console.log(c);
var d = d + c;
console.log(d);

function Intruduce2(name, age, lastname, city) {
  return (
    "Name:" + name + " Age:" + age + " Lastname:" + lastname + " City:" + city
  );
}

var e = Intruduce2("Erfan", 20, "Saadati", "Isfahan");
console.log(e);

function Intruduce3() {
  var name = Intruduce[1];
  var lastname = Intruduce[2];
  var age = Intruduce[0];
  console.log(age, name, lastname);
}

Intruduce3();

var name2 = "Erfan";
var age2 = 20;
var lastname2 = "Khoram";

// switch (true) {
//   case Intruduce[0] == age2:
//     console.log("سن درست است " + ":" + age2);
//     break;

//   case Intruduce[1] == name2:
//     console.log("نام  درست است " + ";" + name2);
//     break;
//   case Intruduce[2] == lastname2:
//     console.log("فامیلی درست است" + ":" + lastname);
//     break;

//   default:
//     console.log("تمامی اطلاعات اشتباه است ");
//     break;
// }

// if(Intruduce[0] == age2){
//     console.log("سن درست است " + age2)
//     if(Intruduce[1] == name2){
//         console.log("نام درست است " + name2)
//         if(Intruduce[2] == lastname){
//             console.log("نام خانوادکی درست است " + lastname2)
//         }
//          else{
//             console.log("نام خانوادگی درست نیست ")
//         }
//     }
//     else{
//         console.log("نام درست نیست")
//     }
// }
// else{
//     console.log("تمامی اطلاعات درست نیست ")
// }

var n = 100
for(var i = 0; i <= n; i++){
    console.log(i)
}


var List =[5,1,2,4,3,];
var List2 = [6,7,8,9]



console.log(List)
// متد پوش برای اضافه کردن مقداری به لیست استفاده میشود 

// List.push(9)
// List.push(10)
// console.log(List)
// متد پاپ برای حذف کردن مقداری از لیست استفاده میشود 
// List.pop()
// List.pop()
// List.pop()
// console.log(List)


// List.shift()
// شیفت هم همان کار پاپ رو انجام میده ولی از سمت چپ 

// List.unshift('new Item')
// متد آنشیفت از سمت چپ اضافه میکند به لیست 
// console.log(List)

var newlist = List.concat(List2);
console.log(newlist);
// از concat برای قدام کردن دو لیست استفاده میکنیم 

console.log(newlist.join(' - '))
// از متد join برای خروجی رشته گرفتن از لیست استفاده میکنیم 

console.log(newlist.sort())
// از متد sort برای مرتب سازی لیست استفاده میکنیم 
console.log(newlist.reverse())
// از متد reverse برای برعکس مرتب کردن لیست لیست استفاده میکنیم 
var filterlist = newlist.filter(function(item){
    return item %2 == 0 
})
console.log(filterlist.sort())
// برای فیلتر کردن لیست از متد Filter استفاده میکنیم 
// filter از نوع تابع های بینام است 

// console.log(List.indexOf('new Item'))

//  برای جدا کردن بازه ای از لیست از متد splice استفاده میکنیم                  MOHEM !!!!

// برای کپی گرفتن از بازه ای از لیست  از متد slice  استفاده میکنیم              MOHEM !!!!
// function Sum(){
//     var total = 0;
//     for(var i = 0; i <= List.length; i++){
//         total = total + i;
//         console.log("total :" + total + " item :" + i)
//     }
// }

// Sum();

// function sum(){
//     var total = 0;
//     var m = 0;
//     while(m <= List.length){
//         total = total + m;
//         console.log("total :" + total + " item :" + m)
//         m++;
//     }
// }

// sum();

// var total = 0;
// List.forEach(function(items){
//     total += items;
//     console.log("total :" + total + " item :" + items)
// });

// List.reduce(function(total,value){
//     console.log(total , value);
//     return total + value * 2;
    
// },0);

