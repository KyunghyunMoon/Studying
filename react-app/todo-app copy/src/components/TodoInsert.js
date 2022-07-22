import { useState, useCallback } from 'react';

const FormInput = ( { onInsert }) => {
    const [Id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [mail1, setMail1] = useState('');
    const [mail2, setMail2] = useState('');
    const [gender, setGender] = useState('');
 

    const onChange1 = useCallback(
        (e) => {
            setId(e.target.value);
        }, []);

    const onChange2 = useCallback(
        (e) => {
            setPassword(e.target.value);
        }, []);

    const onChange3 = useCallback(
        (e) => {
            setMail1(e.target.value);
        }, []);
        
    const onChange4 = useCallback(
        (e) => {
            setMail2(e.target.value);
        }, []);

    const onChange5 = useCallback(
        (e) => {
            setGender(e.target.value);
        }, []);    

    
    const onSubmit = useCallback (
        (e) => {
            onInsert(
            <table align="center" border="2" >
        <tbody>
        <tr>
            <th width="200px" height="30px">아이디</th>
            <td width="500">
            <input 
                type="text"
                name="Id"
                width="400"
                size="30"  
                required placeholder="아이디"
                value={Id}
            />
        </td>
        </tr>
        
        <tr>
            <th width="150px" height="30px">비밀번호</th>
            <td>
               {password}
               
            </td>
        </tr>

        <tr>
            <th width="150px" height="30px">이메일</th>
            <td>
                {mail1}
                @
                {mail2}
                
            </td>
        </tr>

        <tr>
            <th width="150px" height="30px">성별</th>
            <td>
                <input
                    type = 'radio'
                    name = 'gender'
                    value = {e.gender}
                    className = 'gman'
                /> <p className='man'>남자</p>
                <input
                    type = 'radio'
                    name = 'gender'
                    value = {e.gender}
                    className = 'gwoman'
                /> <p className='woman'>여자</p>
              
            </td>
        </tr>
        </tbody>
        </table>
      
);
setId('');
setPassword('');
setMail1('');
setMail2('');
setGender(false);
e.preventDefault();
    }, [onInsert, Id, password, mail1, mail2, gender]);

    return (
        <form
            className='ToDoInsert'
            onSubmit={onSubmit}
        >
        
        <table>
            <tbody>
            <tr>           
            <th width="200px" height="30px">아이디</th>
            <td width="500">
            <input 
                type="text"
                name="Id" 
                size="30" 
                width="400" 
                required placeholder="아이디"
                onChange = {onChange1}
                value={Id}
            />
            </td>
        </tr>
        
        <tr>
            <th width="150px" height="30px">비밀번호</th>
            <td>
               <input
                type="password"
                width="400"
                name="password"
                size="30"
                placeholder='비밀번호'
                onChange={onChange2}
                value={password}
                />
             
            </td>
        </tr>

        <tr>
            <th width="150px" height="30px">이메일</th>
            <td>
                <input
                    className='mail1'
                    placeholder='이메일입력'
                    onChange={onChange3}
                    value={mail1}
                />
                &nbsp;@&nbsp;
                <select
                    className='mail2'
                    name='mail2'
                    onChange={onChange4}
                    value={mail2}
                >
                    <option value="">메일주소선택</option>
                    <option value="hanmail.net" >hanmail.net</option>
                    <option value="naver.com" >naver.com</option>
                    <option value="nate.com" >nate.com</option>
                </select>
               
            </td>
        </tr>

        <tr>
            <th width="150px" height="30px">성별</th>
            <td className='genders'>
                <input
                    type = 'radio'
                    name = 'gender'
                    value = '남자'
                    className = 'gman'
                    onChange={onChange5}
                /> <p className='man'>남자</p>
                
                <input
                    type = 'radio'
                    name = 'gender'
                    value = '여자'
                    className = 'gwoman'
                    onChange={onChange5}
                /> <p className='woman'>여자</p>
               
            </td>
        </tr>
          <td align="center">
            <button >
                등록
            </button>
        </td>
        </tbody>
        </table>
        </form>
    );
};


export default FormInput;