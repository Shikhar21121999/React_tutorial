import React, {useCallback, useEffect,useState} from 'react';
import List from './List.js';

const App1 = () => {
    // stateless component
    // we use this to test and learn about useCall back hook
    const [number,setNumber] = useState(1)
    const [dark, setDark] = useState(false)

    const getItems = useCallback((incrementor) => {
        // arrow function to return three consecutive number
        return [number+incrementor,number+1+incrementor,number+2+incrementor]
    },[number])

    const theme = {
        backgroundColor:dark ? '#333':'#FFF',
        color:dark ? '#FFF' : '#333'
    }
    
    return (
        <div className="" style={theme}>
            <input
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark(prevDark => !prevDark)}>
                Toggle Theme
            </button>
            <List getItems={getItems} />
        </div>
    );
}

export default App1;
