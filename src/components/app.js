import React, { Component } from 'react';

import TextInputBar from './textinputbar';

import Note from './note';

import Immutable from 'immutable';


// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      notes: Immutable.Map(),
    };

    this.onDelete = this.onDelete.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }
  onDelete(id) {
    this.setState({
      notes: this.state.notes.delete(id),
    });
  }
  onUpdate(id, fields) {
    this.setState({
      notes: this.state.notes.update(id, (n) => { return Object.assign({}, n, fields); }),
    });
  }
  createNote(title) {
    this.setState({
      notes: this.state.notes.set(title, { title, text: '', x: 20, y: 20, zIndex: 0 }),
    });
  }

  renderNotes() {
    return this.state.notes.entrySeq().map(([id, note]) => {
      return <Note id={id} note={note} onDelete={this.onDelete} onUpdate={this.onUpdate} />;
    });
  }

  render() {
    return (
      <div>
        <TextInputBar onSubmit={(title) => { this.createNote(title); }} />
        {this.renderNotes()}
      </div>
    );
  }
}

export default App;
