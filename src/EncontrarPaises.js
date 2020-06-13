import React, { Component } from 'react'
import axios from 'axios';
import InfoPais from './InfoPais';
import {Link} from "react-router-dom";
import './paises.sass'

export default class EncontrarPaises extends Component {
    state={
        Paises:[]
    } 

    componentDidMount(){
        
        axios.get('https://restcountries.eu/rest/v2/all').then(
            (response)=>{
                console.log(response)
                this.setState({
                    Paises: response.data,
                })
            }
        )
    }
    mostrarPais(){
         this.setState({Paises:this.state.Paises });
    };
    
    render() {
        return (
            <div className='Pais'>
                <div>
                    {this.state.Paises.map((pais)=>{
                        return(
                            <div className='PaisLista' >
                                    <img src={pais.flag} className="paisBandera"/>
                                    <Link to={`/${pais.alpha3Code}`}>{pais.name} </Link>       
                            </div>
                            )
                        }
                    )}
                </div>
            </div>
        )
    }
}
