import { useState } from 'react';
import run_0 from './0.png';
import run_1 from './1.png';
import run_2 from './2.png';
import run_3 from './3.png';
import run_4 from './4.png';
import run_5 from './5.png';
import run_6 from './6.png';
import run_7 from './7.png';
import run_8 from './8.png';
import run_9 from './9.png';
import run_10 from './10.png';
import run_11 from './11.png';
import run_12 from './12.png';
import run_13 from './13.png';
import run_14 from './14.png';


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

    const onClick6 = () => {
        setRun0(<img src = {run_6} alt="none"/>)
    }

    const onClick7 = () => {
        setRun0(<img src = {run_7} alt="none"/>)
    }

    const onClick8 = () => {
        setRun0(<img src = {run_8} alt="none"/>)
    }

    const onClick9 = () => {
        setRun0(<img src = {run_9} alt="none"/>)
    }

    const onClick10 = () => {
        setRun0(<img src = {run_10} alt="none"/>)
    }

    const onClick11 = () => {
        setRun0(<img src = {run_11} alt="none"/>)
    }

    const onClick12 = () => {
        setRun0(<img src = {run_12} alt="none"/>)
    }

    const onClick13 = () => {
        setRun0(<img src = {run_13} alt="none"/>)
    }

    const onClick14 = () => {
        setRun0(<img src = {run_14} alt="none"/>)
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
            <button onClick={onClick6}>달려6</button>
            <button onClick={onClick7}>달려7</button>
            <button onClick={onClick8}>달려8</button>
            <button onClick={onClick9}>달려9</button>
            <button onClick={onClick10}>달려10</button>
            <button onClick={onClick11}>달려11</button>
            <button onClick={onClick12}>달려12</button>
            <button onClick={onClick13}>달려13</button>
            <button onClick={onClick14}>달려14</button>

{/*변수, 상수는 무조건 {}안에 사용/   */}


        </div>
    );
};

export default Turn;