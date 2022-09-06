import React, {useEffect, useState} from "react";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {Button, Form} from "react-bootstrap";
import {REMOVE_BOOKMARK_TEST} from "../../reducers/test/sample";

const BoardArticle = ({
  article,
  handlelist,
  handledetail,
  handleupdateform
}) => {
  const useConfirm = (message = null, onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
   return confirmAction;
};
const deleteConfirm = () => console.log("삭제했습니다.");
const cancelConfirm = () => console.log("취소했습니다.");
const confirmDelete = useConfirm(
  "삭제하시겠습니까?",
  deleteConfirm,
  cancelConfirm
);


  
   console.log("BoardArticle =>", article);
  const image = "http://localhost:8008/uploads/" + article.board_image; //실제 업로드 된 파일의 위치를 확인할 수 있다.
  // 이미지 경로를 설정한다. 서버에 8008번인데 업로드스폴드
  console.log("image =>", image);
  return (
      <tr>
      <td align="left" width="600px">
              <img src={image}/>
      </td>
      <td>{article.menu_storeId}</td>
      <td>{article.menu_name}</td>

      {/* <td>
        <a
          href='#'
          id={article.BOARD_NUM}
          onClick={handledetail}
        >
          {article.BOARD_TITLE}
        </a>
      </td> */}

      <td>{article.menu_price}</td>
      {/* <td>{article.BOARD_CONTENT}</td> */}
      {/* <td>{article.menu_pictureUrl}</td> */}
      {/* <td>{article.BOARD_DATE}</td> */}
      <td align='center'>
        <input
          type='button'
          value='수정'
          id={article.menu_name}
          onClick={handleupdateform}
        />
        <input
          type='button'
          value='삭제'
          id={article.menu_name}
          onClick={confirmDelete}
        />
      </td>
    </tr>
  );
};

export default BoardArticle;