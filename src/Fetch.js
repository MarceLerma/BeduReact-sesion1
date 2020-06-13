   import React from 'react';
   import axios from 'axios';

   class Fetch extends React.Component{
       state={
           data: {}

        
       }

       componentDidMount(){
           console.log('Soy el component did mount')
           axios.get('https://dog.ceo/api/breeds/image/random').then (
               (response)=>{
                   console.log(response)
                   this.setState({
                       data: response.data 

                   })
           })
       }

       render(){
           console.log(this.state)
           return(
               <div>
                  <img src={this.state.data.message}/>
               </div>
           )
       }


   }

   export default Fetch