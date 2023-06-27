import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const SignUpSchema = Yup.object({
    name: Yup
        .string()
        .min(2)
        .matches(/^[A-Za-z ]+$/, "Name must only contain characters.")
        .test(
            "name",
            "Please enter your full name",
            function (value) {
                let nameWords = value.split(" ");
                if (nameWords.length === 3) {
                    return true;
                } else {
                    return false;
                }
            }
        )
        .required(),
    email: Yup
        .string()
        .email()
        .required(),
    pass: Yup
        .string()
        .matches(
            /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must pass have, Numbers , alphabets, and Special Character")
        .required(),
    confirmPass: Yup
        .string()
        .test("confirmPass", "Password and confirm password does not match",
            function (value) {
                if (this.parent.pass === value) {
                    return true
                } else {
                    return false
                }
            })
        .required("Confirm password is a required field"),
    mobile: Yup
        .string()
        .matches(/^\d{10}$/, 'Mobile number must have 10 digit only.')
        .required(),
    country: Yup
        .string()
        .required(),
    age: Yup
        .number()
        .min(0)
        .max(150)
        .required(),
    dob: Yup.date()
        .max(new Date(), 'Date of birth must be a current date or past date')
        .required('Date of birth is required'),
    address: Yup
        .string()
        .test(
            "address",
            "Address must have maximum 5 words",
            function (value) {
                let messageWords = value.split(" ");

                if (messageWords.length > 5) {
                    return false;
                } else {
                    return true;
                }
            }
        )
        .required("Please enter your address."),
    gender: Yup
        .string()
        .required(),
    hobbies: Yup
        .array()
        .min(2, 'You must have to choose 2 hobbies.')
        .required(),
    terms: Yup
        .boolean()
        .test(
            "terms",
            "Terms & Conditions is a required field",
            function (value) {
                return value === true
            }
        )
        .required('Terms & Conditions is a required field')
})

const initialValues = {
    name: '',
    email: '',
    pass: '',
    confirmPass: '',
    mobile: '',
    age: '',
    dob: '',
    country: '',
    address: '',
    gender: '',
    hobbies: '',
    terms: false,
}

function FormValidation() {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        validationSchema: SignUpSchema,
        initialValues: initialValues,
        onSubmit: (values) => {
            console.log(values);
        }
    });
    return (
        <div className='bg-light shadow rounded mt-5 p-5'>
            <h3 className='text-center mb-5'>Form Validation with "Formik" & "Yup"</h3>
            <form className='row justify-content-center g-4' onSubmit={handleSubmit} noValidate>
                <div className='col-6 form_fields position-relative'>
                    <input
                        className='w-100 py-1 px-3'
                        type='text'
                        name='name'
                        id='fName'
                        placeholder='Full name'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.name && touched.name ?
                            <span className='error position-absolute top-100 bg-light px-2 py-1 shadow-sm'> {errors.name} </span>
                            : null
                    }
                </div>
                <div className='col-6 form_fields position-relative'>
                    <input
                        className='w-100 py-1 px-3'
                        type='text'
                        name='email'
                        id='email'
                        placeholder='Email address'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.email && touched.email ?
                            <span className='error position-absolute top-100 bg-light px-2 py-1 shadow-sm'>{errors.email}</span>
                            : null
                    }
                </div>
                <div className='col-6 form_fields position-relative'>
                    <input
                        autoComplete='off'
                        className='w-100 py-1 px-3'
                        type='text'
                        name='pass'
                        id='pass'
                        placeholder='Password'
                        value={values.pass}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.pass && touched.pass ?
                            <span className='error position-absolute top-100 bg-light px-2 py-1 shadow-sm'>{errors.pass}</span>
                            : null
                    }
                </div>
                <div className='col-6 form_fields position-relative'>
                    <input
                        autoComplete='off'
                        className='w-100 py-1 px-3'
                        type='text'
                        name='confirmPass'
                        id='confirmPass'
                        placeholder='Confirm password'
                        value={values.confirmPass}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.confirmPass && touched.confirmPass ?
                            <span className='error position-absolute top-100 bg-light px-2 py-1 shadow-sm'>{errors.confirmPass}</span>
                            : null
                    }
                </div>
                <div className='col-6 form_fields position-relative'>
                    <input
                        className='w-100 py-1 px-3'
                        type='text'
                        name='mobile'
                        id='mobile'
                        placeholder='Mobile Number'
                        value={values.mobile}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.mobile && touched.mobile ?
                            <span className='error position-absolute top-100 bg-light px-2 py-1 shadow-sm'>{errors.mobile}</span>
                            : null
                    }
                </div>
                <div className='col-6 form_fields position-relative'>
                    <span className='down_icon'></span>
                    <select
                        className='w-100 py-1 px-3'
                        id='country'
                        name='country'
                        value={values.country}
                        onChange={handleChange}
                        onBlur={handleBlur}>
                        <option value={null}>Your country?</option>
                        <option value='india'>India</option>
                        <option value='america'>America</option>
                        <option value='englend'>England</option>
                        <option value='canada'>Canada</option>
                        <option value='autralia'>Australia</option>
                        <option value='japan'>Japan</option>
                        <option value='russia'>Russia</option>
                        <option value='china'>China</option>
                        <option value='kuwait'>kuwait</option>
                        <option value='other'>Other.....</option>
                    </select>
                    {
                        errors.country && touched.country ?
                            <span className='error position-absolute top-100 bg-light px-2 py-1 shadow-sm'>{errors.country}</span>
                            : null
                    }
                </div>
                <div className='col-6 form_fields position-relative'>
                    <input
                        className='w-100 py-1 px-3'
                        type='text'
                        name='age'
                        id='age'
                        placeholder='Your age'
                        value={values.age}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.age && touched.age ?
                            <span className='error position-absolute top-100 bg-light px-2 py-1 shadow-sm'>{errors.age}</span>
                            : null
                    }
                </div>
                <div className='col-6 form_fields position-relative'>
                    <input
                        className='w-100 py-1 px-3'
                        type='date'
                        name='dob'
                        id='dob'
                        value={values.dob}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.dob && touched.dob ?
                            <span className='error position-absolute top-100 bg-light px-2 py-1 shadow-sm'>{errors.dob}</span>
                            : null
                    }
                </div>
                <div className='col-12 form_fields position-relative'>
                    <textarea
                        className='w-100 h-100 py-1 px-3'
                        name='address'
                        id='address'
                        placeholder='Your Address'
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.address && touched.address ?
                            <span className='error position-absolute top-100 bg-light px-2 py-1 shadow-sm'>{errors.address}</span>
                            : null
                    }
                </div>
                <div className='col-6 form_fields position-relative'>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='mb-2 text-muted'>Choose your gender: </p>
                        </div>
                        <div className='col-auto'>
                            <input
                                type='radio'
                                name='gender'
                                value='male'
                                id='male'
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <label className='ms-2'>Male</label>
                        </div>
                        <div className='col-auto'>
                            <input
                                type='radio'
                                name='gender'
                                value='female'
                                id='female'
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <label className='ms-2'>Female</label>
                        </div>
                        <div className='col-auto'>
                            <input
                                type='radio'
                                name='gender'
                                value='other'
                                id='other'
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <label className='ms-2'>Other</label>
                        </div>
                    </div>
                    {
                        errors.gender && touched.gender ?
                            <span className='error position-absolute top-100 bg-light px-2 py-1 shadow-sm'>{errors.gender}</span>
                            : null
                    }

                </div>
                <div className='col-6 form_fields position-relative'>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='mb-2 text-muted'>Select your hobbies:</p>
                        </div>
                        <div className='col-auto'>
                            <input
                                type='checkbox'
                                name='hobbies'
                                value='travel'
                                id='travel'
                                onChange={handleChange}
                            />
                            <label className='ms-2'>travel</label>
                        </div>
                        <div className='col-auto'>
                            <input
                                type='checkbox'
                                name='hobbies'
                                value='sport'
                                id='sport'
                                onChange={handleChange}
                            />
                            <label className='ms-2'>sport</label>
                        </div>
                        <div className='col-auto'>
                            <input
                                type='checkbox'
                                name='hobbies'
                                value='music'
                                id='music'
                                onChange={handleChange}
                            />
                            <label className='ms-2'>Music</label>
                        </div>
                    </div>
                    {
                        (errors.hobbies && touched.hobbies) ?
                            <span className='error position-absolute top-100 bg-light px-2 py-1 shadow-sm'>{errors.hobbies}</span>
                            : null
                    }
                </div>
                <div className="col-6 form_fields position-relative">
                    <div className="row justify-content-center gx-2">
                        <div className='col-auto'>
                            <input
                                className="form-check-input border-dark"
                                type="checkbox"
                                name="terms"
                                id="terms"
                                value="terms"
                                onChange={handleChange}
                            />
                        </div>
                        <div className='col-7 position-relative'>
                            <p className='text-muted m-0'>Terms & Conditions</p>
                            {
                                (errors.terms && touched.terms) ?
                                    <span className='error position-absolute top-100 bg-light px-2 py-1 shadow-sm'>{errors.terms}</span>
                                    : null
                            }
                        </div>
                    </div>
                </div>
                <div className='col-12 form_fields text-center'>
                    <input
                        className='w-25 mt-3 btn btn-dark text-uppercase'
                        type='submit'
                        id='submit'
                        value='Submit'
                    />
                </div>
            </form >
        </div>
    );
}

export default FormValidation;