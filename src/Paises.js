import React from 'react';
import axios from 'axios';
import './paises.sass'

class Paises extends React.Component{
    state= {
        Paises: []
    } 

    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all').then(
            (response)=> {
                console.log(response)
                this.setState({
                    Paises: response.data,
                     }
                    )
            }
        )
    }



    render(){
        console.log(this.state.Paises)
        return(
            <> 
                {this.state.Paises.map((pais)=>{ return(
                <div className='Pais'>
                    <p>{pais.name} </p> <img src={pais.flag} className="paisBandera" />
                </div>
                )})}
            </>
        )
    }
}

export default Paises