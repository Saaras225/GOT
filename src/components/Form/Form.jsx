import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import PropTypes from 'prop-types';
import './Form.css';

const FormBook= (props) => {
    const {
     button, 
     title,
     color,
     onSubmit,
    } = props;
  
    const validate = (values) => {
     const error = {}
     if(values.length <= 0)
     {error.values = "El campo no puede estar vacío"}
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
            onSubmit={onSubmit}
            validate={validate}
            >
            <Form className="form">
            <div className="container">
                <div id='title' style={{color: `${color}`}} >{title}</div>
                <div className="fields">
                    <div className="pair">
                        <Field className="item" name="title" type="text" placeholder="Title" />
                        <ErrorMessage name="title" />
                    </div>
                    <div className="pair">
                        <Field className="item" name="authors" type="text" placeholder="Authors" />
                        <ErrorMessage name="title" />
                    </div>
                    <div className="pair">
                        <Field className="item" name="country" type="text" placeholder="country" />
                        <ErrorMessage name="title" />
                    </div>
                    <div className="pair">
                        <Field className="item" name="number of pages" type="text" placeholder="number of pages" />
                        <ErrorMessage name="title" />
                    </div>
                    <div className="pair">
                        <Field className="item" name="mediaType" type="text" placeholder="mediaType" />
                        <ErrorMessage name="title" />
                    </div>
                    <div className="pair">
                        <Field className="item" name="isbn" type="text" placeholder="ISBN" />
                    </div>
                    <div className="pair">
                        <Field className="item" name="released" type="text" placeholder="released" />
                        <ErrorMessage name="title" />
                    </div>
                </div>
                <div>{button}</div>
                </div>
            </Form>
        </Formik>
     </div>
    );
};

FormBook.propTypes = {
 text: PropTypes.string,
 title: PropTypes.string,
 onSubmit: PropTypes.func,
 button: PropTypes.any,
 color: PropTypes.string,
}

export default FormBook;