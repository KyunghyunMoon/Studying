// import{
//     MdCheckBoxOutlineBlank,
//     MdCheckBox,
//     MdRemoveCircleOutline,
// } from 'react-icons/md';
import cn from 'classnames'
import './TodoListItem.scss';
import './TodoInsert';


const TodoListitem = ({todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;

    return (
        <div className='TodoListItem'>
        <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}></div>
        <div className='text'>{text}</div>
        <div className='remove' onClick={() => onRemove(id)}>
            <button> delete </button>
        </div>
        </div>
    );
};

export default TodoListitem;