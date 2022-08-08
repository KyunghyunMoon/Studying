const express = require('express');

const app = express(); //웹서버와 관련된 객체를 만들어줌. 서버를 만들어줌. (서버 생성)
app.set('port', process.env.PORT || 3000); //port가 값을 가지고 있지 않으면 3000번을 쓰겠다. 다른 번호 쓰고 싶으면 다른 번호 적으면 됨. (포트번호 생성)
                                          // 1~4번 문장은 항상 고정


app.get('/', (req, res) => {    
    console.log(req.query);//req: 첫 번째 파라메터 요청객체. 클라이언트에서 서버로 전송한 정보를 읽기 위해서. res:응답 객체. 서버쪽에서 읽어온 데이터 처리
    res.send('Hello, express');  //요청한 쪽으로 "Hello, express" send.    문자열, 객체는 send로
    //res.sendFile(path.join(__dirname, '/index.html'));                  문서형식이면 sendfile
});


// app.post("/", (req, res)=>{            (post 형식)
//     console.log(req.body);
//     res.send("hello, express(post)");
//     res.sendFile(path.join(__dirname, '/index.html'));

}
app.listen(app.get('port'), ()=>{  //서버쪽에서 들어오는 요청 감지   
    console.log(app.get('port'), '번 포트에서 대기하고 있습니두');
});