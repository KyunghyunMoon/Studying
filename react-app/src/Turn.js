import { useState } from 'react';
import run_0 from './0.png';
import run_1 from './1.png';
import run_2 from './2.png';
import run_3 from './3.png';
import run_4 from './4.png';
import run_5 from './5.png';

const Turn = () => {
    const [run0, setRun0]=useState(
        <img src ={run_0} alt="none"/> 
    )

    const onClick0 = () => {
        setRun0(<img src ={run_0} alt="none"/> )
    }

    const onClick1 = () => {
        setRun0(<img src = {run_1} alt="none"/>)
    }

    const onClick2 = () => {
        setRun0(<img src = {run_2} alt="none"/>)
    }

    const onClick3 = () => {
        setRun0(<img src = {run_3} alt="none"/>)
    }

    const onClick4 = () => {
        setRun0(<img src = {run_4} alt="none"/>)
    }

    const onClick5 = () => {
        setRun0(<img src = {run_5} alt="none"/>)
    }

    return (
        <div>
            {run0}<br/><br/><br/>
            <button onClick={onClick0}>달려0</button>
            <button onClick={onClick1}>달려1</button>
            <button onClick={onClick2}>달려2</button>
            <button onClick={onClick3}>달려3</button>
            <button onClick={onClick4}>달려4</button>
            <button onClick={onClick5}>달려5</button>

{/*변수, 상수는 무조건 {}안에 사용/   */}


        </div>
    );
};

export default Turn;