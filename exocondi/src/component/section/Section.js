import React from 'react';
import tartine from './téléchargement.jpeg';
import './section.css';
import '../body/Body';
class Section extends React.Component{

    NombreArticles = 2;
    render(){

        
        return(
            <div class="principale">
                <div class="globale">
                    <div  class ="img">
                    <img src={tartine}/>
                    </div>
                    <div class="article">
                    <p>ieafbaeofboaeufbaeubefoube</p>
                    <button onClick={()=> this.props.giveN(this.NombreArticles)}>click</button>

                    </div>
                </div>
                
            </div>
        )
    }
}


export default Section



