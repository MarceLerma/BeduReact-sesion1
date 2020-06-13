import React, { Component } from 'react'

export default class Eventos extends Component {

    state={
        cont: 1,
        mult: 1,
        div: 1
    }
    
    alertar(){
        alert('Hola Mundo')
    };

    sumar(){
         this.setState({cont:this.state.cont + 1});
    };

    restar(){
       this.setState({cont:this.state.cont - 1});
        
    };

    cambioValorMult(e){
        this.setState({mult: e.target.value})
    }


    multiplicar(){
       this.setState({cont:this.state.cont * this.state.mult});
        
    };

    cambioValDiv(e){
        this.setState({div: e.target.value})
    }

    dividir(){
       this.setState({cont:this.state.cont /2 });
        
    };

    render() {
        return (
            <div>
                <button onClick={(e)=>{this.alertar(e)}}> Alerta de saludo </button>
                <p> Contador </p>
                <button onClick={(e)=>{this.sumar(e)}}> +1 </button> <br/>
                    <p>{this.state.cont}</p>

                <button onClick={(e)=>{this.restar(e)}}> -1 </button> <br/>  
                <input onChange={(e)=>this.cambioValorMult(e)}/>   
                <button onClick={(e)=>{this.multiplicar(e)}}> Multiplicar</button> <br/>  
                 <input onChange={(e)=>{this.cambioValDiv(e)}}/>
                <button onClick={(e)=>{this.dividir(e)}}> Dividir  </button> <br/>  
            </div>
        )
    }
}
