import React from 'react';
import './App.css';



class App extends React.Component {
  state = {
    tab:["el1", "el2","el3","el4","el5"]
  }

  removeEl(){
    this.state.tab.pop();
    this.setState({
      tab : [...this.state.tab] // spread operator 
    } )
    console.log(this.state.tab.length);
    this.change()
  }
      change(){
        if(this.state.tab.length==1){
          document.body.style.backgroundColor="orange";
          console.log("work");
        }else if (this.state.tab.length==0){
          document.body.style.backgroundColor="red"
          console.log("working");
        }
        
      }

  

  render(){

    let long = this.state.tab.length;
    return (
      <div>
        <p>{long}</p>
        <button onClick={()=>this.removeEl()}>click</button>
      </div>
    );
  }
}





export default App;
