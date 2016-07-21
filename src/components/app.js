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
  }

  createNote(title) {
    console.log(title);
  }


  render() {
    return (
      <div>
        <TextInputBar onSubmit={(title) => { this.createNote(title); }} />
        <Note />
      </div>
    );
  }
}

export default App;
