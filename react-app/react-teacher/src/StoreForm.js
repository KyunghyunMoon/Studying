import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MemberForm = () => {
  const store_idRef = useRef();
  const passwordRef = useRef();
  const passwordcheckRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const s_nameRef = useRef();


  const navigate = useNavigate();

  const handleMember = () => {
    if (store_idRef.current.value === "" || store_idRef.current.value === undefined) {
      alert("이이디를 입력하세요!!!");
      store_idRef.current.focus();
      return false;
    }
    if (passwordRef.current.value === "" || passwordRef.current.value === undefined) {
      alert("패스워드를 입력하세요!!!");
      passwordRef.current.focus();
      return false;
    }
    if (passwordcheckRef.current.value === "" || passwordcheckRef.current.value === undefined) {
      alert("패스워드를 입력하세요!!!");
      passwordcheckRef.current.focus();
      return false;
    }
    if (emailRef.current.value === "" || emailRef.current.value === undefined) {
      alert("이메일을 입력하세요!!!");
      emailRef.current.focus();
      return false;
    }
    if (nameRef.current.value === "" || nameRef.current.value === undefined) {
      alert("사업자명을 입력하세요!!!");
      nameRef.current.focus();
      return false;
    }
    if (emailRef.current.value === "" || emailRef.current.value === undefined) {
      alert("이메일을 입력하세요!!!");
      emailRef.current.focus();
      return false;
    }
    if (emailRef.current.value === "" || emailRef.current.value === undefined) {
      alert("이메일을 입력하세요!!!");
      emailRef.current.focus();
      return false;
    }
    if (emailRef.current.value === "" || emailRef.current.value === undefined) {
      alert("이메일을 입력하세요!!!");
      emailRef.current.focus();
      return false;
    }

    axios
      .post("http://localhost:8008/member", {
        store_id: store_idRef.current.value,
        password: passwordRef.current.value,
        passwordcheck: passwordcheckRef.current.value,
        email: emailRef.current.value,
        name: nameRef.current.value,
      })
      .then((res) => {
        console.log("handleMember =>", res);
        if (res.data.affectedRows === 1) alert("회원가입 성공!!!");
        else alert("회원가입 실패!!!");
        navigate("/");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      <p></p>
      <form>
        <table border="1" width="300px" align="center">
          <tr>
            <td width="100px">아이디</td>
            <td align="left" width="200px">
              <input
                type="text"
                name="id"
                size="20"
                defaultValue=""
                ref={store_idRef}
                placeholder="아이디를 입력하세요"
              ></input>
            </td>
          </tr>
          <tr>
            <td width="100px">패스워드</td>
            <td align="left" width="200px">
              <input
                type="password"
                name="password"
                size="20"
                defaultValue=""
                ref={passwordRef}
                placeholder="패스워드를 입력하세요"
              ></input>
            </td>
          </tr>
          <tr>
            <td width="100px">패스워드확인</td>
            <td align="left" width="200px">
              <input
                type="password"
                name="passwordcheck"
                size="20"
                defaultValue=""
                ref={passwordcheckRef}
                placeholder="패스워드를 확인하세요"
              ></input>
            </td>
          </tr>
          <tr>
            <td width="100px">이메일</td>
            <td align="left" width="200px">
              <input
                type="text"
                name="email"
                size="20"
                defaultValue=""
                ref={emailRef}
                placeholder="이메일을 입력하세요"
              ></input>
            </td>
          </tr>
           <tr>
            <td width="100px">사업자</td>
            <td align="left" width="200px">
              <input
                type="text"
                name="name"
                size="20"
                defaultValue=""
                ref={nameRef}
                placeholder="사업자명을 입력하세요"
              ></input>
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <input
                type="button"
                value="회원등록"
                onClick={handleMember}
              ></input>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default MemberForm;
