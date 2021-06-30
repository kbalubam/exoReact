import React from 'react';
import { FontAwesomeIcon } from  "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

class App extends React.Component{
  render(){
    return(
      <p><FontAwesomeIcon icon={faCoffee} /></p>
    )
  }
}

export default App;
