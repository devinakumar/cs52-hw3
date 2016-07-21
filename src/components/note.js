import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'testing all of the noteszz woot woot woot',
      text: 'I is a note',
      x: 400,
      y: 12,
      zIndex: 26,
    };
  }

  render() {
    return (
      <div id="note">
        <div id="note-header">
          <div id="note-title">
            <h1>{this.state.title}</h1>
          </div>
          <div id="icons">
            <i className="fa fa-pencil" aria-hidden="true"></i>
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>
        <div id="note-area">
          <Textarea minRows={3} />
        </div>
      </div>
    );
  }
}

export default Note;
