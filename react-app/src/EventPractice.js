import { Component} from 'react';

class EventPractice extends Component {

    // 125p onChange
//     render() {
//         return (
//         <div>
//             <h1>이벤트 연습</h1>
//             <input
//             type="text"
//             name="message"
//             placeholder="아무거나 입력해 보세요이이이잉"
//             onChange={
//                 (e) => {
//                     console.log(e);       //(e.target.value) 이벤트 값 바로 불러오기
//                 }
//             }
//         />
//         </div>
//     );
//     }    
// }

// 128p state에 input담기
render() {
    
    state = {
        message : ''
        };
        render(){
            return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요이이이잉"
                onChange={
                    (e) => {
                        this.setState({
                            message: e.target.value
                        });
                        console.log(this.state.message);
        }}
    />
    <button onClick={
        () => {
            alert(this.state.message);
            this.setState({
                message:''
            });
            console.log(this.state.message);
        }
    }>확인</button>
    </div>
);
}








// 130p 임의 메서드만들기

    // state = {
    //     username: '',
    //     Id: '',
    //     message : ''
    //     };
        // constructor(props) {                   //생성자의 역할: 객체를 생성함과 동시에 초기화작업.
        //     super(props);                      //super: 부모class에 있는 생성자 호출
        //     this.handleChange = this.handleChange.bind(this);    //bind는 매핑 시키기 위한 것
        //     this.handleClick = this.handleClick.bind(this);
        // }
//         handleChange = (e) => {         //전달되는 e는 이벤트 객체
//             this.setState({
//                 message:e.target.value
//             });
//         }
//         handleClick =() => {
//             alert(this.state.message);
//             this.setState({
//                 message:''
//             });
//         }

//         render(){
//             return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                 type="text"
//                 name="message"
//                 placeholder="아무거나 입력해 보세요이이이잉"
//                 value={this.state.message}
//                 onChange={this.handleChange}ㅓ
//     />
//     <button onClick={this.handleClick}>확인</button>
//     </div>
// );
// }
// }





// 134p
// handleChange = (e) => {         //전달되는 e는 이벤트 객체
//             this.setState({
//                 [e.target.name]:e.target.value
//             });
//         }
//         handleClick =() => {
//             alert('이름: ' + this.state.username  + '아이디 :' +  this.state.Id + '메시지: ' + this.state.message);
//             this.setState({
//                 username:'',
//                 Id: '',
//                 message:''
//             });
//         }


//         handleKeyPress = (e) => {                        //136p 추가
//             if(e.key === 'Enter'){
//                 this.handleClick();
//             }
//         }

//         render(){
//             return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                 type="text"
//                 name="username"
//                 placeholder="사용자명"
//                 value={this.state.username}
//                 onChange={this.handleChange}
//     />
    
//                 <input
//                 type="text"
//                 name="message"
//                 placeholder="아무거나 입력해 보세요이이이잉"
//                 value={this.state.message}
//                 onChange={this.handleChange}
//                 onKeyPress={this.handleKeyPress}
//     />

//     <input
//                 type="text"
//                 name="Id"
//                 placeholder="아이디"
//                 value={this.state.Id}
//                 onChange={this.handleChange}
//                 onKeyPress={this.handleKeyPress}
//     />
//     <button onClick={this.handleClick}>확인</button>
//     </div>
// );
// }


export default EventPractice;