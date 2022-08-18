import { Route, Routes } from 'react-router-dom'
import StoreMain from './boards/StoreMain';
import LoginForm from './LoginForm';
import MemberForm from './MemberForm';
import StoreMemberForm from './StoreMemberForm';
import StoreLoginForm from './StoreLoginForm';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginForm />} />
      <Route path='/StoreMain' element={<StoreMain />} />
      <Route path='/member' element={<MemberForm />} />
      <Route path='/storelogin' element={<StoreLoginForm />} />
      <Route path='/storemember' element={<StoreMemberForm />} />
    </Routes>
  )
};

export default App;
