import React ,{useState} from 'react'

// This is a counter app
function App() {
    
    const [count,setCount] = useState(0);
    console.log("function got re-rendered")
    console.log(count)

    function decrement1(){
        // one way of calling setCount
        console.log(count) 
        setCount(count-1);
        console.log(count)
    }

    function decrement_cnt1(){
        console.log("dec1") 
        console.log(count)
        setCount(count => count-1);
        console.log(count)
    }

    function increment_cnt(){
        // one way of calling setCount
        console.log(count)
        console.log("inside increment_cnt")
        setCount(count => count+1);
        setCount(count => count+1);
        console.log(count)
        console.log("leaving increment_cnt")
    }

    


    return (
        <div>
            <button onClick={decrement1}>Subtract</button>
            <span>{count}</span>
            <button onClick={increment_cnt}>Increment</button>
            <button onClick={decrement_cnt1}>Functional_decrement</button>
        </div>
    )
}

export default App
