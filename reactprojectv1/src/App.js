import React ,{useState} from 'react'
import ComponentA from './ComponentA'
import ComponentC from './ComponentC'

export const MyContext=React.createContext("shikhar")

// This is a counter app
export default function App() {

    const [name,setName]=useState("User")
    const ANONYMOUS="Anonymous"
    
    function toggleIcognito(){
        setName(ANONYMOUS)
    }

    return (
        <div>
            <MyContext.Provider value={name}>
                <h>Hello</h>
                <button onClick={toggleIcognito}>Make me anonymous</button>
                <ComponentA />
                <ComponentC />
            </MyContext.Provider>
        </div>
    )
}

