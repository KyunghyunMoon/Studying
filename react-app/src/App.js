import { Component } from 'react';
// import './App.css';
// import ScrollBox from './ScrollBox';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';


function getRandomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends  Component{
  state={
    color: '#000000'
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }
  render() {
    return(
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;




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






// class App extends Component {
//   render(){
//   return (
//     <div align="center">
//       <ScrollBox/> 
//     </div>
      
//   )jn
//   } 
// };

// export default App;


