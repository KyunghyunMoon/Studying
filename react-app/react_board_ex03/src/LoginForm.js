import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
    const idRef = useRef();
    const passwordRef = useRef();
const navigate = useNavigate();

const handleLogin = () => {
     if (idRef.current.value === "" || idRef.current.value === undefined) {
            alert("아이디를 입력하이디?");
            idRef.current.focus();
            return false;
        }
    if (passwordRef.current.value === "" || passwordRef.current.value === undefined){
            alert("비밀번호를를 입력하비?");
            passwordRef.current.focus();
            return false;
        }
    
    console.log(
        "LoginForm:window.sessionStorage(login_id) =>",
        window.sessionStorage.getItem("id")
    );

    axios
        .post("http://localhost:8008/login", {
            id: idRef.current.value,
            pw: passwordRef.current.value,
        })
        .then((res) => {
            console.log("handlelogin =>", res);
            if (res.data[0].cnt === "1") {
            window.sessionStorage.setItem("id", idRef.current.value);
            navigate("/main");
            }
            else {
                navigate("/");
            }
        })
        .catch((e) => {
            console.error(e);
        });

        const handleMemberForm = () => {
            navigate("/member");
        };

    return (
        <div>
            <form>
                 <table border="1" width="300px" align="center">
                    <tr>
                        <td width ="100px">아이디</td>
                        <td align="left" width="200px">
                            <input
                                type="text"
                                name="id"
                                size="20"
                                defaultValue=""
                                ref={idRef}
                                placeholder="아이디를 입력하시오우"
                                ></input>
                        </td>
                    </tr>
                    <tr>
                         <td width ="100px">패스워드</td>
                        <td align="left" width="200px">
                            <input
                                type="password"
                                name="pw"
                                size="20"
                                defaultValue=""
                                ref={passwordRef}
                                placeholder="비밀번호를 입력하시오우"
                                ></input>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" align = "center">
                            <input
                            type="button"
                            value="로그인"
                            onClick={handleLogin}
                            ></input>
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
    )
};
};

export default LoginForm;