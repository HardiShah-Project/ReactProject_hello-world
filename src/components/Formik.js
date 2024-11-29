import React from 'react'

import YoutubeForm from '../components/formikdemo/YoutubeForm';
import FormikContainer from '../components/formikdemo/FormikContainer';
import LoginForm from './formikdemo/LoginForm';
import RegistrationForm from './formikdemo/RegistrationForm';
import EnrollmentForm from './formikdemo/EnrollmentForm';

function Formik() {
    return (
        <div className="Formik">
            {/* <YoutubeForm /> */}
             <FormikContainer/> 
             {/* <LoginForm/>  */}
            {/* <RegistrationForm/> */}
            {/* <EnrollmentForm/> */}
        </div>
    )
}
export default Formik