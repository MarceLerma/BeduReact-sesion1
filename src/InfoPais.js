import React, { Component } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
import EncontrarPaises from './EncontrarPaises'
import './paises.sass'

export default class InfoPais extends Component {
    state={
        Pais:[]
    } 

    

    componentDidMount(){
        console.log(this.props)
        axios.get(`https://restcountries.eu/rest/v2/alpha/${this.props.match.params.nombredelpais}`).then(
            (response)=>{
                console.log(response)
                this.setState({
                    Pais: response.data,
                })
            }
        )
    }

    render() { 
        console.log(this.state.Pais)
         console.log("this.props.match.params.id:", this.props.match.params.id)
        return (
           <>
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
            </>
        )
    }
}
