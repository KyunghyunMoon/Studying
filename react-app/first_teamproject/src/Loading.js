import React from "react";
// import { Background, LoadingText } from "./Styles";
// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loadingIcon from "./loading.svg";
import "./Loading.css";
export const Loading = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/Loginform");
  }, 1000);
  return (
    <div className="loadingform">
      <div>
        <img className="loadingicon" src={loadingIcon} alt=""></img>
      </div>
    </div>
  );
};

export default Loading;
