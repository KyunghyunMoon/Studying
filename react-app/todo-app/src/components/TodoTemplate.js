import './TodoTemplate.scss';
import picture from './ant.png'
const TodoTemplate = ({children}) => {
    return (
        <div className="TodoTemplate">
            <img src={picture}alt="circle" className="circle" width="140" />
            <div className="app-title">일정관리</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;