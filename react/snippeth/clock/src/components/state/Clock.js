import React from 'react';

// import AnalogDisplay from './AnalogDisplay'
// import DigitalDisplay from './DigitalDisplay'

import Logger from './Logger'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      currentTime: new Date().toLocaleString(),
    }
    this.launchClock();
  }

  launchClock() {
    setInterval(() => {
      this.setState({
        counter: this.state.counter++,
        currentTime: new Date().toLocaleString()
      })
    }, 1000)
  }

  render() {

    return (
      <div>
        <Logger time={this.state.currentTime} />
        {/* <AnalogDisplay time={this.state.currentTime} /> */}
        {/* <DigitalDisplay time={this.state.currentTime} /> */}
      </div>
    )
  }
}

export default Clock;
