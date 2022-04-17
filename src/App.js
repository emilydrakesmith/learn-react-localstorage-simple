import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { incrementNumber, decrementNumber } from './state/numberSlice';

function App() {
  const number = useSelector(state => state.number.value);
  const dispatch = useDispatch();

  const decrement = () => dispatch(decrementNumber());
  const increment = () => dispatch(incrementNumber());

  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <h2>Change the Number</h2>
      <button onClick={decrement}>-</button>
      {number}
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
