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
import Eventos from './Eventos';
import Paises from './Paises';
import EncontrarPaises from './EncontrarPaises';
import InfoPais from './InfoPais';
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import './App.css';

class App extends React.Component { 
  state={
    data:[]
  }
  render (){
    return (

    <div className="App">
    <Router>
      <Header/>
        <ul className="Navegacion">
          <ul className='NavLink'> <Link to='/componenetes' > Ejercicio 1. Componentes </Link> </ul>
          <ul className='NavLink'> <Link to='/propiedades' > Ejercicio 2. Propiedades </Link> </ul>
          <ul className='NavLink'> <Link to='/api'  > Ejercicio 3. API - perritos </Link> </ul>
          <ul className='NavLink'> <Link to='/api2' > Ejercicio 3b. API - 5 perritos </Link> </ul>
          <ul className='NavLink'> <Link to='/api3' > Ejercicio 3c. API - 10 perritos </Link> </ul>
          <ul className='NavLink'> <Link to='/eventos'  > Ejercicio 4. Eventos - contador </Link> </ul>
          <ul className='NavLink'> <Link to='/router' > Ejercicio 5. Router- países </Link> </ul>
        </ul> 
            <div>    
              <Switch>
                <Route exact  path="/componentes">
                  <Main />
                  <Sidebar />
                </Route>
                <Route exact  path="/propiedades">
                  <Ejemplo />
                </Route>
                <Route exact path="/api">
                  <Fetch  />
                </Route>
                <Route exact path="/api2">
                  <FetchCincoPerritos  />
                </Route>
                <Route exact  path="/api3">
                  <FetchDiezPerritos  />
                </Route>
                <Route exact path="/eventos">
                  <Eventos />
                </Route>               
                <Route exact path="/router"> 
                   <Header2 /> 
                  <EncontrarPaises />
                  {/* <InfoPais /> */}
                </Route>
               
              </Switch>
            </div>
           <Footer />
        </Router>
    </div>

    );
  }
}

export default App;
