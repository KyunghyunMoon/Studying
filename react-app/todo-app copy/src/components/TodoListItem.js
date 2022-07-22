import{
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames'
import './TodoListItem.scss';
import './TodoInsert';


const TodoListitem = ({todo, onRemove, onUpdate }) => {
    const { id, text, checked } = todo;
    return (
        <div className='TodoListItem'>
            <div className={cn('checkbox', {checked})} onClick={() => onUpdate(todo)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className='text'>{text}</div>
            </div>
            <div className='remove' onClick={() => onRemove(id)}>
            <MdRemoveCircleOutline / >
        </div>
        </div>
    );
};

export default TodoListitem;