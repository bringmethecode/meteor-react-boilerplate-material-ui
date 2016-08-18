import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickCounter: 0
    };
  }

  increaseCounter() {
    this.setState({
      clickCounter: this.state.clickCounter + 1
    });
  }

  render() {
    return (
      <div>
        <h3>Clicked {this.state.clickCounter} times</h3>
        <RaisedButton label="Click Me"
                      primary={true}
                      onClick={this.increaseCounter.bind(this)}/>
      </div>
    );
  }
}
