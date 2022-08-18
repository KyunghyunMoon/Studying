import React, { useRef } from 'react';
import axios from 'axios';
import './BoardWrite.scss'

const BoardWrite = ({ handlelist }) => {
  const menu_nameRef = useRef();
  const writerRef = useRef();
  const menu_priceRef = useRef();
  const menu_pictureUrlRef = useRef();

  const handleInsert = () => {
    console.log('handleInsert : ', menu_nameRef.current.value);

    if (menu_nameRef.current.value === '' || menu_nameRef.current.value === undefined) {
      alert('메뉴를 입력해주세요.');
      menu_nameRef.current.focus();
      return false;
    }

    // if (writerRef.current.value === '' || writerRef.current.value === undefined) {
    //   alert('게시글의 작성자을 입력해주세요.');
    //   writerRef.current.focus();
    //   return false;
    // }

    if (menu_priceRef.current.value === '' || menu_priceRef.current.value === undefined) {
      alert('가격을 입력해주세요.');
      menu_priceRef.current.focus();
      return false;
    }

    if (menu_pictureUrlRef.current.value === '' || menu_pictureUrlRef.current.value === undefined) {
      alert('사진을 삽입해주세요.');
      menu_pictureUrlRef.current.focus();
      return false;
    }

    axios
      .post('http://localhost:8008/insert', {
        menu: menu_nameRef.current.value,
        writer: window.sessionStorage.getItem('id'),
        price: menu_priceRef.current.value,
        picture: menu_pictureUrlRef.current.value
      })
      .then((res) => {
        console.log('handleInsert : ', res);
        handlelist();
        menu_nameRef.current.value = '';
        writerRef.current.value = '';
        menu_priceRef.current.value = '';
        menu_pictureUrlRef.current.value = '';
      })
      .catch((e) => {
        console.error(e);
      });
  }

  return (
    <div className='write'>
      <h1>메뉴 설정</h1>
      <form>
        <table border='1' width='700px' align='center'>
          <thead>
            <tr>
              <td width='100px'>메뉴</td>
              <td align='left' width='550px'>
                <input
                  type='text'
                  name='title'
                  size='68'
                  ref={menu_nameRef}
                  placeholder='메뉴를 입력하세요.'
                />
              </td>
            </tr>
            <tr>
              <td width='100px' height='30px'>작성자</td>
              <td align='left' width='550px'>
                {/* <input
                  type='text'
                  name='writer'
                  size='68'
                  ref={writerRef}
                  placeholder='작성자를 입력하세요.'
                /> */}
                <div ref={writerRef}>
                  <b>{window.sessionStorage.getItem('id')}</b>
                </div>
              </td>
            </tr>
            <tr>
              <td>가격</td>
              <td align='left'>
                <textarea
                  rows='5'
                  cols='70'
                  name='content'
                  ref={menu_priceRef}
                  placeholder='가격을 입력하세요.'
                />
              </td>
            </tr>
            <tr>
              <td width='100px'>사진</td>
              <td align='left' width='550px'>
                <input
                  type='text'
                  name='location'
                  size='68'
                  ref={menu_pictureUrlRef}
                  placeholder='사진을 삽입하세요.'
                />
              </td>
            </tr>
            <tr>
              <td colSpan='2' align='center'>
                <input
                  type='button'
                  value='글쓰기'
                  onClick={handleInsert}
                />
                &nbsp;
                <input type='reset' value='초기화' />
              </td>
            </tr>
          </thead>
        </table>
      </form>
    </div>
  );
};

export default BoardWrite;