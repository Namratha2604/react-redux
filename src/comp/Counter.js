import React from 'react'
import { useSelector,useDispatch } from 'react-redux'


function Counter (){
    // const count = useSelector((state)=>state.count);
    const dispatch = useDispatch();



  return (
    <div>
      <button onClick={(()=>dispatch({type:'inc'}))}>this is a button from ---comp/counter.js</button>
      <button onClick={(()=>dispatch({type:'dec'}))}>this is a button from ---comp/counter.js</button>
    </div>
  )
}

export default Counter;
