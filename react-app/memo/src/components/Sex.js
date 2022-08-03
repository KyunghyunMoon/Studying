import { Link } from 'react-router-dom';
import photo from './text_size.png';
const Sex = () => {
    return (
        <div>
           
            <Link to="/">메인</Link>

            <h2>&lt; 8월 3일 &gt;</h2>
                 
                    <li>count(*)은 해당 테이블 내의 데이터 개수 null값까지 포함한 개수</li><br/>
                    
                    <li>뷰(view):가상 테이블</li><br/>
                    
                    <li>transition: sql구문을 묶어놓은 단위구분</li><br/>
                    <li>commit: 변경된 내용 모두 영구 저장, 외부사람도 볼 수 있게 해줌</li><br/>
                    <li>rollback:취소하고 싶을 때 원본을 사본에 복사
                        alter: 숫자타입인데 문자로 바꾸고 싶으면 사용</li><br/>
                    <li>ddl명령문은 커밋하자마자 자동커밋. 그래서 트랜지션 기능 자체가 없음.</li><br/>
                
                    <li>insert: 데이터 변화가 일어남.. 이런 경우 커밋작업 필요
                    insert [into] 테이블 (열1, 열2,..) values (값1, 값2..)
                    값들의 순서,개수가 테이블의 정의된 순서, 개수와 동일해야함.</li><br/>
            
                    <li>ai는 값 필요 없음</li><br/>

                    <li>update 테이블 set 열1=값1, 열2=값2.. where 조건;</li><br/>
                    <li>delete from  rollback을 통해 복구 가능
                        truncate는 데이터는 지우고 테이블은 남김. 복구 불능<br/>
                  
                    </li>

                    
                    <ul>
                        <li>
                            now는 페이지 방문기록 남기는 용
                        </li>
                        <li>
                            cast는 반올림!
                            concat 문자와 문자연결
                        </li>
                        <img src = {photo} alt='sex'></img>
                    </ul>
        </div>
    );
};

export default Sex;