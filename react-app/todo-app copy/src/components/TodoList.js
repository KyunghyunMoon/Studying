// import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
const TodoList = ({todos, onRemove, onToggle }) => {
    return (
        //     <table border="1" align='center' width="510">
        //     <tr>
        //         {/* <textarea name="intro" rows="10" cols="60" ></textarea> */}
        //         <td colspan="2" align="center" >
        //             <input type="submit" value="수정" onclick="check_input();" ></input><br/><br/>
        //             <input type="reset" name="reset" value="삭제"></input>
        //         </td>
        //     </tr>
        // </table>
         <div className='TodoList'>
                {todos.map((todo) => (
                    <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
                ))}
            </div>
    
//     const onClick = () => {     //-3단계
//         alert(`
//         아이디: ${Id} 
//         비밀번호: ${password} 
//         메일: ${mail1} @ ${mail2} 
//         성별: ${man} ${woman}`);
//         setForm({
//             Id:'',
//             password:'',
//             mail1:'',
//             mail2:'',
//             man:'',
//             woman:'',
//         });               //{}쓴 이유는 객체 형태로 파라미터 쓰려고
//     };
    );
};
export default TodoList;