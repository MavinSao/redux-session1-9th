import { useSelector } from 'react-redux';
import './App.css';
import Counter from './components/Counter';
import CounterConnect from './components/CounterConnect';
import User from './components/User';


function App() {

  const count = useSelector(state => state.counterReducer.count)

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <Counter />
      <hr />
      <CounterConnect />
      <hr />
      <User />
    </div>
  );
}

export default App;
