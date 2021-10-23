import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Controlled component meaning React is going to be in control of the text of the input fields
// This is because we will need to update the ui based on the state of the component
// We're managing the state here instead of in redux because it is not a shared state
class TextField extends Component {
  static propTypes = {
    hintText: PropTypes.string.isRequired,
  };

  state = {
    text: '',
  };

  handleChange = (e) => {
    const text = e.target.value;
    this.setState({ text });
    this.props.onHandleChange(text);
  };

  render() {
    const { hintText } = this.props;
    const { text } = this.state;

    const maxLength = 100;
    const textLeft = maxLength - text.length;

    return (
      <div className="ui input">
        <input
          type="text"
          placeholder={hintText}
          value={text}
          onChange={this.handleChange}
          maxLength={maxLength}
        />
        {textLeft <= maxLength / 2 && <div className="question-length">{textLeft}/{maxLength}</div>}
      </div>
    );
  }
}

export default TextField;
