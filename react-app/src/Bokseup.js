// const Bokseup = ({ name, children }) => {
    
//     return (<div>헤이 모두들 안녕 내가 누군지 아니? 내 이름은{name}이다!<br />
//                 children 값은 {children}입니다.  
//         </div>
//     );
// };
// Bokseup.defaultProps = {
//     name: '산초'
// };

// export default Bokseup;
// import { Component } from 'react';
// import PropTypes from 'prop-types';   
// class Bokseup extends Component {
//     render() {
//         const{ name, favoriteNumber, children } = this.props; 
//         return(
//               <div>
//             내 이름은 {name}입니다.<br />
//             children 값은 {children} 입니다
//             <br />
//             제가 좋아하는 숫자는 {favoriteNumber}입니다.
//         </div>
//         );
//     }     
// }
// Bokseup.defaultProps = {
//     name: '기본 이름'
// };

// Bokseup.propTypes = {
//     name: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired
// };
// export default Bokseup;







import { useState } from 'react'; 
import Loading from "./5.png/"
import "./App.css";
// const Bokseup = () => {
//     const [message, setimg] = useState('');
//     const onClickEnter = () => <img src = {Loading} className="5.png" alt="logo" />
//     const onClickLeave = () => setimg('bye');
     
//     const [color, setColor] = useState('black');
  
//     return (
//         <div>
//           <button onClick={onClickEnter}>이미지</button>
//             <button onClick={onClickLeave}>퇴장</button>
//             <h1 style={{color}}>{message}</h1>
//             <button style={{color: 'red'}} onClick={()=> setColor('red')}>빨간색</button>   
//             <button style={{color: 'green'}} onClick={() => setColor('green')}>초록색</button>
//             <button style={{color: 'blue'}} onClick={() => setColor('blue')}>파랑</button>     
//         </div>
//     );
// };

function Bokseup(){
    return (
        <div className = "App">
            {/* <div className='a1image'> */}
            <img className='phoneImage' alt="runningman" src="5.png" />
            {/* </div> */}
        </div>
    )
}

export default Bokseup;