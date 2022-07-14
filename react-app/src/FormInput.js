import { useState } from 'react';

const FormInput = () => {
    const [form, setForm] = useState({
        Id:'',
        password:'',
        jumin1:'',
        jumin2:'',
        tel1:'',
        tel2:'',
        tel3:'',

    });    // -1단계 폼의 첫 값을 지정
    const {Id, password, jumin1, jumin2, tel1, tel2, tel3} = form;
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]:e.target.value
        };
        setForm(nextForm);
    };    //-2단계

    const onClick = () => {     //-3단계
        alert(`
        아이디: ${Id} 
        비밀번호: ${password} 
        주민번호: ${jumin1} - ${jumin2} 
        전화번호: ${tel1} - ${tel2} - ${tel3}`);
        setForm({
            Id:'',
            password:'',
            jumin1:'',
            jumin2:'',
            tel:''
        });               //{}쓴 이유는 객체 형태로 파라미터 쓰려고
    };
    

    return(
        <div>
            <h1 align="center">회원가입 연습</h1>
        <table align="center" border="1">
<tr>
	<td width="110">아이디</td>
	<td width="400">
		<input type="text" name="Id" size="30"  
			required placeholder="아이디" value={Id}onChange={onChange}  />
	</td>
</tr>
<tr>
	<td width="110">비밀번호</td>
	<td width="400">
		<input type="password" name="password" size="30" 
			placeholder="비밀번호" value={password}onChange={onChange}  />
	</td>
</tr>

<tr>
	<td width="110">주민번호</td>
	<td width="400"> <input type="text" name="jumin1" size="6" maxlength="6" placeholder="앞6자리" value={jumin1}onChange={onChange}  /> - 
	    <input type="text" name="jumin2" size="7" maxlength="7" placeholder="뒷7자리" value={jumin2}onChange={onChange} o />
	</td>
</tr>

<tr>
	<td>전화번호</td>
	<td><input type="tel" name="tel1" size="3" maxlength="3"onChange={onChange}  value={tel1}  placeholder="3자리"/> -
		<input type="tel" name="tel2" size="4" maxlength="4"onChange={onChange}  value={tel2} placeholder="4자리"/> -
		<input type="tel" name="tel3" size="4" maxlength="4"onChange={onChange}  value={tel3}  placeholder="4자리"/>
	</td>
</tr>
        
    <td colspan="2" align="center">
    <button onClick={onClick} >확인</button>
    </td>
    </table>
    </div>
);
}
export default FormInput;