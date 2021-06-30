import React, { Component } from 'react'

class ReactCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  Hanleclick = () => {
      this.setState(prevState => {
          return {count: prevState.count}
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.Hanleclick}>clicked time</button>
      </div>
    );
  }
}

export default ReactCounter
