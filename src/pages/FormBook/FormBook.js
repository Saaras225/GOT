import React from 'react'
import Form from './../../components/Form'
import Button from '../../components/Button';

const FormBook =() => {
    
    const buttonForm = <Button 
        text= 'Publicar'
        color= 'white'
        font= 'Arial'
        size= '20px'
        border= '10px'
        backColor= 'green'
        title= 'Agregar Nuevo Libro'
    />;

    return (
        <div className='ContainerForm'>
            <Form 
                id='form'
                title="Agregar Nuevo Libro" 
                color= 'white'
                onSubmit={()=> alert('La información ha sido cargada')} 
                button={buttonForm} 
            /> 
        </div>
    )
}

export default FormBook;
