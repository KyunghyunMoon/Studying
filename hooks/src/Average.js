import { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
    console.log('평균값 계산 중..');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);      //앞에 numbers숫자만큼 reduce식 실행  (a->누적변수, b->데이터값)
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);
    
    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);  //빈배열이면 함수를 재사용

    const onInsert = useCallback(()=> {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]);

    const avg = useMemo(() => getAverage(list), [list]);    //useeffect와 차이점은 반환값.

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (           //map도 앞에 list값만큼 반복
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값: </b> {avg}
            </div>
        </div>
    );
};

export default Average;

