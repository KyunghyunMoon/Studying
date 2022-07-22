import { useState, useRef } from "react";

const JoinInserts = ({ onInsert, form, onUpdate }) => {   //새로운 데이터 추가 or 수정
  console.log("JoinInserts(form)", form);  //정보확인

  var [value, setValue] = useState({});  //새로운 데이터, 수정할 데이터 다 여기에 저장

  const idRef = useRef();            //각각의 항목에 다 적용하기 위해 사용.
  const passwordRef = useRef();
  const emailRef = useRef();
  const genderRef = useRef();
  const formRef = useRef();        

  const setFormData = () => {
    if (form.num !== undefined) {     
      value.num = form.num;           //수정될 때 실행
    }
    value.id = idRef.current.value;   //수정할 때, 추가할 때 둘다 실행. gender까지.  ref를 통해 값을 읽어옴. 수정한 값을 value에 저장
    value.password = passwordRef.current.value;
    value.email = emailRef.current.value;
    value.gender = genderRef.current.checked === true ? "여자" : "남자";
  };

  const onClick = (e) => {
    setFormData();
    if (form.num === undefined) {    //언디파인드면 폼이 비어있다.  아니면 폼객체에 데이터가 채워짐.
      onInsert(value);
    } else {
      onUpdate(value);  //수정한 데이터 들어있음
    }
    setValue({         //value를 초기화 시켜준다. 비워준다.    setvalue의 정확한 역할: 새로운 객체를 만드는 거.
      num: 0,          //joins이름을 붙이고 value객체를 만들면 join input에서 수정할 데이터나 추가할 데이터를 value에 추가. 이 데이터를 oninsert로 출력. 
      id: "",
      password: "",
      email: "",
      gender: "",
    });
    formRef.current.reset();          //리턴에 있는 폼객체를 초기화 시켜준다. 즉 완전하게 지워준다.
    e.preventDefault();
  };

  return (
    <div>
      <form className="JoinInserts" ref={formRef}>
        <table border="1">
          <tbody>
            <tr>
              <td width="110px">아이디</td>
              <td width="440px">
                <input
                  type="text"
                  name="id"
                  defaultValue={form.id !== undefined ? form.id : ""}
                  ref={idRef}
                />
              </td>
            </tr>
            <tr>
              <td width="110px">비밀번호</td>
              <td width="440px">
                <input
                  type="password"
                  name="password"
                  defaultValue={
                    form.password !== undefined ? form.password : ""
                  }
                  ref={passwordRef}
                />
              </td>
            </tr>
            <tr>
              <td width="110px">이메일</td>
              <td width="440px">
                <input
                  type="email"
                  name="email"
                  defaultValue={form.email !== undefined ? form.email : ""}
                  ref={emailRef}
                />
              </td>
            </tr>
            <tr>
              <td width="110px">성별</td>
              <td>
                남자
                <input
                  type="radio"
                  value="남자"
                  name="gender"
                  defaultChecked={
                    form.num !== undefined && form.gender === "남자"
                  }
                  ref={genderRef}
                />
                여자
                <input
                  type="radio"
                  value="여자"
                  name="gender"
                  defaultChecked={    //디폴트값 사용하려고 밸류 뺌.
                    form.num !== undefined && form.gender === "여자"
                  }
                  ref={genderRef}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="center">
                <input
                  type="button"
                  name="btn"
                  value="등록"
                  onClick={onClick}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <div className="app-title">회원 정보</div>
    </div>
  );
};

export default JoinInserts;
