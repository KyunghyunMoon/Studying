import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useState, useRef, useCallback } from 'react';

const App = () => {

  const [todos, setTodos] = useState([
    // {
    //   id:1,
    //   text: '팀 회의 하기',
    //   checked: true,
    // },
    // {
    //   id: 2,
    //   text: '헬스가기',
    //   checked: true,
    // },
    // {
    //   id: 3,
    //   text: '수업 복습하기',
    //   checked: false,
    // },
  ]);
  const nextId = useRef(4);
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? {...todo, checked: !todo.checked } :todo,  //복제한 객체를 통해 체크한 항목 수정
          ),
      );
    },
    [todos],
  );

  return (
          <TodoTemplate>
          <TodoInsert onInsert={onInsert} />
          <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
          </TodoTemplate>
  );
};

export default App;
