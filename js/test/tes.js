// var k = 0;
// for(var i = 1; i<3; i++) {
//     for(var j=1; j<4; j++){
//         console.log("i=", i, "j=", j, ", k=", ++k);

//     }
// }



//while구문
// var hap = 0;
// var i =1;

// while(i<3){
//     var j =1;
//     while(j<4) {
//         console.log("i=", i, "j=", j, ", k=", ++k);
//         j++
//     }
//     i++;
// }




// var hap = 0;
// var i = 1;

// while(i<=10) {
//     hap += i;
//     i++;
// }
// console.log(hap);


// for (var i =min_num; i<=max_num,i++){
//     for (var j = 2; j <i; i++){
//         if
    
// }




// ---------7.1일-----------


// var count = 0;

// do{
//     console.log(count);
//     count++;
// } while (count < 3);


// foo: {
//     console.log(1);
//     break foo;
//     console.log(2);

// }
// console.log('Done!')

// outer: 
//     for (var i = 0; i < 3; i++) {
//         for(var j = 0; j < 3; j++) {
//             if( j === 1)
//                 // break ;
//                 continue outer;
//             console.log('inner [${i}, ${j}]');
//         }
//     } 
//     console.log('Done!');




    // var x = 10;

    // var str = x.tostring();   ---정수형을 문자형으로 tostring
    // console.log(typeof str, str);
    // console.log(typeof x,x);

    // var a = 'AAA'
    // var val 10;
    // var b = val.tostring();
    // console.log(typeof a);
    // console.log(typeof a);



// var elem = null;
// var value = elem && elem.value;





// var person = {
//     name: 'Lee',
//     age :30,
//     sayHello:function(){
//         var name = 'aaa'
//         console.log(`hello! my name is${this.name}.`);
//         console.log(`hello! my name is${this.age}.`);
//         console.log(`hello! my name is${this.tel}.`);


//         str = `<table border = 1 align="center">`;
//         str += `<tr><th>name</th><th>age</th><th>tel</th></tr>`;
//         str += `<tr><td>${this.name}</td><td>${this.age}</td>${this.tel}</td></tr>`;
//         str += `</table>`;

//         return document.write(str);
//     }
//         sayHello () {
//         console.log(`hello! my name is${this.name}.`);
//         console.log(`hello! my name is${this.age}.`);
//     }
// };

// console.log(typeof person);

// console.log(person.name);    4개다 같은 값 나옴 / 같은 표현
// console.log(person['name']);
// console.log(person["name"]);
// console.log(person[`name`]);

// console.log(person.sayHello());

// person.tel = "010-2089-3463";
// console.log(person.tel);




// 성적표 만들기 2탄
// var person = {
//     hakbun: '',
//     name: '',
//     kor: 0,
//     eng: 0,
//     math: 0,
//     tot: 0,
//     avg: 0.0,
//     grade: '',
//     getTotal: function(){
//         this.tot = this.kor + this.eng + this.math;
//     },
//     getAvg: function(){
//         this.avg = this.tot / 3;
//     },
//     getGrade: function(){
//         switch (parseInt(this.avg / 10)) {
//             case 10:
//             case 9:
//             this.grade = "수";
//             break;
//             case 8:
//             this.grade = "미";
//             break;
//             case 7:
//             this.grade = "우";
//             break;
//             case 6:
//             this.grade = "양";
//             break;
//             default:
//             this.grade = "가";
//             break;
//         }
//     },
//     printData: function(){
//         str = `<table border = 1 align="center">`;
//         str += `<th>학번</th><th>이름</th><th>국어</th><th>영어</th><th>수학</th><th>총점</th><th>평균</th><th>등급</th></tr>`;
//         str += `<td>${this.hakbun}</td><td>${this.name}</td><td>${this.kor}</td><td>${this.eng}</td><td>${this.math}</td><td>${this.tot}</td><td>${this.avg}</td><td>${this.grade}</td></tr>`;
//         str += `</table>`;

//         return document.write(str);


//     }
// };

// person.hakbun = prompt("학번 입력");
// person.name = prompt("이름 입력")
// person.kor = parseInt(prompt("국어점수 입력"));
// person.eng = parseInt(prompt("영어점수 입력"));
// person.math = parseInt(prompt("수학점수 입력"));
// person.getTotal();
// person.getAvg();
// person.getGrade();
// person.printData();


// var person = {
//     name: 'Lee',
//     printPerson: function(){
//         return document.write(`name = ${this.name}, age=${this.age}`);
//     }
// };

// person.age = 20;
// document.write(`name=${person.name}, age=${person.age}`);
// document.write(`<br\>`)
// person.printPerson();




// [07.04]
// var f = function (x, y) {
//     return x + y;
// };    --> 익명함수 (;를 써주고 add와 같은 명칭 생략하고 변수에 집어 넣어야 함.)

// var res = f(3, 5)
// console.log(res);

// function add(x, y) {
//     return x + y;

// }
// var res = add(2, 5)
// console.log(res);



// console.dir(add);
// console.dir(sub);

// 자바 스크립트는 선언문을 먼저 해결


