import { useState } from "react"
import "./counter.css"

function Counter(){

    let [ Count, setCount ] = useState(7)
    let [inputValue, setInputValue] = useState(0);

    function Increase(){
        if(Count<inputValue){
            setCount(Count+1)
        }
    }
    function Decrease(){
        if(Count>5){
            setCount(Count-1)
        }
    }

    function InputChange(event){
        setInputValue((event.target.value))
    }

    return(
    <>
    <div id="main">
        <div>
            <input type="number" value={inputValue} onChange={InputChange} />
            <button>Go</button>
        </div>
        
        <button onClick={Increase}>Increment</button>
            <p>{Count}</p>
        <button onClick={Decrease}>Decrement</button>
    </div>
    </>
    )
}

export default Counter
