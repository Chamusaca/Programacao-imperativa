// !true
console.log(!true);
// !false
console.log(!false);
// !!false
console.log(!!false);
// !!true
console.log(!!true);
// !1
console.log(!1);
// !!1
console.log(!!1);
// !0
console.log(!0);
// !!0
console.log(!!0);
// !!"" 
console.log(!!"" );

let x = 5 ;
let y = 9;
/*
x < 10 && x!==5
x>9 || x===5
!(x===y)
*/
console.log(x < 10 && x!==5);
console.log(x>9 || x===5);
console.log(!(x===y));

/*
let x=10
let y ="a"
y==="b" || x >= 10
*/
x=10
y ="a"
console.log(y==="b" || x >= 10);

/*
let x=3
let y=8
!(x == "3" || x === y) && !(y !== 8 && x <= y)
*/
x=3
y=8
console.log(!(x == "3" || x === y) && !(y !== 8 && x <= y));

/*
let str = ""
let msg = "haha!"
let eBonito = "false"
!((str || msg) && eBonito)
*/
let str = "";
let msg = "haha!";
let eBonito = "false";
console.log(!((str || msg) && eBonito));
