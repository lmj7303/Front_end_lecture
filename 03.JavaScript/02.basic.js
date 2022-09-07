var a=10;
a+=20;
console.log(a);

const b=10;
b+=20;
console.log(b);
// 웬만하면 const로 변수를 선언할 것
// 값이 변하는 변수만 var로 선언할 것(2015년 이전)
// let을 사용할 것

const a=10;
let b=20;
b+=a;
console.log(a,b);

var c=10;
var c=20;

let d=10;
d=20;