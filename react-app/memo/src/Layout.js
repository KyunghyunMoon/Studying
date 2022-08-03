import {Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <header style={{background: "lightgray", padding:16, fontsize: 24 }} align="center">
                복습일기
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;