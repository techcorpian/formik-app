import React from 'react'
import { Field, ErrorMessage } from 'formik';

const CustomInput = ({ label, name, type, as}) => {
    return (
        <div className='flex w-full justify-between items-center'>
            <label htmlFor={name}>{label}</label>
            <Field name={name} type={type} className='border py-1 px-2' as={as}/>
            <ErrorMessage name={name} component="div" />
        </div>
    )
}

export default CustomInput