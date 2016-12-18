import React from 'react';

import MessagePanel from './MessagePanel.jsx';

class MyApp extends React.Component {
  constructor() {
    super();
    this.state = {
      collapse: false
    }
    this.handleToggle = this.handleToggle.bind(this);
  };

  handleToggle() {
    const nextState = !this.state.collapse;
    this.setState({
      collapse: nextState
    });
  };

  render() {
    console.log(this.state.collapse);
    const showhideToggle = this.state.collapse ?
      (<MessagePanel>
        <MessagePanel.Heading text='Show/Hide' />
        <MessagePanel.Content>
          This is a message on the panel.
        </MessagePanel.Content>
      </MessagePanel>) : null;
    return (
      <div>
        <h1>Namespaced Components Demo</h1>
        <p><button onClick={this.handleToggle}
          className="btn btn-primary">Toggle</button></p>
          {showhideToggle}
      </div>
    );
  };
}

export default MyApp;
