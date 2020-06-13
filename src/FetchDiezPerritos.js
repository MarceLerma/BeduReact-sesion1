import React from 'react';
import axios from 'axios';

class FetchDiezPerritos extends React.Component{

    state={
        diezPerritos: []
    }

    componentDidMount(){
        axios.get('https://dog.ceo/api/breed/hound/images/random/10').then(
            (response)=>{
                console.log(response)
                this.setState({
                    diezPerritos: response.data.message
                })
                   
            }
        )
    
    }

    render(){
        console.log(this.state.diezPerritos)
        return(
            <>
            <p> <strong> Aqui la foto de los perritos </strong> </p> 
            {this.state.diezPerritos.map((perrito)=>{
                return(
                    <img src={perrito}/>
                )
            }
            
            )}
            </>
        )
    }

}

export default FetchDiezPerritos
