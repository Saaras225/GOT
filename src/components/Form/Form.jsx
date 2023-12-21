import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import PropTypes from 'prop-types';
import './Form.css';

const validate = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = <p className="error">Required</p>;
    } else if (values.title.length < 2) {
      errors.title = <p className="error">muy corto</p>;
    }
    if (!values.authors) {
        errors.authors = <p className="error">Required</p>;
      } else if (values.authors.length < 2) {
        errors.authors = <p className="error">muy corto</p>;
      }
    if (!values.country) {
      errors.country = <p className="error">Required</p>;
    } else if (values.country.length < 2) {
      errors.country = <p className="error">muy corto</p>;
    }

    if (!values.numberPages) {
        errors.numberPages = <p className="error">solo números</p>;
    } else if (values.isbn.length < 2) {
      errors.isbn = <p className="error">muy corto</p>;
    }
  
    if (!values.isbn !== 'number') {
        errors.isbn = <p className="error">solo números</p>;
    } else if (values.isbn.length < 2) {
      errors.isbn = <p className="error">muy corto</p>;
    } else if (values.isbn.length > 10) {
      errors.isbn = <p className="error">máx 10 números</p>;
    }
  
    return errors;
    };

const FormBook= (props) => {
    const {
     button, 
     title,
     color,
     onSubmit,
    } = props;

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
                        <Field className="item" name="title" type="text" placeholder="Title" required/>
                        <ErrorMessage className="error" name="title" />
                    </div>
                    <div className="pair">
                        <Field className="item" name="authors" type="text" placeholder="Authors" required/>
                        <ErrorMessage className="error" name="authors" />
                    </div>
                    <div className="pair">
                        <Field className="item" name="country" type="text" placeholder="country" />
                        <ErrorMessage className="error" name="country" />
                    </div>
                    <div className="pair">
                        <Field className="item" name="numberPages" type="number" placeholder="number of pages" />
                        <ErrorMessage className="error" name="numberPages" />
                    </div>
                    <div className="pair">
                        <Field className="item" name="mediaType" type="text" placeholder="mediaType" />
                    </div>
                    <div className="pair">
                        <Field className="item" name="isbn" type="text" placeholder="ISBN" required/>
                        <ErrorMessage className="error" name="isbn" />

                    </div>
                    <div className="pair">
                        <Field className="item" name="released" type="date" placeholder="released" />
                    </div>
                </div>
                <div onClick={onSubmit} type="submit">{button}</div>
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