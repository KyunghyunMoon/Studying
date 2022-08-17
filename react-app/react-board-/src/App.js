import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import LoginForm from "./LoginForm";
import MemberForm from "./MemberForm";
import Memo from "./components/Memo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/main" element={<Main />} />
      <Route path="/store_member" element={<MemberForm />} />
    </Routes>
  );
}


export default App;
