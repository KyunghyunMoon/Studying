import logo from './logo.svg';
import './App.css';
import { useRef, useCallback, useState } from 'react';
import produce from 'immer'

const App = () => {
  const nextId = useRef(1);    //아이디 정정
  const[form, setForm] = useState({name:'', username: ''});    
  const [ data, setData] = useState({
    array: [],     //form데이터를 차례대로 array에 저장
    uselessValue: null
  });

  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setForm(
        produce(draft => {
          draft[name] = value;
      })
      );
    }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };
      setData(
        produce(draft => {
          draft.array.push(info);
        })
      );
      
      setForm({                       //폼초기화
        name:'',
        username:''
      });
      nextId.current += 1;
    },
    [form.name, form.username] 
  );

  const onRemove = useCallback(
    id => {
      setData(
       produce(draft => {
        draft.array.splice(draft.array.findIndex(info => info.id === id), 1);            //일치하지 않는 데이터만 배열에 저장
      })
      );
    },[]);

  return (
    <div> 
      <form onSubmit={onSubmit}>   
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />

        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type = "submit"> 등록 </button>
      </form>
    <div>
      <ul>
        {data.array.map(info => (         //목록출력   배열의 요소 개수만큼 map함수 반복
          <li key={info.id} onClick={() => onRemove(info.id)}>    
            {info.uername} ({info.name})
          </li>
        ))}
    </ul>
    </div>
    </div>
  );
};

export default App;
