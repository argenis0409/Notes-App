import React, { Component } from 'react';
import Editor from './Editor';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      notes: [],
    }

    this.handleNoteDelete = this.handleNoteDelete.bind(this);
    this.handleNoteAdd = this.handleNoteAdd.bind(this);
    this._updateLocalStorage = this._updateLocalStorage.bind(this);
  }

  handleNoteDelete(note) {
    var noteId = note.id;
    var newNotes = this.state.notes.filter(function(note) {
      return note.id !== noteId;
    });
    this.setState({ notes: newNotes });
  };

  handleNoteAdd(newNote) {
    var newNotes = this.state.notes.slice();
    newNotes.unshift(newNote);
    this.setState({ notes: newNotes });
  };

  render() {
    return (
      <div className="notes-app">
        <h2 className="app-header">Notes App</h2>
        <Editor onNoteAdd={this.handleNoteAdd} />
        {/* <NotesGrid notes={this.state.filteredNotes} onNoteDelete={this.handleNoteDelete} /> */}
      </div>
    );
  }

  _updateLocalStorage() {
    var notes = JSON.stringify(this.state.notes);
    localStorage.setItem('notes', notes);
  };
};

export default App;
