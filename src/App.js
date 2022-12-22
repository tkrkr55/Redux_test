import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Box from './component/Box';


function App() {
  let count = useSelector(state => state.count)
    const dispatch = useDispatch()
  
    const addCount =()=>{
     dispatch({type:"INCREMENT"})
   
    }
    const Reduction = ()=>{
      dispatch({type:"REDUCTION"})
    }
  return (
    
    <>
    <h1>{count}</h1>
    <button onClick={addCount}>클릭!</button>
    <button onClick={Reduction}>감소!</button>
    <Box/>
    </>
  );
}

export default App;
