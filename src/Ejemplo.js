import React from 'react'; 

class Ejemplo extends React.Component{
    state ={
        nombre: 'Marce',
        apellido: 'Lerma',
        edad: '32 años',
        signo: 'Acuario',
        nacionalidad: 'mexicana'
    }
    render (){
        return (
            <div className='Propiedades'> 
                <strong> <h2> Propiedades </h2> </strong>
                <p> Este es el contenido</p>
                <p>
                    Nombre: {this.state.nombre}  {this.state.apellido} <br/>
                    Edad: {this.state.edad} <br/>
                    Signo: {this.state.signo} <br/> 
                    Nacionalidad: {this.state.nacionalidad}
                </p>
            </div>
        )}
        
}

export default Ejemplo 