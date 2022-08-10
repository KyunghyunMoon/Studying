import BoardList from "./BoardList";
import BoardWrite from "./BoardWrite";
import BoardDetail from "./BoardDetail";
import BoardUpdateForm from "./BoardUpdateForm";
import { useState } from "react";
import axios from "axios";

function App() {
  const [boardlist, setBoardlist] = useState({ boardlist: [] });

  const [article, setArticle] = useState({   //게시판 글 정보 저장
    board_num: 0, // 초기값은 의미는 없음
    board_writer: "",
    board_title: "",
    board_content: "",
    board_date: "",
  });

  const [actionMode, setActionMode] = useState({ mode: 0 });

  const getList = () => {
    axios
      .get("http://localhost:8008/list", {})
      .then((res) => {
        const { data } = res;
        console.log("data ==>", data);
        setBoardlist({
          boardList: data,
        });
        setActionMode({
          ...actionMode,
          mode: 0,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleDetail = (e) => {
    alert("handleDetail(actionMode) =>" + actionMode);
    axios
      .post("http://localhost:8008/detail", { num: e.target.id })
      .then((res) => {
        const { data } = res;   //데이터 비구조화
        console.log("detail =>", data);
        if (res.data.length > 0) {
          setArticle({
            ...article,
            board_num: data[0].BOARD_NUM,
            board_writer: data[0].BOARD_WRITER,
            board_title: data[0].BOARD_TITLE,
            board_content: data[0].BOARD_CONTENT,
            board_date: data[0].BOARD_DATE,
          });
          setActionMode({
            ...actionMode,
            mode: 1,
          });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const hadleUpdateForm = (e) => {
    alert(
      "handleUpdateForm(actionMode) =>" + actionMode.mode + "," + e.target.id
    );
    axios
      .post("http://localhost:8008/detail", { num: e.target.id })
      .then((res) => {
        const { data } = res;  //data에는 상세 데이터 하나 하나 저장.
        console.log("handleUpdateForm=>", data);
        if (res.data.length > 0) {
          setArticle({
            ...article,
            board_num: data[0].BOARD_NUM,
            board_writer: data[0].BOARD_WRITER,
            board_title: data[0].BOARD_TITLE,
            board_content: data[0].BOARD_CONTENT,
            board_date: data[0].BOARD_DATE,
          });

          setActionMode({
            ...actionMode,
            mode: 2,
          });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleUpdate = () => {
    console.log("handleUpdate => ", article);
    axios
      .post("http://localhost:8008/update", {
        article: article,
      })
      .then(() => {
        getList();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  if (actionMode.mode === 0) {
    return (
      <div>
        <BoardWrite handlelist={getList}></BoardWrite>
        <br />
        <BoardList
          boardlist={boardlist}
          actionmode={actionMode}
          handlelist={getList}
          handledetail={handleDetail}
          handleupdateform={hadleUpdateForm}
        ></BoardList>
      </div>
    );
  } else if (actionMode.mode === 1) {
    return (
      <div>
        <BoardDetail article={article} handlelist={getList}></BoardDetail>

        <br />
        <BoardList
          boardlist={boardlist}
          handlelist={getList}
          handledetail={handleDetail}
          handleupdateform={hadleUpdateForm}
        ></BoardList>
      </div>
    );
  } else if (actionMode.mode === 2) {
    return (
      <div>
        <BoardUpdateForm
          article={article}
          setarticle={setArticle}
          handleupdate={handleUpdate}
        ></BoardUpdateForm>
        <br />
        <BoardList
          boardlist={boardlist}
          handlelist={getList}
          handledetail={handleDetail}
          handleupdateform={hadleUpdateForm}
        ></BoardList>
      </div>
    );
  }
}
export default App;