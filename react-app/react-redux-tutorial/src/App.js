import logo from './logo.svg';
import './App.css';
import TodosContainer from './containers/TodosContainer';
import CounterContainer from './containers/CounterContainer';


const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;
