import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import PropTypes from 'prop-types';
import './Form.css';

const FormBook= (props) => {
    const {onSubmit, text, title} = props;
  
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
                 onSubmit={onSubmit}
                 validate={validate}
                 >
                 <Form className="form">
                    <div className="container">
                        <div id='title'>{title}</div>
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
                                <Field className="item" name="isbn" type="text" placeholder="ISBN" />
                            </div>
                        </div>
                        <button id="button" type="submit">{text}</button>
                     </div>
                 </Form>
             </Formik>
         </div>
     
     )
};

FormBook.propTypes = {
 onSubmit: PropTypes.func,
 text: PropTypes.string,
 title: PropTypes.string,
}

export default FormBook;