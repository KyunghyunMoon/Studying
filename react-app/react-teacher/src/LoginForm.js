import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const store_idRef = useRef();
  const store_pwRef = useRef();

  const navigate = useNavigate();

  const handleLogin = () => {
    if (store_idRef.current.value === "" || store_idRef.current.value === undefined) {
      alert("아이디를 입력하세요!!!");
      store_idRef.current.focus();
      return false;
    }
    if (store_pwRef.current.value === "" || store_pwRef.current.value === undefined) {
      alert("패스워드를 입력하세요!!!");
      store_pwRef.current.focus();
      return false;
    }

    console.log(
      "LoginForm:window.sessionStorage(login_id) =>",
      window.sessionStorage.getItem("id")
    );

    axios
      .post("http://localhost:8008/login", {
        store_id: store_idRef.current.value,
        store_pw: store_pwRef.current.value,
      })
      .then((res) => {
        console.log("handleLogin =>", res);
        if (res.data[0].cnt === 1) {
          window.sessionStorage.setItem("store_id", store_idRef.current.value);
          navigate("/main");
        } else {
          navigate("/");
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleMemberForm = () => {
    navigate("/member");
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
                ref={store_pwRef}
                placeholder="패스워드를 입력하세요"
              ></input>
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <input type="button" value="로그인" onClick={handleLogin}></input>
              &nbsp;
              <input
                type="button"
                value="회원등록"
                onClick={handleMemberForm}
              ></input>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default LoginForm;
