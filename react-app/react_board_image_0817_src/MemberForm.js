import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MemberForm = () => {
  const store_idRef = useRef();
  const store_pwRef = useRef();
  const store_nameRef = useRef();
  const store_pnameRef = useRef();
  const store_phoneRef = useRef();
  const store_categoryRef = useRef();
  const store_maxDeliveryTimeRef = useRef();
  const store_operationHourRef = useRef();
  const store_closedDayRef = useRef();
  const store_deliveryFeeRef = useRef();


  const navigate = useNavigate();

  const handleMember = () => {
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
    if (store_nameRef.current.value === "" || store_nameRef.current.value === undefined) {
      alert("가게명을 입력하세요!!!");
      store_nameRef.current.focus();
      return false;
    }
    if (store_pnameRef.current.value === "" || store_pnameRef.current.value === undefined) {
      alert("사업자명을 입력하세요!!!");
      store_pnameRef.current.focus();
      return false;
    }
    if (store_phoneRef.current.value === "" || store_phoneRef.current.value === undefined) {
      alert("전화번호를 입력하세요!!!");
      store_phoneRef.current.focus();
      return false;
    }
    if (store_categoryRef.current.value === "" || store_categoryRef.current.value === undefined) {
      alert("카테고리를 입력하세요!!!");
      store_categoryRef.current.focus();
      return false;
    }
    if (store_maxDeliveryTimeRef.current.value === "" || store_maxDeliveryTimeRef.current.value === undefined) {
      alert("배달 최대 소요시간을 입력하세요!!!");
      store_maxDeliveryTimeRef.current.focus();
      return false;
    }
    if (store_operationHourRef.current.value === "" || store_operationHourRef.current.value === undefined) {
      alert("가게운영시간을 입력하세요!!!");
      store_operationHourRef.current.focus();
      return false;
    }
    if (store_closedDayRef.current.value === "" || store_closedDayRef.current.value === undefined) {
      alert("휴무일을 입력하세요!!!");
      store_closedDayRef.current.focus();
      return false;
    }
    if (store_deliveryFeeRef.current.value === "" || store_deliveryFeeRef.current.value === undefined) {
      alert("배달수수료를 입력하세요!!!");
      store_deliveryFeeRef.current.focus();
      return false;
    }



    axios
      .post("http://localhost:8008/member", {
        store_id: store_idRef.current.value,
        store_pw: store_pwRef.current.value,
        store_name: store_nameRef.current.value,
        store_pname: store_pnameRef.current.value,
        store_phone: store_phoneRef.current.value,
        store_category: store_categoryRef.current.value,
        store_maxDeliveryTime: store_maxDeliveryTimeRef.current.value,
        store_operationHour:store_operationHourRef.current.value,
        store_closedDay: store_closedDayRef.current.value,
        store_deliveryFee: store_deliveryFeeRef.current.value
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
                ref={store_pwRef}
                placeholder="패스워드를 입력하세요"
              ></input>
            </td>
          </tr>
          <tr>
            <td width="100px">가게명</td>
            <td align="left" width="200px">
              <input
                type="text"
                name="store_name"
                size="20"
                defaultValue=""
                ref={store_nameRef}
                placeholder="가게명을 확인하세요"
              ></input>
            </td>
          </tr>
          <tr>
            <td width="100px">사업자명</td>
            <td align="left" width="200px">
              <input
                type="text"
                name="store_pname"
                size="20"
                defaultValue=""
                ref={store_pnameRef}
                placeholder="사업자명을 입력하세요"
              ></input>
            </td>
          </tr>
           <tr>
            <td width="100px">전화번호</td>
            <td align="left" width="200px">
              <input
                type="tel"
                name="store_phone"
                size="20"
                defaultValue=""
                ref={store_phoneRef}
                placeholder="전화번호를 입력하세요"
              ></input>
            </td>
          </tr>
          <tr>
            <td width="100px">카테고리</td>
            <td align="left" width="200px">
              <input
                type="text"
                name="store_category"
                size="20"
                defaultValue=""
                ref={store_categoryRef}
                placeholder="카테고리를 입력하세요"
              ></input>
            </td>
          </tr>
           <tr>
            <td width="100px">배달최대소요시간</td>
            <td align="left" width="200px">
              <input
                type="text"
                name="store_maxDeliveryTime"
                size="20"
                defaultValue=""
                ref={store_maxDeliveryTimeRef}
                placeholder="배달 최대소요시간을 입력하세요"
              ></input>
            </td>
          </tr>
          <tr>
            <td width="100px">가게 운영시간</td>
            <td align="left" width="200px">
              <input
                type="text"
                name="store_operationHour"
                size="20"
                defaultValue=""
                ref={store_operationHourRef}
                placeholder="가게 운영시간을 입력하세요"
              ></input>
            </td>
          </tr>
          <tr>
            <td width="100px">가게 휴무일</td>
            <td align="left" width="200px">
              <input
                type="text"
                name="store_closedDay"
                size="20"
                defaultValue=""
                ref={store_closedDayRef}
                placeholder="휴무일을 입력하세요"
              ></input>
            </td>
          </tr>
          <tr>
            <td width="100px">배달 수수료</td>
            <td align="left" width="200px">
              <input
                type="text"
                name="store_deliveryFee"
                size="20"
                defaultValue=""
                ref={store_deliveryFeeRef}
                placeholder="수수료를 입력하세요"
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
