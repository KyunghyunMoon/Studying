import { useState } from "react";
import { useRef, useCallback } from "react";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import JoinInserts from "./components/JoinInserts";
import JoinList from "./components/JoinList";

function App() {
  const [joins, setJoins] = useState([]);
  const [form, setForm] = useState({});    //폼 객체가 비워져있나, 채워져있나를 통해 insert, update 작업 구분.

  // ref를 사용하여 변수 담기
  const nextNum = useRef(0);

  const onInsert = useCallback(          //새로운 데이터 추가할 때.
    (value) => {              //데이터 추가만.
      value.num = nextNum.current;
      setJoins(joins.concat(value));
      nextNum.current += 1;
      
    },
    [joins]
  );

  const onUpdateForm = useCallback(
    (idx) => {          //idx=> 위치값
      setForm(joins[idx]);
    },
    [joins]
  );

  const onUpdate = useCallback(        //수정모드에서 등록버튼 누를 때 실행되는 업데이트.
    (updateJoin) => {       //onupdate에서 전달받은 value들어있음.
      setJoins(
        joins.map((data) => (data.num === updateJoin.num ? updateJoin : data)) //일치하지 않으면 data에 데이터 일치하면 updatejoin에 있는 것 나옴.
      );
      setForm({});
    },
    [joins]
  );

  const onRemove = useCallback(
    (num) => {
      setJoins(joins.filter((join) => join.num !== num));
    },
    [joins]
  );

  return (
    <TodoTemplate>
      <JoinInserts
        onInsert={onInsert}
        form={form}
        onUpdate={onUpdate}
      ></JoinInserts>
      <JoinList         //목록을 보여주는 것.
        joins={joins}    
        onRemove={onRemove}
        onUpdateForm={onUpdateForm}
      ></JoinList>
    </TodoTemplate>
  );
}

export default App;
