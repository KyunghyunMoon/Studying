const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
// cors
// 교차 출처 리소스 공유
// 한 출처에서 실행 중인 웹 애플리케이션이 다른 출처의 선택한 자원에
// 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제
// 웹 애플리케이션은 리소스가 자신의 출처 (도메인, 프로토콜, 포트)와 다를 때
// 교차 출처 HTTP 요청을 실행

const app = express();
const PORT = process.env.port || 8008;
// 포트 번호를 8008로 지정

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

let corsOptions = {
  origin: '*', // 출처 허용 옵션
  credential: true // 사용자 인증이 필요한 리소스(쿠키 등...) 접근
};

app.use(cors(corsOptions));
// json 수정을 대신해서 안정적으로 설정할 수 있는 cors 설정

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'project'
});
// MySQL 데이터 베이스에 접근해서 정보를 수정할 수 있는 설정

// app.listen(PORT, () => {
//   console.log(`Running on PORT ${PORT}`);
// });

app.post('/login', (req, res) => {
  console.log('/login', req.body);
  var id = req.body.user_id;
  var pw = req.body.user_pw;

  const sqlQuery = "SELECT COUNT(*) AS 'cnt' FROM userinfo_tbl WHERE user_id = ? AND user_pw = ?;";
  db.query(sqlQuery, [id, pw], (err, result) => {
    res.send(result);
    // console.log(result[0]);

    // if (result[0].cnt === 1) {
    //   // res.json({ message: 'Success' });
    //   res.send({ message: 'Success' });
    // } else {
    //   // res.json({ message: 'Fail' });
    //   res.send({ message: 'Fail' });
    // }
  });
});

app.post('/member', (req, res) => {
  console.log('/member', req.body);
  var id = req.body.user_id;
  var pw = req.body.user_pw;
  var name = req.body.user_name;
  var email = req.body.user_email;
  var address = req.body.user_address;
  var phone = req.body.user_phone;

  const sqlQuery = 'INSERT INTO userinfo_tbl VALUES (?, ?, ?, ?, ?, ?);';
  db.query(sqlQuery, [id, pw, name, email, address, phone], (err, result) => {
    res.send(result);
  });
});

app.post('/storelogin', (req, res) => {
  console.log('/storelogin', req.body);
  var id = req.body.store_id;
  var pw = req.body.store_pw;

  const sqlQuery = "SELECT COUNT(*) AS 'cnt' FROM storeinfo_tbl WHERE store_id = ? AND store_pw = ?;";
  db.query(sqlQuery, [id, pw], (err, result) => {
    res.send(result);
  });
});

app.post('/storemember', (req, res) => {
  console.log('/storemember', req.body);
  var id = req.body.store_id;
  var pw = req.body.store_pw;
  var name = req.body.store_name;
  var pname = req.body.store_pname;
  var phone = req.body.store_phone;
  var category = req.body.store_category;
  var maxDeliveryTime = req.body.store_maxDeliveryTime;
  var operationHour = req.body.store_operationHour;
  var closedDay = req.body.store_closedDay;
  var deliveryFee = req.body.store_deliveryFee;

  const sqlQuery = 'INSERT INTO storeinfo_tbl VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
  db.query(sqlQuery, [id, pw, name, pname, phone, category, maxDeliveryTime, operationHour, closedDay, deliveryFee], (err, result) => {
    res.send(result);
  });
});

app.post('/list', (req, res) => {
  // axios에서 get 방식으로 요청한 정보 중에 /list에 대한 정보를 서버에 전송
  console.log('List');

  var page_num = parseInt(req.body.page_num);
  var page_size = parseInt(req.body.page_size);

  console.log(
    'List(page_num, page_size, article_count)',
    page_num,
    ', ',
    page_size
  );

  const start_limit = (page_num - 1) * (page_size);

  console.log(
    'List(start_limit, page_size)',
    start_limit,
    ', ',
    page_size
  );

  const sqlQuery =
    'SELECT menu_name, menu_price, menu_pictureUrl FROM menu_tbl ?;';
  db.query(sqlQuery, [start_limit, page_size], (err, result) => {
    res.send(result);
    // select를 사용해서 가져올 결과물을 전달함 (객체 구조)
    // 여기서 result는 검색한 내용이 담겨져 있음
  });
});
// DB 테이블 가져오기

app.get('/menu', (req, res) => {
  console.log('Menu');
  const sqlQuery = 'SELECT menu_name AS MENU FROM menu_tbl;';
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.post('/insert', (req, res) => {
  console.log('/insert', req.body);
  var menu_name = req.body.menu_name;
  var menu_price = req.body.menu_price;
  var menu_pictureUrl = req.body.menu_pictureUrl;
 


  const sqlQuery =
    'INSERT INTO menu_tbl (menu_name, menu_price, menu_pictureUrl) VALUES (?, ?, ?);';
  // (?, ?, ?) : [writer, title, content]를 파라미터 값으로 받아온다는 의미
  db.query(sqlQuery, [menu_name, menu_price, menu_pictureUrl], (err, result) => {
    // res.send(result);
    res.send('확인');
    // 여기서 result는 아무 내용이 담겨있지 않음
  });
});
// DB 테이블에 내용 삽입하기

app.post('/detail', (req, res) => {
  console.log('/detail', req.body);
  var menu_name = parseInt(req.body.menu_name);

  const sqlQuery =
    'SELECT menu_name, menu_price, menu_pictureUrl FROM menu_tbl WHERE menu_name = ?;';
  db.query(sqlQuery, [menu_name], (err, result) => {
    res.send(result);
  });
});

app.post('/update', (req, res) => {
  console.log('/update', req.body);
  var menu_name = req.body.article.menu_name;
  var menu_price = req.body.article.menu_price;
  var menu_pictureUrl = req.body.article.menu_pictureUrl;

  const sqlQuery =
    'UPDATE menu_tbl SET menu_name = ?, menu_price = ?, menu_pictureUrl = ? ;';
  db.query(sqlQuery, [menu_name, menu_price, menu_pictureUrl], (err, result) => {
    res.send(result);
    console.log('Result = ', result);
  });
});

app.post('/delete', (req, res) => {
  const menu_name = req.body.menu_name;
  console.log('/delete(id) = ', menu_name);

  const sqlQuery = 'DELETE FROM menu_tbl WHERE menu_name = ?;';
  db.query(sqlQuery, [menu_name], (err, result) => {
    console.log(err);
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`)
})