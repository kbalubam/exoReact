import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header'
import React from 'react';
import Section from './component/section/Section';
import Body from './component/body/Body';

class App extends React.Component{
  render(){
    return(
      <div>
          <Header/>
          <Body/>
          
          
      </div>
    )
  }
}

export default App;
