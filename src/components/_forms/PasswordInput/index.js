import React, { Component } from 'react';
import { InputGroup, Tooltip, Button, Intent } from '@blueprintjs/core';

class PasswordInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'password'
    };
  }

  render() {
    const lockButton = (
      <Tooltip 
        content={this.state.type === 'text' ? 'Hide password' : 'Show password'} 
        disabled={this.props.disabled}>
        <Button
          disabled={this.props.disabled}
          icon={this.state.type === 'text' ? 'unlock' : 'lock'}
          intent={Intent.WARNING}
          minimal={true}
          onClick={() => this.setState((prevState) => prevState.type === 'text' ? { type: 'password' } : { type: 'text' })}/>
      </Tooltip>
    );

    return (
      <InputGroup 
        rightElement={lockButton} 
        type={this.state.type} 
        {...this.props}/>
    );
  }
}

export default PasswordInput;
