import React from 'react';
import axios from 'axios';

const BoardArticle = ({
  article,
  handlelist,
  handledetail,
  handleupdateform
}) => {
  const handleDelete = (e) => {
    if (article.BOARD_WRITER === window.sessionStorage.getItem('id')) {
      console.log('handleDelete(menu_name) : ', e.target.id);
      axios
        .post('http://localhost:8008/delete', {
          menu_name: e.target.id
        })
        .then(() => {
          handlelist();
        })
        .catch((e) => {
          console.error(e);
        });
    } else {
      alert('작성자만 해당 글을 삭제할 수 있습니다.');
      return false;
    }
  }
  console.log('BoardArticle : ', article);

  return (
    <tr>
      {/* <td>{article.BOARD_NUM}</td> */}
      {/* <td> */}
        {/* <a
          href='#'
          id={article.BOARD_NUM}
          onClick={handledetail}
        >
          {article.BOARD_TITLE}
        </a> */}
      {/* </td> */}
      <td>{article.menu_name}</td>
      {/* <td>{article.BOARD_CONTENT}</td> */}
      <td>{article.menu_price}</td>
      <td>{article.menu_pictureUrl}</td>
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
          onClick={handleDelete}
        />
      </td>
    </tr>
  );
};

export default BoardArticle;