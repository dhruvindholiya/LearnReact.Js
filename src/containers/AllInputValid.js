import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
const SignUpSchema = Yup.object({
    name: Yup
        .string()
        .min(2)
        .matches(/^[A-Za-z ]+$/, "Name must only contain characters.")
        .required(),
    mobile: Yup.number()
        .integer()
        .typeError('Mobile number must be a number')
        .required('Mobile number is required')
        .test('len', 'Mobile number must be exactly 10 digits', val => val && val.toString().length === 10),
    email: Yup
        .string()
        .email()
        .required('Email address is required'),
    password: Yup
        .string()
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .required('Password is required'),
    date: Yup.date()
        .max(new Date(), 'Date of birth cannot be in the future')
        .required('Date of birth is required'),
    time: Yup
        .string()
        .required(),
    country: Yup
        .string()
        .required(),
    ctc: Yup
        .string()
        .required(),
    url: Yup
        .string()
        .url()
        .required(),
    gender: Yup
        .string()
        .required(),
    hobbies: Yup
        .array()
        .test(
            "hobbies",
            "You have to choose minimum 2 hobbies.",
            function (value) {
                if (value.length < 2) {
                    return false;
                } else {
                    return true;
                }
            }
        )
        .required(),
})
function FormValidation(props) {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        validationSchema: SignUpSchema,
        initialValues: { name: '', mobile: '', email: '', password: '', date: '', time: '', country: '', ctc: '', url: '', gender: '', hobbies: '', },
        onSubmit: (values) => {
            console.log(values);
        }
    });
    const [ctcValue, setSalaryValue] = useState(0);
    let ctcPosition = (ctcValue / 25) * 100;
    return (
        <div className='mt-5 p-5'>
            <form className='row g-4' onSubmit={handleSubmit} noValidate>
                <div className='col-6 form_fields position-relative'>
                    <input className='w-100 py-1 px-3' type='text' name='name' id='name' placeholder='Your Name'
                        value={values.name} onChange={handleChange} onBlur={handleBlur} />
                    {errors.name && touched.name ? <span className='error position-absolute top-100 bg-white px-2 py-1 shadow'> {errors.name} </span> : null}
                </div>
                <div className='col-6 form_fields position-relative'>
                    <input className='w-100 py-1 px-3' type='text' name='mobile' id='mobile' placeholder='Mobile Number'
                        value={values.mobile} onChange={handleChange} onBlur={handleBlur} />
                    {errors.mobile && touched.mobile ? <span className='error position-absolute top-100 bg-white px-2 py-1 shadow'>{errors.mobile}</span> : null}
                </div>
                <div className='col-6 form_fields position-relative'>
                    <input className='w-100 py-1 px-3' type='text' name='email' id='email' placeholder='Email address' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                    {errors.email && touched.email ? <span className='error position-absolute top-100 bg-white px-2 py-1 shadow'>{errors.email}</span> : null}
                </div>
                <div className='col-6 form_fields position-relative'>
                    <input className='w-100 py-1 px-3' type='password' name='password' id='password' placeholder='Password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                    {errors.password && touched.password ? <span className='error position-absolute top-100 bg-white px-2 py-1 shadow'>{errors.password}</span> : null}
                </div>
                <div className='col-6 form_fields position-relative'>
                    <input className='w-100 py-1 px-3' type='date' name='date' id='date' value={values.date} onChange={handleChange} onBlur={handleBlur} />
                    {errors.date && touched.date ? <span className='error position-absolute top-100 bg-white px-2 py-1 shadow'>{errors.date}</span> : null}
                </div>
                <div className='col-6 form_fields position-relative'>
                    <input className='w-100 py-1 px-3' type='time' name='time' id='time' value={values.time} onChange={handleChange} onBlur={handleBlur} />
                    {errors.time && touched.time ? <span className='error position-absolute top-100 bg-white px-2 py-1 shadow'>{errors.time}</span> : null}
                </div>
                <div className='col-6 form_fields position-relative'>
                    <p className='mb-2 text-muted'>Where are you from?</p>
                    <select
                        className='w-100 py-1 px-3'
                        id='country'
                        name='country'
                        value={values.country}
                        onChange={handleChange}
                        onBlur={handleBlur}>
                        <option value={null}>--- select country ---</option>
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
                    {errors.country && touched.country ? <span className='error position-absolute top-100 bg-white px-2 py-1 shadow'>{errors.country}</span> : null}
                </div>
                <div className='col-6 form_fields position-relative'>
                    <p className='mb-2 text-muted'>What is your expected CTC?(Lakh)</p>
                    <div className='row align-items-center position-relative'>
                        <span className='w-auto lh-1'>0</span>
                        <input className='py-1 px-3' type='range' name='ctc' id='salary' min='0' max='25' step='0.1' value={values.ctc}
                            onChange={(e) => {
                                handleChange(e);
                                setSalaryValue(e.target.value);
                            }}
                            onBlur={handleBlur} />
                        <span className='w-auto lh-1'>25</span>
                        <span className='salary w-auto px-0' style={{ left: `${ctcPosition}%` }}>{ctcValue} Lakh</span>
                    </div>
                    {errors.ctc && touched.ctc ? <span className='error position-absolute top-100 bg-white px-2 py-1 shadow'>{errors.ctc}</span> : null}
                </div>
                <div className='col-12 form_fields position-relative'>
                    <input className='w-100 py-1 px-3' type='url' name='url' id='url' placeholder="Enter your portfolio's URL" value={values.url} onChange={handleChange} onBlur={handleBlur} />
                    {errors.url && touched.url ? <span className='error position-absolute top-100 bg-white px-2 py-1 shadow'>{errors.url}</span> : null}
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
                <div className='col-12 form_fields text-center'>
                    <input className='w-25 mt-3 btn btn-primary text-uppercase' type='submit' id='submit' value='Submit' />
                </div>
            </form >
        </div>
    );
}

export default FormValidation;