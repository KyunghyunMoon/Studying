import React from 'react';

const BoardUpdateForm = ({ article, setarticle, handleupdate }) => {

  const onChange = (e) => {
    if (article.board_writer === window.sessionStorage.getItem('id')) {
      setarticle({
        ...article,
        [e.target.name]: e.target.value
      });
    } else {
      alert('작성자만 해당 글을 수정할 수 있습니다.');
      return false;
    }
  }

  // const onChange = (e) => {
  //   setarticle({
  //     ...article,
  //     [e.target.name]: e.target.value
  //   });
  // }

  console.log('BoardUpdateForm : ', article);

  return (
    <div>
      <form>
        <table border='1' width='700px' align='center'>
          <thead>
            <tr>
              <td width='100px'>메뉴</td>
              <td align='left' width='600px'>
                <input
                  type='text'
                  name='menu_name'
                  defaultValue={article.menu_name}
                  onChange={onChange}
                />
              </td>
            </tr>
            {/* <tr>
              <td width='100px'>작성자</td>
              <td align='left' width='600px'>
                {article.board_writer}
              </td>
            </tr> */}
            <tr>
              <td width='100px'>가격</td>
              <td align='left' width='600px'>
                <input
                  type='text'
                  name='menu_price'
                  defaultValue={article.menu_price}
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <td width='100px'>사진</td>
              <td align='left' width='600px'>
                <input
                  type='text'
                  name='menu_pictureUrl'
                  defaultValue={article.menu_pictureUrl}
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan='2' align='center'>
                <input
                  type='button'
                  value='글수정'
                  onClick={handleupdate}
                />
              </td>
            </tr>
          </thead>
        </table>
      </form>
    </div>
  );
};

export default BoardUpdateForm;