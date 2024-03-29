import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { DRAFTABLE } from 'immer/dist/internal';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// export const changeInput = input => ({
//     type: CHANGE_INPUT,
//     input
// });

export const changeInput = createAction(CHANGE_INPUT, input => input);


let id = 3;
export const insert = createAction(INSERT, text => ({
        id: id++,
        text,
        done: false,
    }));

export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);


const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '휑기성 월클만들기',
            done:true
        },
        {
            id: 1,
            text: '휑기성 씹월클만들기',
            done:false
        }
    ]
};

const todos = handleActions (
    {
        [CHANGE_INPUT]: (state, { payload: input}) => 
            produce(state, daraft => {
                DRAFTABLE.input = input;
            }),
        [INSERT]: (state, { payload: todo}) => 
            produce(state, draft => {
                draft.todos.push(todo);
            }),
        [TOGGLE]: (state, { payload: id}) => 
            produce(state, draft => {
                const todo = draft.todos.find(todo => todo.id === id);
                todo.done = !todo.done;
            }),     
        [REMOVE]: (state, { payload: id}) => 
            produce(state, draft => {
             const index = draft.todos.findIndex(todo => todo.id === id);
             draft.todos.splice(index, 1);
        }),
    },
    initialState,
);

export default todos;