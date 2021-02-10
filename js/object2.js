// let colorDiv, divA;

// colorDiv = function(ev){
//     let targetEv = ev.currentTarget;
//     targetEv.style.backgroundColor = 'purple';
//     targetEv.style.color = 'white';
// }
// divA = document.getElementById('output');
// divA.addEventListener('mouseout',colorDiv);

// let d = new Date();
// let num = 1000 * 60 * 60 * 365.25 * 40;
// let str = '20 July 2012 14:05:00';
// d = new Date(num);
// d = new Date(str);
// d = new Date(1581000000000);
// d.setFullYear(2020);
// d.setHours(1);
// let g = d.getMinutes();
// //output
// console.log(d.toDateString());
// console.log(d.toTimeString());
// console.log(d.toUTCString());
// console.log(g);
// try{
// throw "to jest blad";
// }catch(err){
//    console.log('Caught   ',err); 
// }finally{
//     console.log("finally tekst");
// }

let bob = function (num, str) {
    console.log('bob', num, str, this);
    return this;
}
let bill = {
    name: 'Cezary Pazura',
    movie: 'Coś tam, coś tam',
    myMethod: function (fn) {
        //fn("2","hello");
        let n = arguments[1];
        let s = arguments[2];
        fn.apply(bill, [n, s]);
    }
}
//  bob(1,'hello');
//  bill.myMethod(bob);
//bob.call(bill,3,"ojej");
//bob.apply(bill,[4,'hi']);

//  bill.myMethod(bob,4,'hi');
// let bartek = bob.bind(bill,5,"dowidzenia");
//bartek();

// var obj ={
//     _dataUstaw: 1920,
//     prop2:'Alien',
//     prop3(){
//     },
//     get dataUstaw(){
//         return this._dataUstaw;
//     },
//     set dataUstaw(_val){
//         this._dataUstaw =_val;
//     }
// };

// console.log(obj.dataUstaw);

// obj.dataUstaw=1950;
// console.log(obj.dataUstaw);

//object descriptors

// let obj = {
//     name: "Bonifacy",
//     age: 4
// };

// Object.defineProperty(obj, 'test', {
//     value: 'Shazam',
//     writable: false,
//     configurable: true,
//     enumerable: false
// });

// Object.defineProperty(obj, "Frank", {
//     configurable: true,
//     enumerable: true,
//     get: () => this.value,
//     set: (_val) => {
//         this.value = _val + " nowe";
//     }
// });

// obj.Frank = 123;

// for (prop in obj) {
//     //  console.log(prop);
// }
// //console.log(obj, obj.Frank);

// let obj = (function(){
//     let _prop1 = "Mama";
//     return{
//         prop2:1982,
//         get prop1(){
//            return _prop1;
//         },
//         set prop1(_val){
//             _props1=_val;
//         }
//     }
// })();
// for (let prop in obj){
//     console.log(prop);
// }

