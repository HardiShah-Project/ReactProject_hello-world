import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './user.css';
import { addUserService } from "../../../services/UserService";
import TextError from "../../formikdemo/TextError";

const AddUser = () => {
    let history = useHistory();
    const initialValues = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        phone: ""
    };
    const validationSchema = Yup.object({
        firstname: Yup.string().required('FirstName is Reuired'),
        lastname: Yup.string().required('LastName is Reuired'),
        username: Yup.string().required(' UserName is Reuired'),
        email: Yup.string().email('Invalid Email Format').required('Email is Reuired'),
        password: Yup.string().min(6, 'Password is too short - should be 6 chars minimum.').required('Password is Reuired'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'password must match').required(' Confirm Password is Reuired'),
        phone: Yup.number().typeError('Please Enter only Numeric Value').integer("A phone number can't include a decimal point").min(10, "Min 10 digit is Required").required(' PhoneNo. is Required')
    })
    const onSubmit = async values => {
        await addUserService(values)
        history.push("/");
    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5 AddStyle" >
                <h2 className="text-center mb-4">Add A User</h2>
                <Formik initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}>
                    {
                        formik => (
                            <Form>
                                <div >
                                    <label>First Name</label>
                                    <Field name="firstname" type="text" placeholder='Enter Your First Name' />
                                    <ErrorMessage name="firstname" component={TextError} />
                                </div>
                                <div >
                                    <label>Last Name</label>
                                    <Field name="lastname" type="text" placeholder='Enter Your Last Name' />
                                    <ErrorMessage name="lastname" component={TextError} />
                                </div>
                                <div >
                                    <label>User Name</label>
                                    <Field name="username" type="text" placeholder='Enter Your User Name'/>
                                    <ErrorMessage name="username" component={TextError} />
                                </div>
                                <div >
                                    <label>Email </label>
                                    <Field name="email" type="email" placeholder='Enter Your Email Address' />
                                    <ErrorMessage name="email" component={TextError} />
                                </div>
                                <div >
                                    <label>Password</label>
                                    <Field name="password" type="password" placeholder='Enter Your Password' />
                                    <ErrorMessage name="password" component={TextError} />
                                </div>
                                <div >
                                    <label>Confirm Password</label>
                                    <Field name="confirmPassword" type="password" placeholder=' Enter Your Confirm Password'/>
                                    <ErrorMessage name="confirmPassword" component={TextError} />
                                </div>
                                <div >
                                    <label>PhoneNo.</label>
                                    <Field name="phone" type="text" placeholder='Enter Your PhoneNo.' />
                                    <ErrorMessage name="phone" component={TextError} />
                                </div>
                                <button type='submit' disabled={!formik.isValid} className="btn btn-primary btn-block">Add User</button>
                            </Form>
                        )
                    }
                </Formik>

            </div>
        </div>
    )
};
export default AddUser;