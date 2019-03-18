import React, { PureComponent } from 'react';
import { getSentence } from '../services/sentence';

export default class Sentence extends PureComponent {
  state = {
    sentence: ''
  }


  render() {
    const { sentence } = this.state;
    return (
        <>
            <p>
              hello{sentence}
            </p>
        </>
    );
  }
}

