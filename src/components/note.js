import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import marked from 'marked';
import Draggable from 'react-draggable';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onUpdateClick = this.onUpdateClick.bind(this);
    this.onNoteUpdate = this.onNoteUpdate.bind(this);
    this.onDrag = this.onDrag.bind(this);
  }
  onNoteUpdate(event) {
    this.props.onUpdate(this.props.id, { text: event.target.value });
  }
  onDeleteClick(event) {
    this.props.onDelete(this.props.id);
  }
  onUpdateClick(event) {
    if (this.state.editing) {
      this.setState({ editing: false });
    } else {
      this.setState({ editing: true });
    }
  }
  onDrag(e, ui) {
    this.props.onUpdate(this.props.id, { x: ui.x, y: ui.y });
  }
  textBox() {
    if (this.state.editing) {
      return <Textarea minRows={4} value={this.props.note.text} onChange={this.onNoteUpdate} />;
    } else {
      return <div className="noteBody" dangerouslySetInnerHTML={{ __html: marked(this.props.note.text || '') }} />;
    }
  }
  editIcon() {
    if (this.state.editing) {
      return <i onClick={this.onUpdateClick} className="fa fa-check" aria-hidden="true"></i>;
    } else {
      return <i onClick={this.onUpdateClick} className="fa fa-pencil" aria-hidden="true"></i>;
    }
  }
  render() {
    return (
      <div>
        <Draggable handle="#icons" grid={[25, 25]} defaultPosition={{ x: 20, y: 20 }} position={{ x: this.props.note.x, y: this.props.note.y }}
          onStart={this.onStartDrag} onDrag={this.onDrag} onStop={this.onStopDrag}
        >
          <div id="note">
            <div id="note-header">
              <div id="note-title">
                <h1>{this.props.note.title}</h1>
              </div>
              <div id="icons">
                {this.editIcon()}
                <i onClick={this.onDeleteClick} className="fa fa-trash" aria-hidden="true"></i>
                <i className="fa fa-arrows-alt" aria-hidden="true"></i>
              </div>
            </div>
            <div id="note-area">
              {this.textBox()}
            </div>
          </div>
        </Draggable>
      </div>
    );
  }
}

export default Note;
