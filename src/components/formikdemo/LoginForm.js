import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function LoginForm() {

    const initialValues = {
        email: '',
        password: ''
    }
    const onSubmit = values => {
        console.log('Form data', values)
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('invalid email format').required('Reuired'),
        password: Yup.string().required('Reuired')
    })
    return (
        <Formik initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {
                formik => (
                    <Form>
                          {/* <FormikControl control='input' label='Email' name='email' type='email' /> */}
                        <FormikControl control='chakrainput' label='Email' name='email' type='email' />
                        <FormikControl control='chakrainput' label='Password' type='password' name='password' />
                        <button type='submit' disabled={!formik.isValid}>submit</button>
                    </Form>
                )
            }
        </Formik>
    )
}
export default LoginForm