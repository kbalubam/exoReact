import React from 'react';
import Section from '../section/Section';

class Body extends React.Component{
    nbreArticle = 2;
    
    nbresArticles = (NbreArt)=>{
        console.log(NbreArt);
        
    }   

    render(){
    let pageContent;
    if (this.nbreArticle>=2){
        pageContent=(
            <div>
                <Section giveN={(x)=>this.nbresArticles(x)}/>
                <Section giveN={(x)=>this.nbresArticles(x)}/>
            </div>
        )
    }else{
        pageContent=(
            <h1>il n'y a pas d'articles</h1>
        )
    }
       return(
           <body>
               {pageContent}
           </body>
       )
    }
    
}

export default Body;