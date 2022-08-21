import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementAmount, reset } from './redux/slice/count.action';

function App() {
  const count = useSelector(state => state?.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Redux Toolkit Countup</h1>
      <h3>count: {count?.value}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(incrementAmount(100))}>+100</button>
    </div>
  );
}

export default App;
