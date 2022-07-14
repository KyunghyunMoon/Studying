// import { render } from '@testing-library/react';
// import { Component } from 'react';

// class Counter extends Component {
//     constructor(props) {   //->생성자(객체가 생성될 때 자동호출 /마지막에 한 번 호출)
//         super(props);      // -> 다른 문장보다 먼저 배치.
//         this.state = {
//             number: 0,
//             fixedNumber: 0
//         };
//     }
//     render(){         //랜더링은 상태가 변경돼야 발동.
//         const { number, fixedNumber } =this.state; 
//         return( 
//             <div>
//                 <h1>{number}</h1>  
//                 <h2>바뀌지 않는 값: {fixedNumber} </h2>
//                 {/* <button
//                 onClick={() => {this.setState({number: number + 1});
//         }}           //이벤트 함수는 화살표함수를 활용하자 */}
//             <button 
//             onClick={() => 
//             //     this.setState((prevState) => {
//             //         return {
//             //             number: prevState.number + 1,                 
//             //         }
//             //     })
//             // }}
//             this.setState(
//                 {number: number+ 1,
//                 },
//                 () => {
//                     console.log("방금 serState가 호출");
//                     console.log(this.state);
//                 }
//             );
//         >
//             +1
//         </button>
//         </div>
//         );
//     }
// }
// export default Counter;