import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const number = useSelector(state => state.number.value);
  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <h2>Change the Number</h2>
      <button>-</button>
      {number}
      <button>+</button>
    </div>
  );
}

export default App;
