import React from 'react';
import endevour from './download.jpg'
// import ReactDOM from 'react-dom';
// storing image as a component
const mirio_image=<img src={endevour} alt="mirio"></img>;

// const element=<img src={user.avatarUrl}></img>
// this is a component
function App() {
  // this is a function that returns an element
  return (
    <>
      <h1>Display picture</h1>
      {mirio_image}
      
    </>
  );
}


export default App;
