// Ededlerden ibaret bir array verilir. Hemin arrayi boyukden ededden kiciye  dogru sort elemek.
let arr=[6,3,4,2,1,5]
arr.sort(function(a, b){return b-a});
console.log(arr);

// ["Yanvar","Fevral","Mart","Aprel"]  - bu arrayi parametr kimi qebul eden bir function yazirsiz.
// Hemin function geriye yeni bir array qaytarir. 
// Yeni yaranan arrayda hemin aylarin necenci ay oldugu yazilmalidir. 
// Cavab bele olmlalidir: ["Yanvar -1","Fevral-2","Mart-3","Aprel-4"]. 
let month=["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"]
function Months(month) {
    console.log(month.map((value,index)=>value=value+(index+1)));
}
Months(month);


// String qebul eden bir function yaziriq. 
// Hemin function yeni bir array qaytaracaq, 
// hemin arrayin elementleri functiona gelen stringin sozlerinin herflerinin cemine beraber olmalidir.
// Meselen: Functiona gelen string - "Salam olsun hamiya", 
// hemin functionun qaytardiqi array ise - [5,5,6] olacaq.


// function Count(word){
//     let arr=word.split(" ");
//     for (let i = 0; i < arr.length; i++) {
//      arr[i]=(arr[i].length);  
//     }
//     return arr;
// }

function Count(word) {
    console.log(word.split(" ").map(value=>value.length));
}
let wrd="salam olsun her kese";
Count(wrd)