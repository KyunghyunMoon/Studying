import { Component } from 'react';
import './App.css';
import ValidationSample from './ValidationSample';
import Turn from './Turn';




// import { Component } from 'react';
// import ScrollBox from './ScrollBox';

// class App extends Component {
//   render() {
//     return(
//       <div>
//         <ScrollBox ref = {(ref) => (this.scrollBox = ref)} />;
//         <button onClick={() => this.scrollBox.scrollToBottom()}> 
//         {/* 함수를 쓰는 이유: 시점때문에 */}
//           맨 밑으로
//         </button>
//       </div>
//     );
//   }
// }
// export default App;






class App extends Component {
  render(){
  return (
    <div align = "center">
      <ValidationSample/> 
      <br />
      <br />
      <br />
    <Turn/>

    </div>
  )
  } 
};

export default App;


