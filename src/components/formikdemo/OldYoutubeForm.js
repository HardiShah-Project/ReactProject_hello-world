import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
    name: '',
    email: '',
    channel: ''
}
const onSubmit = values => {
    console.log('Form data', values)
}
// const validate = values => {
//     let errors = {}
//     if (!values.name) {
//         errors.name = 'Requried'
//     }
//     if (!values.email) {
//         errors.email = 'Required'
//     }
//     else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email format'
//     }
//     if (!values.channel) {
//         errors.channel = 'Required'
//     }
//     return errors
// }
const validationSchema = Yup.object({
    name: Yup.string().required('Requried!'),
    email: Yup.string().email('Invalid email format').required('Requried'),
    channel: Yup.string().required('Requried')
})
const OldYoutubeForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    console.log('Visited fields', formik.touched)
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name'
                    onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} />
                {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}

                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' name='email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
                {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}

                <label htmlFor='channel'>Channel</label>
                <input type='text' id='channel' name='channel' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.channel} />
                {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}

                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}
export default OldYoutubeForm