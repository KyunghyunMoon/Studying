/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './StoreBoardArticle.scss'
import { useNavigate } from 'react-router-dom';

const StoreBoardArticle = ({
  article,
}) => {
  const nameRef = useRef();

  console.log('!!!!!!!!!!!!!!!!', article);

  const navigate = useNavigate();

  // var name = article.store_name;

  console.log('alallkjsdfhsdflbsdfs', article.store_id)

  const onClick = () => {
    navigate('/boardmain', {
      state: {
        articles: article
      }
    });
  }

  return (
    // <Link to="/boardlistbbq?bbq">
    <div className="chicken_div">
      <hr />
      <form>
        <table
          border="1"
          width="300px"
          align="center"
          className='chicken_tbl'
        >
          <tr>
            <td width="70px">상호명</td>
            <td>
              {article.store_name}
              <input
                type='hidden'
                value={article.store_id}
              />
            </td>
            <td rowSpan='3' width='30px'>
              <input
                type='button'
                value='입장'
                onClick={onClick}
              />
            </td>
          </tr>
          <tr>
            <td width="70px">전화번호</td>
            <td>{article.store_phone}</td>
          </tr>
          <tr>
            <td width="70px">배달비</td>
            <td>{article.store_deliveryFee}</td>
          </tr>
        </table>
      </form>
    </div>
    // </Link >
  );
};

export default StoreBoardArticle;