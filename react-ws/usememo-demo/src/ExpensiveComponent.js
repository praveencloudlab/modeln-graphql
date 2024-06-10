import {useState,useMemo,useEffect} from 'react';

const ExpensiveComponent = () => {
    const[count,setCount]=useState(0);
    const[inputValue,setInputValue]=useState('');

    const expensiveCalculation=(num)=>{
        console.log('calculating...')
        for(let i=0;i<100000000;i++){} // simlulate epensive calculation
        return num*2;
    }
   // const result=expensiveCalculation(count);
    const memorizedResult=useMemo(()=>expensiveCalculation(count),[count]);

    return (
        <div>
            <h2>Expensive Calculation</h2>
            <p>result: {memorizedResult}</p>
            <button onClick={()=>setCount(count+1)}>Increment Count</button>
            <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder='Type Something'/>
            <p>{inputValue}</p>
        </div>
    );
};

export default ExpensiveComponent;