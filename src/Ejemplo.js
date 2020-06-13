import React from 'react'; 

class Ejemplo extends React.Component{
    state ={
        nombre: 'Marce',
        apellido: 'Lerma',
        edad: '32 años',
        signo: 'acuario',
        nacionalidad: 'mexicana'
    }
    render (){
        return (
            <div> 
                <p> Este es el contenido</p>
                <p>
                    {this.state.nombre}  {this.state.apellido} <br/> {this.state.edad} <br/> {this.state.signo} <br/> {this.state.nacionalidad}
                </p>
            </div>
        )}
        
}

export default Ejemplo 