// console.log(add(2, 5));
// console.log(sub(2, 5));


// function add(x, y) {
//     return x + y;
// }

// var sub = function (x, y) {
//     return x - y;
// };



// function multiply(x, y){
//     if (x - y < 0)
//         return x * y;
//     else    
//         return x/ y;

// }
// var result = multiply(10, 5);
// console.log(result);



// --구구단 함수--

    // function input_number() {
    //     var num1, num2;      //-> 지역변수
    //     num1 = parseInt(prompt("첫 번째 수를 입력하라!"));
    //     num2 = parseInt(prompt("두 번째 수를 입력하라!"));
    //     return {num_1:num1, num_2:num2};
    // }

    // function number_compare(num1, num2){
    //     var min_num, max_num;
    //     if (num1 > num2){
    //         max_num = num1;
    //         min_num= num2;
    //     }

    //     else {
    //         max_num = num2;
    //         min_num = num1;
    //     }
    //     return{min_num:min_num, max_num:max_num};
    // }

    // function prime_number() {
    //     var num1, num2, min_num, max_num;
    //     var num = input_number();

    //     num1 = num.num_1;
    //     num2 = num.num_2;

    //     var min_max = number_compare(num1, num2);
        
    //     min_num = min_max.min_num;
    //     max_num = min_max.max_num;


    // alert("작은 수는" +min_num);
    // alert("큰 수는" +max_num);

    // document.write("<table border = '1' align = 'center'>");
    // document.write("<tr align = 'center'>");
    // for (var i = min_num; i <= max_num; i++)
    // {
    //     // document.write("<th>" + i + "단" + "</th>");
    //     document.write(`<th> ${i} 단 </th>`);                                        
    // }
    // document.write("</tr>");
    // for(var i = 2; i <=9; i++) 
    // {
    //     document.write("<tr align = 'center'>");
    //         for(var j = min_num; j <= max_num; j++) {
    //             // document.write("<td>" + i + "*" + j + "=" + (i*j) + "</td>");
    //             document.write(`<td> ${i} * ${j} = ${i*j} </td>`);                  
    //         }
    //         document.write("</tr>");
    //       }
    // document.write("</table>");
    // }

    // prime_number();
    
  


//     function input_num () {
// // 4. 3번에서 호출된 함수를 작동시킨다.
//     var num1 = parseInt(prompt("첫 번째 숫자를 입력하세요."));
//     var num2 = parseInt(prompt("두 번째 숫자를 입력하세요."));
//     var num3 = parseInt(prompt("곱셈의 최댓값을 입력하세요."));
//     return { num_1: num1, num_2: num2, num_3: num3};
//     // 5.  다른 함수에 값을 전달하기 위해 key 값을 이용한 객체 값으로 전달
// }

// function if_num (num1, num2) {
// // 8. 7번에서 입력받은 변수를 인자로 갖고 큰 수와 작은 수를 비교한다.
//     var min, max;

//     if (num1 < num2) {
//         var min = num1;
//         var max = num2;
//     } else {
//         var min = num2;
//         var max = num1;
//     }
//     return {min_num:min, max_num:max};
//     // 9. 위에서 비교한 숫자를 다른 함수에 값을 전달하기 위해 key 값을 이용한 객체 값으로 전달
// }

// function multiply_num () {
// // 2. 1번에서 호출된 함수를 작동시킨다.
//     var num1, num2, num3;

//     var num = input_num();
//     // 3. 작동 중에 존재하는 또다른 함수를 출력한다.

//     num1 = num.num_1;
//     num2 = num.num_2;
//     num3 = num.num_3;
//     // 6. 5번에서 받아온 값을 각각 변수를 지정해서 담아준다.

//     var min_max = if_num (num1, num2);
//     // 7. 6번에서 지정된 각각의 변수를 if문에 사용할 변수로써 인자로 지정한다.
    
//     var min = min_max.min_num;
//     var max = min_max.max_num;
//     // 10. 9번에서 지정된 객체 값을 각각의 변수를 지정해서 담아준다.

//     document.write("<table border='2'>");
//     document.write("<tr>");
//     function repeat0(n) {
//         for (var i = min; i <= n; i++) {
//             document.write(`<th>${i}단</th>`);
//         }
//     }
//     repeat0(max);
//     document.write("</tr>")
//     function repeat1(n) {
//         for (var j = 1; j <= n; j++) {
//             document.write("<tr>");
//             function repeat2(n) {
//                 for (var i = min; i <= n; i++) {
//                     document.write(`<td>${i} X ${j} = ${j * i}</td>`);
//                 }
//             }
//             repeat2(max);
//             document.write("</tr>");
//         }
//     }
//     repeat1(num3);
//     document.write("</table>");
// }

// multiply_num();
// // 1. 최종적으로 사용될 함수를 호출한다.




//- 소수구하기 함수로

// function input_data(){
//     var num1 = parseInt(prompt("첫 번째 숫자를 입력하세요"));
//     var num2 = parseInt(prompt("두 번째 숫자를 입력하세요"));
//     return {num_1:num1, num_2:num2};
// }


