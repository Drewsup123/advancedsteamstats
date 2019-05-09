import React from 'react';
import './App.css';
import {Store} from './Store';
//Component Imports
import Signup from './pages/signup';

function App() {
  const {state} = React.useContext(Store);
  return (
    <div className="App">
      {
        state.loggedIn 
        ? <h1>logged in</h1> 
        : <Signup global={state}/>
      }
    </div>
  );
}

export default App;
