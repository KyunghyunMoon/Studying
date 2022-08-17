const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const PORT = process.env.port || 8008;
const cors = require("cors");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

let corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

app.use(cors(corsOptions));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "project",
});

app.post("/login", (req, res) => {
  console.log("/login", req.body);
  var store_id = req.body.store_id;
  var store_pw = req.body.store_pw;

  const sqlQuery = "select count(*) as 'cnt' from storeInfo_tbl where store_id=? and store_pw=?;";
  db.query(sqlQuery, [store_id, store_pw], (err, result) => {
    res.send(result);
  });
});

app.post("/storeInfo_tbl", (req, res) => {
  console.log("/storeInfo_tbl", req.body);
  var store_id = req.body.store_id;
  var store_pw = req.body.store_pw;
  var store_name = req.body.store_name;
  var store_pname = req.body.store_pname;
  var store_phone = req.body.store_phone;
  var store_category = req.body.store_category;
  var store_maxDeliveryTime = req.body.store_maxDeliveryTime;
  var store_operationHour = req.body.store_operationHour;
  var store_closedDay = req.body.store_closedDay;
  var store_deliveryFee = req.body.store_deliveryFee;


  const sqlQuery = "insert into storeInfo_tbl values (?,?,?,?,?,?,?,?,?,?);";
  db.query(sqlQuery, [store_id, store_pw, store_name, store_pname, store_phone, store_category, store_maxDeliveryTime, store_operationHour, store_closedDay, store_deliveryFee], (err, result) => {
    res.send(result);
  });
});

app.post("/list", (req, res) => {
  console.log("list!!!");
  var page_num = parseInt(req.body.page_num);
  var page_size = parseInt(req.body.page_size);
  console.log(
    "list!!!(page_num, page_size, article_count)",
    page_num,
    ", ",
    page_size
  );
  const start_limit = (page_num - 1) * page_size;
  console.log("list!!!(start_limit, page_size)", start_limit, ", ", page_size);

  const sqlQuery = `SELECT BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT, 
    DATE_FORMAT(BOARD_DATE, '%Y-%m-%d') AS BOARD_DATE FROM BOARD_TBL 
    order by board_num desc limit ?,?;`;
  db.query(sqlQuery, [start_limit, page_size], (err, result) => {
    res.send(result);
  });
});

app.get("/count", (req, res) => {
  console.log("count!!!");
  const sqlQuery = "SELECT count(*) AS COUNT FROM BOARD_TBL;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.post("/insert", (req, res) => {
  console.log("/insert", req.body);
  var writer = req.body.writer;
  var title = req.body.title;
  var content = req.body.content;

  const sqlQuery =
    "INSERT INTO BOARD_TBL (BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT) values (?,?,?);";
  db.query(sqlQuery, [writer, title, content], (err, result) => {
    res.send(result);
  });
});

app.post("/detail", (req, res) => {
  console.log("/detail", req.body);
  var num = parseInt(req.body.num);

  const sqlQuery =
    "SELECT BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT, DATE_FORMAT(BOARD_DATE, '%Y-%m-%d') AS BOARD_DATE FROM BOARD_TBL where BOARD_NUM = ?;";
  db.query(sqlQuery, [num], (err, result) => {
    res.send(result);
  });
});

app.post("/update", (req, res) => {
  console.log("/update", req.body);
  var title = req.body.article.board_title;
  var content = req.body.article.board_content;
  var num = req.body.article.board_num;

  const sqlQuery =
    "update BOARD_TBL set BOARD_TITLE=?, BOARD_CONTENT=?, BOARD_DATE=now() where board_num=?;";
  db.query(sqlQuery, [title, content, num], (err, result) => {
    res.send(result);
    console.log("result=", result);
  });
});

app.post("/delete", (req, res) => {
  const num = req.body.num;
  console.log("/delete(store_id) => ", num);

  const sqlQuery = "DELETE FROM BOARD_TBL WHERE BOARD_NUM = ?;";
  db.query(sqlQuery, [num], (err, result) => {
    console.log(err);
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
