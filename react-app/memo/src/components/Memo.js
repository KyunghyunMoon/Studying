import React from 'react';
import './Memo.scss';
import { Link } from 'react-router-dom';


const Memo = () => {
    return (
        <div className='hoho'>
        <div className='ho'>
          <h1 align="center" class name="head">SQL</h1>
        </div>
        <li><Link to="/sex">2페이지</Link></li>
        <li><Link to="/profiles/velopert">3페이지</Link></li>
        <li><Link to="/profiles/void">4페이지</Link></li>
        <br/>
        <li><Link to="/articles">목록</Link></li>
          <h2>&lt; 8월 2일 &gt;</h2>
         <ul>
            <li>DDL: create database, create table, drop table</li>
            <li>DML: INSERT, UPDATE, DELETE, SELECT</li>
            <li>DCL: (X)</li>
            <li>COLUMN LEVEL: 컬럼을 정의하며 기본키 설정
                TABLE LEVLEL: 별도로 제약조건을 기술하는 방법</li><br/>
            
            <li>having은 group by와 같이 사용.
                order by: 정렬</li><br/>
            
            <li>primary key(emp_no,title,from_date)</li><br/>
            
            <li>default:값을 입력하지 않아도 자동으로 default값 입력
                첫 번째로 볼 것? desc </li><br/>
        
            
            <li>select  +  column name ( , last name)</li><br/>
            
            <li>enum: 열거타입</li><br/>
            
            <li>char:고정길이. 무조건 숫자만큼 확보 (정해진 값에 사용)
                varchar:최대. 숫자만큼 최대치 지정 (가변적인 값에 사용)/메모리 공간 절약가능</li><br/>
            
            <li>unique는 null값이 허용이 됨.
                pri는 중복값 허용 x.
                일반적인 서브쿼리의 값은 별다른 연산자가 없으면 값이 여러개 나오면 안 됨.</li><br/>
            

            <li>any: in과 같다 한가지만 만족해도 가능
            <br/>
                소문자가 대문자보다 큼 소문자:97, 대문자:67
                숫자가 글자보다 큼   숫자:48
            <br/>
                 distinct: 중복제거</li>

                <li>having은 반드시 group by와 함께 사용. 단독으로 사용x</li><br/>
            
            </ul>

            

        </div>
    );
};

export default Memo;