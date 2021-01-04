import React,{useContext} from 'react';
import {MyContext} from './App'

const ComponentC = () => {
    const name=useContext(MyContext)
    return (
        <div>
            here name is {name}
        </div>
    );
}

export default ComponentC;
