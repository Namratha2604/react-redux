
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const count = useSelector((state)=>state.count);
  const dispatch = useDispatch();


  return (
   <>
    <h1>Count : {count} </h1>
    <button onClick={()=>dispatch({type:'inc'})}>inc</button>
    <button onClick={()=>dispatch({type:'dec'})}>dec</button>
   </>
  );
}

export default App;
