import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Sentence extends PureComponent {
  static propTypes = {
    sentence: PropTypes.string.isRequired
  }
  render() {
    const { sentence } = this.props;
    return (
        <>
            <p>
              {sentence}
            </p>
        </>
    );
  }
}

