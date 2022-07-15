//함수를 클래스형으로 변환

import { Component }  from 'react';

class InputHamsu extends Component {
    state = {
        username:'',
        password:'',
        juso1:'',
        juso2:'',
        tel1:'',
        tel2:'',
        tel3:'',    
    };
    
   handleChange = (e) => {
    setTimeout(() => console.log(e), 500);
    this.setState({
        [e.target.name]:e.target.value
    });
   }


   //on

   handleKeyPress = (e) =>{
    if(e.key === 'Enter') {
        if(e.target.name == "username"){
            this.input_pw.focus();
        } else if (e.target.name == "password"){
            this.input_jumin1.focus();
        } else if (e.target.name == "jumin1"){
            this.input_jumin2.focus();
        } else if (e.target.name == "jumin2"){
            this.input_tel1.focus();
        } else if (e.target.name == "tel1"){
            this.input_tel2.focus();
        } else if (e.target.name == "tel2"){
            this.input_tel3.focus();
        } else if (e.target.name == "tel3"){
            this.input_btn.focus();
        }
    }
   };

   handleClick = () => {
    alert(`
    아이디: ${this.state.username}
    비밀번호: ${this.state.password}
    주소: ${this.state.juso1} / ${this.state.juso2} 
    전화번호: ${this.state.tel1} - ${this.state.tel2} - ${this.state.tel3} `);

    this.setState({
        username:'',
        password:'',
        juso1:'',
        juso2:'',
        tel1:'',
        tel2:'',
        tel3:'',   
    });
   }


   render() {
    return(
        <div>
            <h1 align="center">🚚 문팡 주문서 🚚</h1>
            <table align="center" border="1">
            <tbody>

        <tr>
            <td width="110" align='center'>아이디</td>
            <td width="400">
                <input type="text" name="username" size="30" required placeholder="아이디" value={this.state.username} onChange={this.handleChange} onKeyPress={this.handleKeyPress} ref={(ref) => { this.input_username = ref;}}/>
            </td>
        </tr>

        <tr>
            <td width="110" align='center'>비밀번호</td>
            <td width="400">
                <input type="password" name="password" size="30" 
                    placeholder="비밀번호" value={this.state.password} onChange={this.handleChange} onKeyPress={this.handleKeyPress} ref={(ref) => { this.input_password = ref;}} />
            </td>
        </tr>


        <tr>
            <td width="110"align='center'>주소</td>
            <td width="400"><input type="text" name="juso1" value={this.state.juso1} onChange={this.handleChange} placeholder="주소" size="30"onKeyPress={this.handleKeyPress} ref={(ref) => { this.input_juso1 = ref;}} /><br />  
                <input type="text" name="juso2" value={this.state.juso2} onChange={this.handleChange} onKeyPress={this.handleKeyPress} ref={(ref) => { this.input_juso2 = ref;}} placeholder="상세주소" size="20" />
            </td>
        </tr>


        <tr>
            <td align='center'>전화번호</td>
            <td><input type="tel" name="tel1" value={this.state.tel1} onChange={this.handleChange} onKeyPress={this.handleKeyPress} ref={(ref) => { this.input_tel1 = ref;}}  placeholder="3자리" size="3" maxLength="3"/> -
                <input type="tel" name="tel2" value={this.state.tel2} onChange={this.handleChange} onKeyPress={this.handleKeyPress} ref={(ref) => { this.input_tel2 = ref;}} placeholder="4자리" size="4" maxLength="4"/> -
                <input type="tel" name="tel3" value={this.state.tel3} onChange={this.handleChange} onKeyPress={this.handleKeyPress} ref={(ref) => { this.input_tel3 = ref;}} placeholder="4자리" size="4" maxLength="4"/>
            </td>

        </tr>
            <td colspan="2" align="center" ><button onClick ={this.handleClick} ref={(ref) => { this.input_btn = ref;}} button style={{color: 'blue'}}>확인</button></td>   
            </tbody>       
            </table>
            </div>
                );
            }
        };


export default InputHamsu;