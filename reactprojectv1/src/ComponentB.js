import React from 'react';
import {MyContext} from './App'

const ComponentB = () => {
    return (
        <div>
            <MyContext.Consumer>
                {value => <div>Name is {value} </div>}
            </MyContext.Consumer>
        </div>
    );
}

export default ComponentB;
