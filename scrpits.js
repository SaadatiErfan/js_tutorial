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

