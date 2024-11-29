import React,{useState} from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
}
const savedValues = {
    name: 'vishwas',
    email: 'v@example.com',
    channel: 'codevolution',
    comments: 'welcome to formik',
    address: '221b baker street',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
}
const onSubmit = (values,onSubmitProps) => {
    console.log('Form data', values)
    console.log('submit props', onSubmitProps)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
}
const validateComments = value => {
    let error 
    if (!value) {
        error = 'Requried'
    }
    return error
}

const validationSchema = Yup.object({
    name: Yup.string().required('Requried'),
    email: Yup.string().email('Invalid email format').required('Requried'),
    channel: Yup.string().required('Requried'),
    // comments: Yup.string().required('Requried'),
    address: Yup.string().required('Requried')
})
const YoutubeForm = () => {
    const [formValues,setFormValues]=useState(null)
    return (
        <Formik initialValues={formValues || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
        // validateOnChange={false}
        // validateOnBlur={false}
        >
            {formik => {
                console.log('formik props',formik)
                return (
                    <Form >
                        <div>
                            <label htmlFor='name'>Name</label>
                            <Field type='text' id='name' name='name' />
                            <ErrorMessage name='name' component={TextError} />
                        </div>
                        <div>
                            <label htmlFor='email'>E-mail</label>
                            <Field type='email' id='email' name='email' placeholder='enter email' />
                            <ErrorMessage name='email' >
                                {
                                    errorMsg => <div className='error'>{errorMsg}</div>
                                }
                            </ErrorMessage>
                        </div>
                        <div>
                            <label htmlFor='channel'>Channel</label>
                            <Field type='text' id='channel' name='channel' />
                            <ErrorMessage name='channel' component={TextError} />
                        </div>
                        <div>
                            <label htmlFor='comments'>Comments</label>
                            <Field as='textarea' id='comments' name='comments' validate={validateComments} />
                            <ErrorMessage name='comments' component={TextError} />
                        </div>
                        <div>
                            <label htmlFor='address'>Address</label>
                            <FastField name='address' >
                                {
                                    props => {
                                        const { field, form, meta } = props
                                        console.log('render props', props)
                                        return (
                                            <div>
                                                <input type='text' id='address' {...field} />
                                                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                            </div>
                                        )
                                    }
                                }
                            </FastField>
                        </div>
                        <div>
                            <label htmlFor='facebook'>Facebook profile</label>
                            <Field type='text' id='facebook' name='social.facebook' />
                        </div>
                        <div>
                            <label htmlFor='twitter'>Twitter</label>
                            <Field type='text' id='twitter' name='social.twitter' />
                        </div>
                        <div>
                            <label htmlFor='primaryph'>Primary Phone Number</label>
                            <Field type='text' id='primaryph' name='phoneNumbers[0]' />
                        </div>
                        <div>
                            <label htmlFor='secondaryph'>Secondary Phone Numbe</label>
                            <Field type='text' id='secondaryph' name='phoneNumbers[1]' />
                        </div>
                        <div>
                            <label htmlFor='phNumbers'>List of phone numbers</label>
                            <FieldArray name='phNumbers'>
                                {
                                    fieldArrayProps => {
                                        //console.log('field array props', fieldArrayProps)
                                        const { push, remove, form } = fieldArrayProps
                                        const { values } = form
                                        const { phNumbers } = values
                                        // console.log('form errors',form.errors)
                                        return <div>
                                            {phNumbers.map((phNumber, index) => (
                                                <div key={index}>
                                                    <Field name={`phNumbers[${index}]`} />
                                                    {index > 0 && (
                                                        <button type='button' onClick={() => remove(index)}>
                                                            {''}
                                                            -{''}</button>
                                                    )}
                                                    <button type='button' onClick={() => push('')}>
                                                        {''}
                                                        +{''}</button>
                                                </div>
                                            ))}
                                        </div>
                                    }
                                }
                            </FieldArray>
                        </div>
                        {/* <button type='button' onClick={()=>formik.validateField('comments')}>validate comments</button>
                        <button type='button' onClick={()=>formik.validateForm()}>validate all</button>
                        <button type='button' onClick={()=>formik.setFieldTouched('comments')}>visit comments</button>
                        <button type='button' onClick={()=>formik.setTouched({
                            name:true,
                            email:true,
                            channel:true,
                            comments:true
                        })}>visit fields</button> */}
                        <button type='reset'>reset</button>
                        <button type='button' onClick={()=>setFormValues(savedValues)}>load saved data</button>
                        <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
                    </Form>
                )
            }}
        </Formik>
    )
}
export default YoutubeForm