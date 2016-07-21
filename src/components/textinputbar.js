import React, { Component } from 'react';

class TextInputBar extends Component {
  constructor(props) {
    super(props);
    this.state = { notecontent: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ notecontent: event.target.value });
    // this.props.onTextEdit(event.target.value);
  }

  onSubmit(event) {
    this.props.onSubmit(this.state.notecontent);
    this.setState({ notecontent: '' });
  }

  render() {
    return (
      <div id="text-bar">
        <form>
          <input onChange={this.onInputChange} value={this.state.notecontent} />
          <input type="button" value="New Note!" onClick={this.onSubmit} />
        </form>
      </div>
    );
  }
}

export default TextInputBar;
