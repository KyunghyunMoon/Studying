import { useEffect  } from 'react';
import BoardArticle from './BoardArticle';

const BoardList = ({
   boardlist,
   actionmode,
   handlelist,
   handledetail,
   handleupdateform,
}) => {
    useEffect(() => {   // 어떤일을 수행하고 싶을 때 이펙트 안에 
        handlelist();
    }, []);  // []: 맨 처음 렌더링 할 때 수행하라.

   
  
    if(boardlist.boardList.length === 0) { 
     return (
            <div>
            <table width='700px' border='1' align='center'>
            <thead>
                <tr>
                <th width='60'>번호</th>
                <th width='240'>제목</th>
                <th width='100'>작성자</th>
                <th width='100'>작성일</th>
                <th width='200'>수정/삭제</th>
                </tr>
            </thead>
            </table>
            </div>         
        );
    } else {
        return (
            <div>
            <table width='700px' border='1' align='center'>
            <thead>
                <tr>
                <th width='60'>번호</th>
                <th width='240'>제목</th>
                <th width='100'>작성자</th>
                <th width='100'>작성일</th>
                <th width='200'>수정/삭제</th>
                </tr>
            </thead>
            <tbody>
                {boardlist.boardList.map((article, index) => {
                    return (
                        <BoardArticle
                            actionmode={actionmode}
                            article={article}
                            key={index}
                            handlelist={handlelist}
                            handledetail={handledetail}
                            handleupdateform={handleupdateform}
                        />
                    );
                 })}
            </tbody>
            </table>
            </div>         
        );
    }
};
export default BoardList;