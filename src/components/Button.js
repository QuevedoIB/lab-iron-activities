import React, { Component } from 'react';

const buttonSelected = {
  fontWeight: 'bold',
  padding: '15px 60px',
  borderRadius: '18px',
  background: 'rgb(135, 135, 135)',
}

const buttonNotSelected = {
  fontWeight: 'bold',
  padding: '15px 60px',
  borderRadius: '18px',
  background: 'rgb(222, 224, 226)',
}

export class Button extends Component {

  state = {
    text: 'Add to cart',
    styleBool: true,
    styleClass: buttonNotSelected,
  }

  handleClick = (event) => {
    if (this.state.styleBool) {
      this.setState({
        styleBool: !this.state.styleBool,
        styleClass: buttonSelected,
        text: 'In cart'
      })
    } else {
      this.setState({
        styleBool: !this.state.styleBool,
        styleClass: buttonNotSelected,
        text: 'Add to cart'
      })
    }
  }

  render() {
    const { text, styleClass } = this.state;

    return <button style={styleClass} onClick={(event) => {
      this.handleClick(event);
      this.props.onClickData();
    }}>{text}</button>

  }
}