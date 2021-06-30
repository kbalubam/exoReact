import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  render(){
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return(<h1>nous somme le {date}</h1>
      
      
    )
    
    

  }
}

export default App;