// var num = input_data();
// var num1 = num.num_1;
// var num2 = num.num_2;

// function minmax_proc(num1, num2){
//     if (num1 > num2) {
//        var max = num1;
//        var min = num2;
//     }

//     else {
//         var max = num2;
//         var min = num1;
//     }
//     return{min_num:min, max_num:max};
// }
// var min_max = minmax_proc(num1, num2);
// var min = min_max.min_num;
// var max =  min_max.max_num;
// var num1, num2, min_num, max_num;

// num1 = num.num_1;
// num2 = num.num_2;

// var min_max = minmax_proc(num1, num2);

// min_num = min_max.min_num;
// max_num = min_max.max_num;

// function prime_number(min_num, max_num
//  for(var i = min_num; i <= max_num; i++){
//     for(var j = 2; j < i; j++)
//     {
//         if(i % j == 0) {
//             break;
//         }
//     }
//         function total_count()


//         if(i == j){
//             console.log(i);
//             count++;
//         }
//  }
//  return count;
// }
// function total_count(cnt){
//     console.logo("총소수의 갯수 = ", cnt);
// }
// var num = input_data();
// var min_max = minmax_proc(num.num1, num.num2);
// var min_max = minmax_proc(num.num1, num.num2);
// var cnt = prime_number(min_max.min, min_max.max);
// total_count(cnt);



// var minmax_proc = (num1, num2) => {
//     if(num1 > num2)
// }



// [07.05]

// var var1 = 10
// for (var var2=1; var2<5; var2++){
//     console.log(var2);
// }
// console.log(var2);





// ------미 해결-------
// console.log(var1);
// if(10){
//     const var2 = 100;
//     console.log(var1);
//     console.log(var2);
// }
// console.log(var1);
// console.log(var2)




// var a = 1;
// var b = 1 ;
// var c = 1 ;
// var d = 1 ;
// var arr =[1,2,2,3] 
// var arr = new Array(1,1,1,1);
// var hap = 0 ;
// for (let i=0; i<arr.length; i++)
//     hap += arr[i]

// console.log(hap)





// var arr1 = [];        //var arr1 = new Array()
// console.log(arr1.length);
// arr1[0] = 10;
// arr1[1] = "AAA";
// arr1[2] = "BBB";
// console.log(arr1.length);
// for(let i = 0; i<arr1.length; i++){
//     console.log(arr1[i]);
// }

// delete arr1[1];
// for(let i = 0; i<arr1.length; i++){
//     console.log(arr1[i]);
// }





// const arr = [1, 2, 3];
// arr[0] =10;
// console.log(arr.length);
// console.log(arr);
// arr.splice(1, 1);
// console.log(arr.length);
// console.log(arr);





// const arr = [1 ,2 ,2, 3];
// console.log(arr.indexOf(2));
// console.log(arr.indexOf(4));
// console.log(arr.indexOf(2, 2)); -- 앞은 시작위치. 뒤는 찾을 위치





// const arr = [1, 2];
// console.log(arr);
// let result = arr.pop();
// console.log(result);
// console.log(arr);




// const arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);
// for (let i=0; i<3; i++)
//     console.log(arr.pop());



// const arr = [1, 2];
// console.log(arr);
// let res = arr.shift();
// console.log(res);
// console.log(arr);




// const arr1 = [1, 2];
// const arr2 = [3, 4];
// let result = arr1.concat(arr2);
// console.log(result);
// console.log(arr1);
// console.log(arr2);





// const arr = [1, 2, 3, 4];
// const result = arr.splice(1, 0 , 20);
// console.log(result);
// console.log(arr);




// const arr = [1, 2, 3, 1, 2];
// function removeALL(array, item) {
//     return array.filter(v => v % 2 == 0);

// }
// console.log(removeAll(arr, 2));





// points.sort((a, b) => b -a);   --- 내림차순 정렬 됨




// const todos = [
//     { id: 4, content: 'JavaScript'},
//     { id: 1, content: 'HTML'},
//     { id: 2, content: 'CSS'}
// ];

// function compare(key) {
//     return (a, b) => (a[key] > b[key] ? 1: (a[key] < b[key] ? -1 : 0));

// }
// todos.sort(compare('content'));
// console.log(todos);



// const numbers = [1, 2, 3];
// let pows = [];

// numbers.forEach(item => pows.push(item **2));
// console.log(pows);


// const numbers = [1, 4, 9];
// const roots = numbers.map(item => Math.sqrt(item))
// console.log(roots);
// console.log(numbers);


// const sum = [1, 2, 3, 4].reduce((accumulator, currentValue, index, array) =>
//     accumulator + currentValue, 10);

// console.log(sum);




// console.log(new Date(2020,2, 26));
// console.log(new Date (2020, 2,26, 10, 11));
// console.log(Date.now());
// rud1553617$



// const strObj = new String("MBC");
// console.log(strObj);
// console.log(strObj[0]);
// strObj[0] = 'm';    -문자열 일부 작업 불가
// const strObj2 = "KBS";
// console.log(strObj2[0]);




// [07.06]



