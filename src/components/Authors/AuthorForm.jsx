import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CustomInput from '../../shared/CustomInput';
import * as Yup from 'yup';

const AuthorForm = ({ onSubmit, editingAuthor, resetEditing }) => {
  const initialValues = editingAuthor || { name: '', birthDate: '', biography: '' };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    birthDate: Yup.date().required('Required'),
    biography: Yup.string().required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit({ ...values, id: editingAuthor ? editingAuthor.id : undefined });
        resetForm();
        resetEditing();
      }}
      enableReinitialize // Enables form to reinitialize with new data
    >
      <Form className='flex flex-col gap-4 bg-gray-100 p-4 px-6 rounded-xl w-1/3'>
        <CustomInput label="Name" name="name" type="text" />
        <CustomInput label="Date Of Birth" name="dob" type="date" />
        <CustomInput label="Biography" name="biography" type="text" as="textarea" />
        <div className='flex justify-evenly gap-4'>
          <button type="submit" className='bg-green-400 w-full py-1 rounded-md text-black'>{editingAuthor ? 'Edit Author' : 'Add Author'}</button>
          {editingAuthor && <button type="button" className='bg-red-600 w-full py-1 rounded-md text-white' onClick={resetEditing}>Cancel</button>}
        </div>
      </Form>
    </Formik>
  );
};

export default AuthorForm;
