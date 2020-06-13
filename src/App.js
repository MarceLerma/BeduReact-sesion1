import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Header2 from './Header2.js';
import Sidebar from './Sidebar.js';
import Ejemplo from './Ejemplo';
import Fetch from './Fetch';
import FetchPerritos from './FetchPerritos';
import FetchDiezPerritos from './FetchDiezPerritos';
import FetchCincoPerritos from './FetchCincoPerritos';
import Paises from './Paises';
import EncontrarPaises from './EncontrarPaises';
import InfoPais from './InfoPais';
import Eventos from './Eventos';
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import './App.css';

class App extends React.Component { 
  state={
    data:[]
  }
  render (){
    return (

    <div className="App">
      <Header2 />  
         <Router>
            <div>
              <Switch>
                <Route path="/">
                  <EncontrarPaises />
                </Route>
                <Route path="/:id"> 
                  <InfoPais />
                
                </Route>
                <Route path="/"> </Route>
              </Switch>
            </div>
    </Router>
    </div>

    );
  }
}

export default App;
