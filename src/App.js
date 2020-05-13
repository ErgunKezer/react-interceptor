import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Icon } from 'semantic-ui-react';

function App() {
  return (
    <div className='App'>
      <Button animated>
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
          <Icon name='arrow right' />
        </Button.Content>
      </Button>
    </div>
  );
}

export default App;
