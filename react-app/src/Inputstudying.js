import { useState } from 'react';

const Inputstudying = () => {
    const[form, setForm] = useState({
            username:'',
            password:'',
            juso1:'',
            juso2:'',
            tel1:'',
            tel2:'',
            tel3:'',
            
        });
   
    const {username, password, juso1, juso2, tel1, tel2, tel3} = form;
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]:e.target.value
        };
        setForm(nextForm);
    };

    const onClick = () => {
        alert(` 
        아이디: ${username}

        비밀번호: ${password}

        주소: ${juso1} / ${juso2}
        
        전화번호: ${tel1} - ${tel2} - ${tel3}
        `);

    setForm({
        username:'',
        password:'',
        juso1:'',
        juso2:'',
        tel1: '',
        tel2: '',
        tel3: '',
    });
    };

    return(
        <div>
            <h1 align="center">🚚 문팡 주문서 🚚</h1>
            <table align="center" border="1">
                <tbody>

<tr>
	<td width="110" align='center'>아이디</td>
	<td width="400">
		<input type="text" name="username" size="30" required placeholder="아이디" value={username} onChange={onChange} />
	</td>
</tr>

<tr>
	<td width="110" align='center'>비밀번호</td>
	<td width="400">
		<input type="password" name="password" size="30" 
			placeholder="비밀번호" value={password} onChange={onChange} />
	</td>
</tr>


<tr>
	<td width="110"align='center'>주소</td>
	<td width="400"><input type="text" name="juso1" value={juso1} onChange={onChange} placeholder="주소" size="30" /><br />  
	    <input type="text" name="juso2" value={juso2} onChange={onChange} placeholder="상세주소" size="20" />
	</td>
</tr>


<tr>
	<td align='center'>전화번호</td>
	<td><input type="tel" name="tel1" value={tel1} onChange={onChange} placeholder="3자리" size="3" maxLength="3"/> -
		<input type="tel" name="tel2" value={tel2} onChange={onChange} placeholder="4자리" size="4" maxLength="4"/> -
		<input type="tel" name="tel3" value={tel3} onChange={onChange} placeholder="4자리" size="4" maxLength="4"/>
	</td>

</tr>
            <td colspan="2" align="center" ><button onClick={onClick} button style={{color: 'blue'}}>확인</button></td>   
            </tbody>       
            </table>
            </div>
        );
    }

export default Inputstudying;
