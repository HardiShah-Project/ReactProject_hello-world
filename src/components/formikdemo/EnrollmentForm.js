import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function EnrollmentForm() {
    const dropdownOptions = [
        {
            key: 'Select an option', value: ''
        },
        {
            key: 'Angular', value: 'angular'
        },
        {
            key: 'React', value: 'react'
        },
        {
            key: 'Vue', value: 'vue'
        }
    ]
    const checkboxOptions = [
        {
            key: 'HTML', value: 'html'
        },
        {
            key: 'CSS', value: 'css'
        },
        {
            key: 'Javascript', value: 'javascript'
        }
    ]
    const initialValues = {
        email: '',
        bio: '',
        course: '',
        skills: [],
        courseDate: null

    }
    const onSubmit = values => {
        console.log('Form data', values)
        console.log('Saved data', JSON.parse(JSON.stringify(values)))
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Reuired'),
        bio: Yup.string().required('Reuired'),
        course: Yup.string().required('Reuired'),
        courseDate: Yup.date().required('Required').nullable()
    })
    return (
        <Formik initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {
                formik => (
                    <Form>
                        <FormikControl control='input' label='Email' name='email' type='email' />
                        <FormikControl control='textarea' label='Bio' name='bio' />
                        <FormikControl control='select' label='Course' name='course' options={dropdownOptions} />
                        <FormikControl
                            control='checkbox'
                            label='Your Skillset'
                            name='skills'
                            options={checkboxOptions}
                        />
                        <FormikControl
                            control='date'
                            label='Course Date'
                            name='courseDate'
                        />
                        <button type='submit' disabled={!formik.isValid}>submit</button>
                    </Form>
                )
            }
        </Formik>
    )
}
export default EnrollmentForm