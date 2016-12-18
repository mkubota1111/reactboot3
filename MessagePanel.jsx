import React from 'react';

class MessagePanel extends React.Component {
  render() {
    return (
      <div className='collapse in'> {this.props.children} </div>
    );
  }
}

MessagePanel.Heading = class Heading extends React.Component {
  render() {
    return (
      <h2>{this.props.text}</h2>
    )
  }
}

MessagePanel.Content = class Content extends React.Component {
  render() {
    return (
      <div className='well'> {this.props.children} </div>
    );
  }
}

export default MessagePanel;
