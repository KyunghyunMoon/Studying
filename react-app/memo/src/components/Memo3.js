import React from 'react';
import './Memo.scss';
import { Link } from 'react-router-dom';

const Memo3 = () => {
    return (
        <div>
            <Link to="/">메인</Link>

            08.09           
            mkdir:  디렉토리 만드는 것
            package.json: 라이브러리 관리
            nodemon:서버쪽 프로그램 변화 발생 시 자동으로 서버 재구동!
            
            0~1023: well known port
            우리가 사용할 수 있는 포트: 1024~65535: port는 16bit로 표현

            app.get: get 방식 요청 처리, http의 head임 heap
            app.post: post방식 요청 처리 명시적으로 post로 지정해주는 것 이외 나머지는 get방식이라고 생각하면 됨
            http프로토콜: 헤더 + 바디 :Hyper Text Transfer Protocol
            {/* <form action ="" method="get/post" enctype=""></form> */} enctype: 파일첨부
            axios.get()
            axios.post()
            정상적으로 처리되면 200 오류나면 500

            process.env: 환경변수를 만들어주는 작업
            객체형식을 다루기 위해 url 코드를 쓴다.
            
            쿠키: 일정시간 지나면 자동 소멸. 중요한 것은 쿠키형태로 관리하면 안 됨. 보완에 취약함.
            세션: 클라이언트와 서버간의 연결관계 유지
            store: 쿠키 정보 별도 저장.
            npm i express -mysql -session을 써서 데이터를 관리하겠다

            mysql 연동문제 해결
            create user 'root'@'%' identified by '123456';

            grant all privileges on *.* to 'root'@'%' with grant option;

            flush privileges; 방금 설정한 권한을 적용될 수 있도록.

            {/* <form action""method=""enctype"""> */}
                {/* <input type="file" _> */}

            req.body: body-parser 미들웨어가 만드는 요청의 본문 해석 객체
            res.send(문자열 or 객체):  
            res.sendFile:

            08.10
            npm run dev
            yarn add axios express body-parser mysql
            yarn add nodemon

            09.06
            파이썬이란?
            인터프리터 언어(Interpreter)
            compiler: 컴퓨터가 번역할 수 있게 해주는 것

            클래스 = 속성 + 메서드
            객체 = 속성 + 메서드(함수)
            플라스크
            numpy, pandas, matplotlib, seaborry
            파이선은 모든 데이터를 객체로 표현!

            객체
            클래스를 이용해서 만들어지며 속성과 메서드로 구성
            
            메서드: 객체의 속성을 다루기 위한 행위를 정의한 것
            식별자: 대소문자를 구분. 길이 제한 x
            변수: 변수에 값이 대입되는 순간 변수 생성
            힙: 객체 저장
            스택: 변수 저장
            list = []
            dict = {}
            
        </div>
    );
};

export default Memo3;