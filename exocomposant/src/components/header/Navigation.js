import React from 'react';
import './navigation.css';

let n=0; 
let n1=0;
let n2=0;
let val;
class Navigation extends React.Component{
cliquer =(e)=>{
    if(e.target.className=="Login"){
        n+=1;
        e.target.innerText=`j'ai été cliqué ${n} fois`
        val=` ${n} `;
    }
    
    
}

cliquerElement = (e) =>{
    console.log(e.target);
}
    

    render(){

        return(
            <div class="NavBarGolb" onClick={this.cliquerElement}>
                <nav>
                    <a onClick={this.cliquer} className="Login">Acceuil</a>
                    <a>Login</a>
                    <a>About</a>
                </nav>
                <p> {val} fois</p>
                
                
            </div>
        )
    }
}

export  default Navigation;