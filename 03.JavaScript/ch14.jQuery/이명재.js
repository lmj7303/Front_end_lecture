//Q1.두개의 값이 다른 정수를 매개변수로 받아 두수 중 작은 수부터 +3씩 증가시켜서 배열로 만들어 반환하는 함수 ans1(num1,num2)를 만드세요. 
//단, 배열에는 매개변수의 큰 수보다 더 큰수는 포함될수 없다. 또한 이 함수를 검증하는 코드, 즉 ans1(2,10)과 ans1(12,3)을 출력하는 코드도 만드시오.
function ans1(num1, num2) {
    let small = (num1 < num2) ? num1 : num2;
    let big = (num1 > num2) ? num1 : num2;
    let result = [];
    for (i=small; i<=big; i+=3) {
        result.push(i);
    }
    return result;
}
console.log(ans1(2,10));        // [ 2, 5, 8 ]
console.log(ans1(12,3));        // [ 3, 6, 9, 12 ]

//Q2.'991205'와 같이 년월일 6자리 문자를 매개변수로 받아 만 나이를 반환하는 함수 ans2(birthday)를 만드세요. 또한 이 함수를 검증하는 코드, 
//즉 ans2('991003')과 ans2('000919')의 결과를 출력하는 코드도 만드세요.
//주민번호 앞자리 입력시 나이 출력하는 함수

function ans2(birthday) {
    let bYear = parseInt(birthday.substring(0,2));
    bYear = (bYear > 22) ? 1900+bYear : 2000+bYear;
    let bMonth = parseInt(birthday.substring(2,4));
    let bDay = parseInt(birthday.substring(4));
    console.log(bYear, bMonth, bDay);

    let today = new Date();
    let tYear = today.getFullYear();
    let tMonth = today.getMonth()+1;
    let tDay = today.getDate();

    if (tMonth > bMonth)
        return tYear-bYear;
    if (tMonth < bMonth)
        return tYear-bYear-1;
    if (tDay >= bDay)
        return tYear-bYear;
    return tYear-bYear-1;
}
console.log(ans2('991003'));
console.log(ans2('000919'));
console.log(ans2('000920'));


//Q3.라인의 수(홀수)를 매개변수로 삼아 다음과 같은 모양을 출력하는 함수 ans3(num)을 만드세요. 예를들어 ans3(5)의 결과는 다음과 같다.
 // *****
 //  *** 
 //   *  
 //  ***
 // *****
 //또한 이 함수를 검증하는 코드 즉, ans3(5)와 ans3(9)의 결과를 출력하세요.
 function ans3(num) {
    let star = '';
    for (let i=num; i>=1; i-=2) {
        let line = '';
        for (let k=(i-1)/2; k<(num-1)/2; k++)
            line += ' ';
        for (let k=0; k<i; k++)
            line += '*';
        star += line + '\n';
    }
    for (let i=(num+1)/2; i<=num; i+=2) {
        let line = '';
        for (let k=(i-1)/2; k<(num-1)/2; k++)
            line += ' ';
        for (let k=0; k<i; k++)
            line += '*';
        star += line + '\n';
    }
    return star;
}
console.log(ans3(9));
console.clear();

 //Q4.매개변수로 물품 가격 여러 개가 문자열 하나로 전해지고, 각 가격은 세미콜론(;)으로 구분되어 있습니다. 이가격을 배열로 만들고, 내림차순으로 정렬하여 
 //반환하는 함수 ans4(str)함수를 만드세요. 또한 이 함수를 검증하는 코드로 ans4('51900;83000;158000;367500;250000;59200;128500;1304000)
 //의 결과를 출력하는 코드도 만드세요.
 function ans4(str) {
    prices = str.split(';').map(x => parseInt(x)); 
    return prices.sort((a,b) => b-a);      // a - b: 오름차순, b - a: 내림차순
}
console.log(ans4('51900;83000;158000;367500;250000;59200;128500;1304000'));

 //Q5.id,이름,전화번호,email을 속성으로 갖고 toString() 메소드를 갖는 member 클래스를 만드세요. 또한 이 클래스로 james와 maria 객체를 생성하고, 
 //toString()메소드를 사용하여 객체안의 속성 정보를 출력하는 코드도 만드세요.
 class Member {
    constructor(id, name, email, tel) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.tel = tel;
    }
    toString() {
        return `id는 ${this.id}, 이름은 ${this.name}, 이메일은 ${this.email}, 전화번호는 ${this.tel}`;
    }
}

james = new Member('james', 'James', 'james@kis.com', '010-2345-6789');
console.log(james.toString());