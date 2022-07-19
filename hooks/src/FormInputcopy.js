import { useReducer, useRef } from 'react';


const FormInputcopy = () => {
    function reducer(state, action) {
    return {
        ...state,     //...:state에 있는 것을 가져와서 복사한다.
        [action.name]: action.value
    };
}

    const [state, dispatch] =useReducer(reducer, {
        Id: '',
        password: '',
        jumin1: '',
        jumin2: '',
        tel1: '',
        tel2: '',
        tel3: '',
    });

    const inputEl = useRef(null);
    const inputEl2 = useRef(null);
    const inputEl3 = useRef(null);
    const inputEl4 = useRef(null);
    const inputEl5 = useRef(null);
    const inputEl6 = useRef(null);
    const inputEl7 = useRef(null);
    const inputEl8 = useRef(null);
    

    const {Id, password, jumin1, jumin2, tel1, tel2, tel3} = state;
    const onChange = e => {
        dispatch(e.target);
        
    };

    const handleKeyPress = (e) =>{
    if(e.key === 'Enter') {
        if(e.target.name == "Id"){
            inputEl2.current.focus()
        } else if (e.target.name == "password"){
            inputEl3.current.focus()
        } else if (e.target.name == "jumin1"){
            inputEl4.current.focus()
        } else if (e.target.name == "jumin2"){
            inputEl5.current.focus()
        } else if (e.target.name == "tel1"){
            inputEl6.current.focus()
        } else if (e.target.name == "tel2"){
            inputEl7.current.focus()
        } else if (e.target.name == "tel3"){
            inputEl8.current.focus()
        }
    } 
};
    

    const onClick = () => {     //-3단계
        alert(`
        아이디: ${Id} 
        비밀번호: ${password} 
        주민번호: ${jumin1} - ${jumin2} 
        전화번호: ${tel1} - ${tel2} - ${tel3}`);
               //{}쓴 이유는 객체 형태로 파라미터 쓰려고
    };
        return (
            <div>
                <table align="center" border="1">
                    <tr>
	                    <td width="110">아이디</td>
	                    <td width="400">
		                <input type="text" name="Id" size="30"  
			            required placeholder="아이디" value={Id} onChange={onChange} onKeyPress={handleKeyPress} ref={inputEl}  />
	                </td>
                    </tr>

                    <tr>
	                    <td width="110">비밀번호</td>
	                    <td width="400">
		                <input type="password" name="password" size="30" 
			            placeholder="비밀번호" value={password} onChange={onChange} onKeyPress={handleKeyPress} ref={inputEl2} />
	                </td>
                    </tr>

                    <tr>
	                    <td width="110">주민번호</td>
	                    <td width="400"> <input type="text" name="jumin1" size="6" maxlength="6" placeholder="앞6자리" value={jumin1} onChange={onChange}  onKeyPress={handleKeyPress}ref={inputEl3}  /> - 
	                    <input type="password" name="jumin2" size="7" maxlength="7" placeholder="뒷7자리" value={jumin2} onChange={onChange} onKeyPress={handleKeyPress} ref={inputEl4}  />
	                </td>
                    </tr>

                    <tr>
                        <td>전화번호</td>
                        <td><input type="tel" name="tel1" size="3" maxlength="3" onKeyPress={handleKeyPress}onChange={onChange} ref={inputEl5}   value={tel1}  placeholder="3자리"/> -
                        <input type="tel" name="tel2" size="4" maxlength="4" onKeyPress={handleKeyPress}onChange={onChange}  ref={inputEl6}  value={tel2} placeholder="4자리"/> -
                        <input type="tel" name="tel3" size="4" maxlength="4" onKeyPress={handleKeyPress}onChange={onChange} ref={inputEl7}  value={tel3}  placeholder="4자리"/>
                    </td>
                    </tr>


                    <tr>
                     <td colspan="2" align="center">
                        <button onClick ={onClick} onKeyPress={handleKeyPress}onChange={onChange} ref={inputEl8}>확인</button>
                    </td> 
                    </tr>


                </table>
            </div>
        );
};

export default FormInputcopy;

       // -1단계 폼의 첫 값을 지정
    // const {Id, password, jumin1, jumin2, tel1, tel2, tel3} = form;
    // const onChange = e => {
    //     const nextForm = {
    //         ...form,
    //         [e.target.name]:e.target.value
    //     };
    //     setForm(nextForm);
       //-2단계

    // const onClick = () => {     //-3단계
    //     alert(`
    //     아이디: ${Id} 
    //     비밀번호: ${password} 
    //     주민번호: ${jumin1} - ${jumin2} 
    //     전화번호: ${tel1} - ${tel2} - ${tel3}`);
    //     setForm({
    //         Id:'',
    //         password:'',
    //         jumin1:'',
    //         jumin2:'',
    //         tel:''
    //     });               //{}쓴 이유는 객체 형태로 파라미터 쓰려고
    // };
    

//     return(
//         <div>
//             <h1 align="center">회원가입 연습</h1>
//         <table align="center" border="1">
// <tr>
// 	<td width="110">아이디</td>
// 	<td width="400">
// 		<input type="text" name="Id" size="30"  
// 			required placeholder="아이디" value={Id}onChange={onChange}  />
// 	</td>
// </tr>
// <tr>
// 	<td width="110">비밀번호</td>
// 	<td width="400">
// 		<input type="password" name="password" size="30" 
// 			placeholder="비밀번호" value={password}onChange={onChange}  />
// 	</td>
// </tr>

{/* <tr>
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
    </td> */}
//     </table>
//     </div>
// );
// }



