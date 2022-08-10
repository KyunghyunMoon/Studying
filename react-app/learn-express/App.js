const express = require('express');
const path = require('path');
const cookieParser = require('morgan');
const session = require('express-session');
const dotenv = require('dotenv');
const morgan = require('morgan');
const MySQLStore = require('express-mysql-session')(session);
// npm i express -mysql -session을 써서 데이터를 관리하겠다

dotenv.config();   //환경 구성
const indexRouter = require('./routes');
const userRouter = require('./routes/user');

const app = express(); //웹서버와 관련된 객체를 만들어줌. 서버를 만들어줌. (서버 생성)
app.set('port', process.env.PORT || 3000); //port가 값을 가지고 있지 않으면 3000번을 쓰겠다. 다른 번호 쓰고 싶으면 다른 번호 적으면 됨. (포트번호 생성)
            
// const path = requ// 1~4번 문장은 항상 고정

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', indexRouter);     //indexrouter
app.use("/user", userRouter);


const options ={
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'bbs',
};

var sessionStore = new MySQLStore(options);

const multer = require('multer');
const fs = require('fs');


try {
    fs.readdirSync('uploads');    
} catch(error) {
    console.log('upload 폴더 없으니 만들게연~');
    fs.mkdirSync('uploads');

}
const upload = multer({
    storage: multer.diskStorage({          //storage에는 저장 할 위치와 파일 크기 설정
        destination(req, file, done){     //req:요청객체 file: 파일을 다루는 객체 done:파일 저장 될 경로정보
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
 limits: {fileSize: 5* 1024 * 1024},  //첨부 될 파일 크기 설정
});


app.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, 'multipart.html'));
});


app.post('/upload', upload.fields([{ name: 'image1'}, {name: 'image2'}]), (req, res) => {        
    console.log(req.files, req.body);
    res.send("ok");
});

// app.post('/upload', upload.array('many'), (req, res) => {         // upload.single('image'): 파일첨부  파일 다수 선택
//     console.log(req.files, req.body);
//     res.send("ok");
// });

// app.post('/upload', upload.single('image'), (req, res) => {         // upload.single('image'): 파일첨부  파일 하나 선택
//     console.log(req.file, req.body);
//     res.send("ok");
// });

app.listen(app.get('port'), ()=>{  //서버쪽에서 들어오는 요청 감지   
    console.log(app.get('port'), '번 포트에서 대기하고 있습니두');
});



                                          
// app.use(morgan('dev'));
// app.use('/', express.static(path.join(__dirname, 'public')));
// app.use(express.json());             //body parser 필요:  전달한 요청정보를 구할 수 있음.
// app.use(express.urlencoded({extended: false}));
// app.use(cookieParser(process.env.COOKIE_SECRET));
// app.use(
//     session({
//     resave: false,
//     saveUninitialized: false,
//     secret: process.env.COOKIE_SECRET,
//     store: sessionStore,
//     cookie: {
//         httpOnly: true,
//         secure: false,
//     },
//     name: 'session-cookie',  //세션 쿠키명 설정. 기본 이름: connect.sid
// }));

// app.use((req, res, next) => {
//     console.log('모든 요청에 다 실행된다잉');
//     sess = req.session;
//     sess.username = 'hwang';
//     console.log('req.session.username=>',req.session.username);
//     console.log('req.sessionID =>', req.sessionID);
//     console.log('req.session => ',req.session);
//     next();
// })   ;

// app.get('/', (req, res, next) => {
//     console.log('GET /  요청에서만 실행됨둥');
//     next();
// }, (req, res) => {
//     throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
// });

// app.use((err, req, res, next) =>{
//     console.error(err);
//     res.status(500).send(err.message);
// });


// app.get('/', (req, res) => {      //req: 첫 번째 파라메터 요청객체. 클라이언트에서 서버로 전송한 정보를 읽기 위해서. res:응답 객체. 서버쪽에서 읽어온 데이터 처리
//     // console.log(req.query);         //req.body
//     // const var1 = req.query.var1;   //req.body.var1;
//     // const var2 = req.query.var2;


//     // res.send({ data1: var1, data2: var2});
//     // res.send('Hello, express');    //요청한 쪽으로 "Hello, express" send.    문자열, 객체는 send로
//     res.sendFile(path.join(__dirname, '/index.html'));      //밑줄 두개: 특수한 이름            //문서형식이면 sendfile
// });


// app.post("/", (req, res)=>{            //(post 형식)
//     console.log(req.body);
//     res.send("hello, express(post)");
//     res.sendFile(path.join(__dirname, '/index.html'));


