import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const goArticles = () => {
        navigate('/articles');
        // navigate("/articles", {
        //     replace: true,
        // });
    };

    return (
        <div>
            
            <header style={{background: 'Beige', padding: 30, fontSize: 40}} align="center">
                미스터 휑에 대해 알아보자<br />            
                
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goArticles} >게시글목록</button>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;