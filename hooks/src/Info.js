import useInputs from './useInputs';


const Info = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname:''
    });
    
    const {name, nickname} = state;
    
        return (
            <div>
                <div>
                    <input name="name" value={name} onChange={onChange} />
                    <input name="nickname" value={nickname} onChange={onChange} />
                </div>
                <div>
                    <div>
                        <b>이름:</b> {name}
                    </div>
                    <div>
                        <b>닉네임: </b> {nickname}
                    </div>
                </div>
            </div>
        );
};
       



    // 합쳐서 객체의 형태로 사용하는 방법
    // const[data, setData] = useState({
    //     name: '',
    //     nickname:''
    // });



//     const onChangeName = e => {
//         setName(e.target.value);
//     };
//     const onChangeNickname = e => {
//         setNickname(e.target.value);
//     }
//     return (
//         <div>
//             <div>
//                 <input value={name} onChange={onChangeName} />
//                 <input value={nickname} onChange={onChangeNickname} />
//             </div>
//             <div>
//                 <div>
//                     <b>이름: </b> {name}
//                 </div>
//                 <div>
//                     <b>닉네임: </b> {nickname}
//                 </div>
//             </div>  
//         </div>
//     );
// };

export default Info;