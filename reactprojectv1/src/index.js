import React from 'react';
import ReactDOM from 'react-dom';


// clock component using class 
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // life cyle mount method
  // This is run when component gets loaded into the UI

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  componwilldisconnect() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState(
      {
        date: new Date()
      }
    );
  }
  
  render() {
    return (
      <div>
        <h1>This is a clock</h1>
        <h2>Current time is </h2>
        <span>{this.state.date.toLocaleTimeString()}</span>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')

)