import React, { PureComponent } from 'react';
import Sentence from './Sentence';

export default class App extends PureComponent {
  state = {
    sentence: ''
  }
  componentDidMount() {
    fetch('https://backendrunb.herokuapp.com/random')
      .then(res => res.json())
      .then(json => {
        this.setState({ sentence: json.body });
      });
  }
  render() {
    const { sentence } = this.state;
    return (
      <>
        <h1>App</h1>
        <Sentence sentence={sentence} />
      </>
    );
  }
}
