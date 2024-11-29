import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function RegistrationForm() {
    const options = [
        {
            key: 'Email', value: 'emailmoc'
        },
        {
            key: 'Telephone', value: 'telephonemoc'
        }
    ]
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact: '',
        phone: ''
    }
    const onSubmit = values => {
        console.log('Form data', values)
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('invalid email format').required('Reuired'),
        password: Yup.string().required('Reuired'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'password must match').required('Reuired'),
        modeOfContact: Yup.string().required('Reuired'),
        phone: Yup.string().when('modeOfContact',
            {
                is: 'telephonemoc',
                then: Yup.string().required('Required')
            })
    })
    return (
        <Formik initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {
                formik => (
                    <Form>
                        <FormikControl control='input' label='Email' name='email' type='email' />
                        <FormikControl control='input' label='Password' type='password' name='password' />
                        <FormikControl control='input' label=' Confirm Password' type='password' name='confirmPassword' />
                        <FormikControl control='radio' label='Mode Of Contact'  name='modeOfContact' options={options} />
                        <FormikControl control='input' label='Phone Number' type='text' name='phone' />
                        <button type='submit' disabled={!formik.isValid}>submit</button>
                    </Form>
                )
            }
        </Formik>
    )
}
export default RegistrationForm