import React, { Component } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
import './paises.sass'

export default class InfoPais extends Component {
    state={
        Pais:[]
    } 

    

    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/alpha/col').then(
            (response)=>{
                console.log(response)
                this.setState({
                    Pais: response.data,
                })
            }
        )
    }
    mostrarPais(){
         this.setState({Pais:this.state.Pais.data });
    };
    


    render() { 
        console.log(this.state.Pais)
         console.log(this.props)
        return (
           
                <div className='detallePais'>
                   
                        <div>
                            <h2>{this.state.Pais.name}</h2>
                        </div >
                        <div>
                            <strong>Capital</strong>
                            <p>{this.state.Pais.capital}</p>
                        </div>
                        <div>
                            <strong>Area</strong>
                            <p>{this.state.Pais.area}</p>
                        </div>
                </div>
               
        )
    }
}
