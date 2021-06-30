import React from 'react';
import Perso from './component/Perso';


class App extends React.Component{
  state = {
    perso1:{
      prénom: "george",
      nom: "balm",
      age: "20",
    },
    perso2:{
      prénom: "tom",
      nom:"uil",
      age:"29"
    },
    perso3:{
      prénom:"grt",
      nom:"bc",
      age:"12"
    }
    
  }

  change(){
    this.setState({
      perso1: {
        prénom : "ke"
      }
    })
  }
  render(){
    return(
      <div>
        <Perso statut={this.state} cliq={()=>this.change()}/>
      </div>
    )
  }
}


export default App;