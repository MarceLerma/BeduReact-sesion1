import React from 'react';
import fotocachorros from './fotoscachorritos.jpg';
import './Main.css';



class Main extends React.Component{
    state={}
    render(){
        console.log(this.props)
       return (
        <div className="Main">
            <img src={fotocachorros} alt="Foto perrito" width= " 450px" height="300px" className="Imagen"/>
        
            {this.props.movies.comedia.map((pelicula, llave)=>{
                return (
                <div key={llave}>
                   <p > {pelicula.nombre} - {pelicula.director}</p>    
                </div>  
                )
            })
            }
            
        </div>
        
    )  
    }
   
}

export default Main 