import { useState, useCallback } from 'react';

const FormInput = ( { onInsert }) => {
    const [Id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [mail1, setMail1] = useState('');
    const [mail2, setMail2] = useState('');
    const [gender, setGender] = useState('');
    // const [man, setMan] = useState('');
    // const [woman, setWoman] = useState({
        // Id:'',
        // password:'',
        // mail1: '',
        // mail2: '',
        // man: '',
        // woman: '',
    
    
    

     // -1단계 폼의 첫 값을 지정
    // const {Id, password, mail1, mail2, man, woman} = form;
    // const onChange = e => {
    //     const nextForm = {
    //         ...form,
    //         [e.target.name]:e.target.value
    //     };
    //     setForm(nextForm);
    // };  
    
    //-2단계

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
        
    // const onChange5 = useCallback(
    //     (e) => {
    //         setMan(e.target.value);
    //     }, []);
    
    // const onChange6 = useCallback(
    //     (e) => {
    //         setWoman(e.target.value);
    //     }, []);    


    
    // const onSubmit = useCallback (
    //     e => {
    //         onInsert(form);
    //         setForm('');
            
    //         e.preventDefault();
    //     },
    //     [onInsert, form],
    // );


    // const onClick = () => {     //-3단계
    //     alert(`
    //     아이디: ${Id} 
    //     비밀번호: ${password} 
    //     메일: ${mail1} @ ${mail2} 
    //     성별: ${gender}`);
        // setForm({
        //     Id:'',
        //     password:'',
        //     mail1:'',
        //     mail2:'',
        //     man:'',
        //     woman:'',
        // });               //{}쓴 이유는 객체 형태로 파라미터 쓰려고
    // };
    


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
                {/* <input type="password" name="password" size="30" 
                    placeholder="비밀번호" value={password}onChange={onChange2}  /> */}
            </td>
        </tr>

        <tr>
            <th width="150px" height="30px">이메일</th>
            <td>
                {mail1}
                @
                {mail2}
                {/* <input type="text" name="mail1" size="10" placeholder="아이디" value={mail1}onChange={onChange3}  /> @
                <select name="mail2"  placeholder="주소" value={mail2}onChange={onChange4}>
                    <option value="">메일주소선택</option>
                    <option value="hanmail.net" >hanmail.net</option>
                    <option value="naver.com" >naver.com</option>
                    <option value="nate.com" >nate.com</option>
                </select> */}
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
                {/* <input type="radio" name="gender" placeholder="남자" value={man}onChange={onChange5} />남자
                <input type="radio" name="gender"placeholder="여자" value={woman}onChange={onChange6} />여자 */}
            </td>
        </tr>
        </tbody>
        </table>
        /* <td colspan="2" align="center">
        <button onClick={onClick} type="submit" >확인</button> */
        // </td>
        // </table>       
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
                {/* <input type="password" name="password" size="30" 
                    placeholder="비밀번호" value={password}onChange={onChange2}  /> */}
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
                {/* <input type="text" name="mail1" size="10" placeholder="아이디" value={mail1}onChange={onChange3}  /> @
                <select name="mail2"  placeholder="주소" value={mail2}onChange={onChange4}>
                    <option value="">메일주소선택</option>
                    <option value="hanmail.net" >hanmail.net</option>
                    <option value="naver.com" >naver.com</option>
                    <option value="nate.com" >nate.com</option>
                </select> */}
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
                {/* <input type="radio" name="gender" placeholder="남자" value={man}onChange={onChange5} />남자
                <input type="radio" name="gender"placeholder="여자" value={woman}onChange={onChange6} />여자 */}
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