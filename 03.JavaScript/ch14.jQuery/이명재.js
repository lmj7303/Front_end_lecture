//Q1.두개의 값이 다른 정수를 매개변수로 받아 두수 중 작은 수부터 +3씩 증가시켜서 배열로 만들어 반환하는 함수 ans1(num1,num2)를 만드세요. 
//단, 배열에는 매개변수의 큰 수보다 더 큰수는 포함될수 없다. 또한 이 함수를 검증하는 코드, 즉 ans1(2,10)과 ans1(12,3)을 출력하는 코드도 만드시오.
// function ans1(num1,num2){
//     var ans1=[];
//     if (num1 >num2;){
//     num1=num1+3;
//     ans1.push(num1);
//     i++;
//     } else {
//             break
//     }
// }
// ans1(2,10);
// ans1(12,3)

//Q2.'991205'와 같이 년월일 6자리 문자를 매개변수로 받아 만 나이를 반환하는 함수 ans2(birthday)를 만드세요. 또한 이 함수를 검증하는 코드, 
//즉 ans2('991003')과 ans2('000919')의 결과를 출력하는 코드도 만드세요.
//주민번호 앞자리 입력시 나이 출력하는 함수

function ans2(birthday) {
    var date = new Date();
    var year = date.getFullYear();
    var month = (date.getMonth() + 1);
    var day = date.getDate();       
    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;
    var monthDay = month + day;
    birth = birth.replace('-', '').replace('-', '');
    var birthdayy = birth.substr(0, 2);
    var birthdaymd = birth.substr(3, 4); 
    var age = monthDay < birthdaymd ? year - birthdayy - 1 : year - birthdayy;
    return age;
} 
console.log(ans2(991003));
console.log(ans2(000919));

//Q3.라인의 수(홀수)를 매개변수로 삼아 다음과 같은 모양을 출력하는 함수 ans3(num)을 만드세요. 예를들어 ans3(5)의 결과는 다음과 같다.
 // *****
 //  *** 
 //   *  
 //  ***
 // *****
 //또한 이 함수를 검증하는 코드 즉, ans3(5)와 ans3(9)의 결과를 출력하세요.
//  function ans3(i){
//     var star='';
//     for (var i=0; i<9; i++){
//         if (i>=1){
//             for (var)
//         }
//     }
//  }
// ans3(9);
 //Q4.매개변수로 물품 가격 여러 개가 문자열 하나로 전해지고, 각 가격은 세미콜론(;)으로 구분되어 있습니다. 이가격을 배열로 만들고, 내림차순으로 정렬하여 
 //반환하는 함수 ans4(str)함수를 만드세요. 또한 이 함수를 검증하는 코드로 ans4('51900;83000;158000;367500;250000;59200;128500;1304000)
 //의 결과를 출력하는 코드도 만드세요.

 //Q5.id,이름,전화번호,email을 속성으로 갖고 toString() 메소드를 갖는 member 클래스를 만드세요. 또한 이 클래스로 james와 maria 객체를 생성하고, 
 //toString()메소드를 사용하여 객체안의 속성 정보를 출력하는 코드도 만드세요.