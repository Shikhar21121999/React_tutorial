import React from 'react';
import {MyContext} from './App'
import ComponentB from './ComponentB';

const ComponentA = () => {
    // now we will try to acess values 
    // passed using Mycontext
    return (
        <div>
            <MyContext.Consumer>
                {value => <div>Name is {value} </div>}
            </MyContext.Consumer>
            <MyContext.Provider value="Aparna sharma">
                <ComponentB/>
            </MyContext.Provider>
        </div>
    );
}

export default ComponentA;
