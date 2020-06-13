import React, { Component } from 'react';
import axios from 'axios';


export default class FetchCincoPerritos extends Component {
    state={
        cincoPerritos:[]}
    componentDidMount(){
        axios.get('https://dog.ceo/api/breed/hound/images/random/5').then(
            (response)=>{
                console.log(response)
                this.setState({
                    cincoPerritos: response.data.message
                })
            }
        )
    }
    render() {
        console.log(this.state.cincoPerritos)
        return (
            < >  
                <p> <strong> Aqui la foto de los perritos </strong> </p> 
                    {this.state.cincoPerritos.map((perrito)=>{
                    return(
                        <div>
                            <img src={perrito}/>
                        </div>
                    )
                    }
                
                )}

            </>                
            
        )
    }
}
