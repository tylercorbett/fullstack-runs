import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


export default class Sentence extends PureComponent {
  static propTypes = {
    sentence: PropTypes.string
  }
  render() {
    const { sentence } = this.props;
    return (
        <>
          <h2>Sentence</h2>
            <p>
              {sentence}
            </p>
        </>
    );
  }
}

