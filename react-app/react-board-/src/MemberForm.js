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
      alert("아이디를 입력하세요!!!");
      store_idRef.current.focus();
      return false;
    }
    if (passwordRef.current.value === "" || passwordRef.current.value === undefined) {
      alert("패스워드를 입력하세요!!!");
      passwordRef.current.focus();
      return false;
    }
    if (passwordcheckRef.current.value === "" || passwordcheckRef.current.value === undefined) {
      alert("패스워드를 확인하세요!!!");
      passwordcheckRef.current.focus();
      return false;
    }
    if (emailRef.current.value === "" || emailRef.current.value === undefined) {
      alert("이메일을 입력하세요!!!");
      emailRef.current.focus();
      return false;
    }
    if (nameRef.current.value === "" || nameRef.current.value === undefined) {
      alert("이름을 입력하세요!!!");
      nameRef.current.focus();
      return false;
    }
    if (addressRef.current.value === "" || addressRef.current.value === undefined) {
      alert("주소를 입력하세요!!!");
      addressRef.current.focus();
      return false;
    } 
    if (phoneRef.current.value === "" || phoneRef.current.value === undefined) {
      alert("번호를 입력하세요!!!");
      phoneRef.current.focus();
      return false;
    }
    if (s_nameRef.current.value === "" || s_nameRef.current.value === undefined) {
      alert("가게명을 입력하세요!!!");
      s_nameRef.current.focus();
      return false;
    }



    axios
      .post("http://localhost:8008/store_member", {
        store_id: store_idRef.current.value,
        password: passwordRef.current.value,
        passwordcheck: passwordcheckRef.current.value,
        email: emailRef.current.value,
        name: nameRef.current.value,
        address: addressRef.current.value,
        phone: phoneRef.current.value,
        s_name: s_nameRef.current.value
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
        <table border="1" width="400px" align="center">
          <tr>
            <td width="100px">아이디(사업자등록번호)</td>
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
                name="pw"
                size="20"
                defaultValue=""
                ref={passwordRef}
                placeholder="패스워드를 입력하세요"
              ></input>
            </td>
          </tr>
          <tr>
            <td width="150px">패스워드확인</td>
            <td align="left" width="200px">
              <input
                type="password"
                name="pwcheck"
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
                type="email"
                name="email"
                size="20"
                defaultValue=""
                ref={emailRef}
                placeholder="이메일을 입력하세요"
              ></input>
            </td>
          </tr>
          <tr>
            <td width="100px">사업자명</td>
            <td align="left" width="200px">
              <input
                type="name"
                name="name"
                size="20"
                defaultValue=""
                ref={nameRef}
                placeholder="이름을 입력하세요"
              ></input>
            </td>
          </tr>
            <tr>
            <td width="100px">주소</td>
            <td align="left" width="200px">
              <input
                type="address"
                name="address"
                size="20"
                defaultValue=""
                ref={addressRef}
                placeholder="주소를 입력하세요"
              ></input>
            </td>
          </tr>
            <tr>
            <td width="100px">전화번호</td>
            <td align="left" width="200px">
              <input
                type="tel"
                name="phone"
                size="20"
                defaultValue=""
                ref={phoneRef}
                placeholder="번호를 입력하세요"
              ></input>
            </td>
          </tr>
          <tr>
            <td width="100px">상호명</td>
            <td align="left" width="200px">
              <input
                type="text"
                name="sname"
                size="20"
                defaultValue=""
                ref={s_nameRef}
                placeholder="가게명을 입력하세요"
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
