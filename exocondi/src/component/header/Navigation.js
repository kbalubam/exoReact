import React from 'react';
import './navigation.css';

class Navigation extends React.Component{
    render(){
        return(
            <div class="NavBarGolb" onClick={this.cliquerElement}>
            <nav>
                <a>Acceuil</a>
                <a>Login</a>
                <a>About</a>
            </nav>
           
            
            
        </div>
        )
    }
}

export default Navigation