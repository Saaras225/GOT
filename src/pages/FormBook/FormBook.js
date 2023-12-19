import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';

const FormBook =() => {
    
    const publish = (values) => {
       alert(JSON.stringify(values));
    };

    const validate = (values) => {
        const error = {}
        if(values.title.length <= 0){error.title = "El título no puede estar vacío"}
        return error
    };

    return (
        <div>
            <Formik
                initialValues = {{
                  title: '',
                  authors: '',
                  isbn: '',
                }}
                onSubmit={publish}
                validate={validate}
                >
                <Form>
                    <div>
                    <Field name="title" type="text" placeholder="Title" />
                    <ErrorMessage name="title" />
                    </div>
                    <div>
                    <Field name="authors" type="text" placeholder="Authors" />
                    <ErrorMessage name="title" />
                    </div>
                    <div>
                    <Field name="isbn" type="text" placeholder="ISBN" />
                    </div>
                    <button type="submit">Publicar</button>
                </Form>
            </Formik>
        </div>
    
    )
}

export default FormBook;