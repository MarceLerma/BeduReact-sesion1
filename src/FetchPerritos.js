import React from 'react';
import axios from 'axios';

class FetchPerritos extends React.Component{
    state={
        tresPerritos: []
    }

    componentDidMount(){
        axios.get('https://dog.ceo/api/breeds/image/random/3').then(
            (response)=> {
                console.log(response)
                this.setState({
                    tresPerritos: response.data.message
                })
            }
        )
    }
    render(){
        console.log(this.state.tresPerritos)
        return(
            <>
                {this.state.tresPerritos.map((perrito) => {
                     return (
                        <img src={perrito} />  
                        )
                    })}
            </>
        )
        }
    }

export default FetchPerritos

