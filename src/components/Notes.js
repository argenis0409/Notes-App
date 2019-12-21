import React, { Component } from 'react'

export default class Notes extends Component {
    render() {
        var style = { backgroundColor: this.props.color };
        return (
          <div className="note" style={style}>
            <span className="delete-note" onClick={this.props.onDelete}> × </span>
            {this.props.children}
          </div>
        );
      }
}
