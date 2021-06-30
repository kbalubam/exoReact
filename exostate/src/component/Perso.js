import React from "react";

class Perso extends React.Component {
   
    



  render() {
      let changement= this.props.statut
      
    return (
     <div>
         <p>je m'appelle {this.props.statut.perso1.prénom} , je m'appelle , j'ai </p>
         <button onClick={this.props.cliq}>click</button>
    </div> 
        
      
    )
  }
}
export default Perso;