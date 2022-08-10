const express = require("express");
const mysql = require("mysql");
const bodyparser = require("body-parser"); 
const cors = require("cors");           //cors: 교차 출처 리소스 공유(cross-origin resource sharing)

const app = express();
const Port = process.env.port || 8008;


app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

let corsOptions = {
    origin: "*",  //옵션 허용
    credential: true,  //사용자 인증이 필요한 리소스(쿠키..등) 접근
};


app.use(cors(corsOptions));

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123465",
    database: "bbs",
});

app.listen(Port, ()=> {
    console.log(`running on port ${Port}`);
});

app.get("/list", (req, res) => {
    console.log("list!!!");
    const sqlQuery = 
    "SELECT BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT, DATE_FORMAT(BOARD_DATE, '%Y-%m-%d') AS BOARD_DATE FROM BOARD_TBL;";
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
        "INSERT INTO BOARD_TBL (BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT) values (?,?,?);"; //?: 파라메터로 전달받아 처리하겠다
        db.query(sqlQuery, [writer, title, content], (err, result) => {
            res.send(result);
        });
});


