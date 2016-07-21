import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import FontAwesome from 'react-fontawesome';


class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'my note',
    };
  }

  render() {
    return (
      <div id="note">
        <div id="note-header">
          <div>
            <h1>My Note</h1>
          </div>
          <div>
          <FontAwesome
            className="super-crazy-colors"
            name="rocket"
            size="2x"
            spin
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          />
          </div>
        </div>
        <div>
          <Textarea />
        </div>
      </div>
    );
  }
}

export default Note;
