import React, { Component } from 'react'

export default class Editor extends Component {
    constructor () {
        super();
        this.state = {
          text: '',
          color: '#FFA726'
        }

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
      }
      
      handleTextChange(event) {
        this.setState({ text: event.target.value });
      };
    
      handleNoteAdd() {
        var newNote = {
          text: this.state.text,
          color: this.state.color,
          id: Date.now()
        };
    
        this.props.onNoteAdd(newNote);
        this.setState({ text: '' });
      };
    
      render() {
        return (
          <div className="note-editor">
            <textarea
              placeholder="Enter your note here..."
              rows={5}
              className="textarea"
              value={this.state.text}
              onChange={this.handleTextChange}
              />
            <button className="add-button" onClick={this.handleNoteAdd}>Add</button>
          </div>
        );
      }
}
