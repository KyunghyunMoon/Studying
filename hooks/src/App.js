// import logo from './logo.svg';
import './App.css';
import useInputs from './useInputs';
// import { useState } from 'react';


// const App = () => {
//   const [visible, setVisible] = useState(false);

//   return (
//   <div>
//     <button onClick={() => {
//         setVisible(!visible);
//       }}
//       >
//         {visible ? '숨기기' : '보이기'}
//         </button>
//       <hr />
//       {visible && <Counter />}
//   </div>
//   );

// };
const App = () => {
  return <useInputs />;

};

export default App;


