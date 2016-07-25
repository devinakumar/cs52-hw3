import React, { Component } from 'react';

import TextInputBar from './textinputbar';

import Note from './note';

import Immutable from 'immutable';

import * as firebasedb from '../firebasedb';

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
    this.handleNewNotes = this.handleNewNotes.bind(this);

    firebasedb.onNewNotes(this.handleNewNotes);
  }


  onDelete(id) {
    firebasedb.fireDelete(id);
    // this.setState({
    //   notes: this.state.notes.delete(id),
    // });
  }
  onUpdate(id, fields) {
    firebasedb.fireUpdate(id, fields);
    // this.setState({
    //   notes: this.state.notes.update(id, (n) => { return Object.assign({}, n, fields); }),
    // });
  }

  handleNewNotes(newNotes) {
    this.setState({ notes: Immutable.Map(newNotes) });
  }

  createNote(title) {
    firebasedb.fireCreate(title);
    // this.setState({
    //   notes: this.state.notes.set(title, { title, text: '', x: 20, y: 20, zIndex: 0 }),
    // });
  }

  renderNotes() {
    return this.state.notes.entrySeq().map(([id, note]) => {
      return <Note id={id} key={id} note={note} onDelete={this.onDelete} onUpdate={this.onUpdate} />;
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
