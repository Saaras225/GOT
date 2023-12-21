import React from 'react'
import Form from './../../components/Form'
import Button from '../../components/Button';

const FormBook =() => {
    
    const publish = (values) => {
       alert(JSON.stringify(values));
    };

    const buttonForm = <Button 
        text= 'Publicar'
        color= 'white'
        font= 'Arial'
        size= '20px'
        border= '10px'
        backColor= 'green'
        onclick= {()=>alert('Click')}
        title= 'Agregar Nuevo Libro'
    />;

    return (
            <Form 
                title="Agregar Nuevo Libro" 
                color= 'white'
                onSubmit={publish} 
                button={buttonForm} 
            />     
    )
}

export default FormBook;
