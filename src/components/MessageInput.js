import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions';

class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.updateInput = this.updateInput.bind(this);
    this.submitInput = this.submitInput.bind(this);
  }

  updateInput(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  submitInput() {
    this.props.addMessage(this.state.inputValue);
  }

  render() {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.updateInput} />
        <button onClick={this.submitInput}>Submit</button>
      </div>
    );
  }
}

export default connect(null, { addMessage })(MessageInput);
