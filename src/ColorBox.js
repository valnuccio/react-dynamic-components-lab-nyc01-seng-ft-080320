import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity:  true ? "Hello" : "Goodbye" }>
        {this.props.opacity}
      </div>
    )
  }

}

