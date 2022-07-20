import './TodoTemplate.scss';
import picture from './7.png'
const TodoTemplate = ({children}) => {
    return (
        <div className="TodoTemplate">
            <img src={picture}alt="circle" className="circle" width="140" />
            <div className="app-title">회원관리</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;