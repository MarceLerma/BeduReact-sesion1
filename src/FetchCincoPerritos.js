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
            <div>
                {this.state.cincoPerritos.map((perrito)=>{
                return(
                    <img src={perrito}/>
                )
                }
            
            )}
            </div>                
            
        )
    }
}
