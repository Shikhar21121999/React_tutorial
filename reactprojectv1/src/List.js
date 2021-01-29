import React, { useEffect, useState } from 'react';

const List = ({ getItems }) => {
    // stateless component to render a list
    const [items,setItems] =useState([])

    useEffect(() => {
        setItems(getItems(4))
        console.log('Updating Items')
    }, [getItems])
    
    return (
        items.map((item,index) => <div key={index}>{item}</div>)
    );
}

export default List;
