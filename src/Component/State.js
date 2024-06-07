import { useState } from 'react';

export default function StatePractice() {
    const[data,setData]=useState(0)
    

   const increment = () => {
    if(data>=0){
        setData(data+5)
        }else{
            alert("Please click the button first")
        }
   }
    const decrement = () => {
        if(data>0){
        setData(data-5)
        }else{
            alert("only decrement with + 5")
        }
    }
    return (
        <div className="App">
          
            <button onClick={increment}>+</button>&nbsp;&nbsp;
            <h1>{data}</h1>&nbsp;&nbsp;
            <button onClick={decrement}>-</button>&nbsp;&nbsp;
        </div>
    );
}
   
