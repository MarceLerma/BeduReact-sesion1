import React from 'react';
import List from './List';
import './Sidebar.css';

class Sidebar extends React.Component{
    state={}
    render(){
       return (
        <div className="Sidebar">
            <div>
               <p> Sidebar </p>
                <List /> 
            </div> 
            <p>{this.props.horas} </p>   
        </div>

    );     
    }
   
}

export default Sidebar