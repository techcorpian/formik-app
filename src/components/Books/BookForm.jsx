import React from 'react';
import { Formik, Form } from 'formik';
import CustomInput from '../../shared/CustomInput';
import * as Yup from 'yup';

const BookForm = ({ onSubmit, editingBook, resetEditing }) => {
  const initialValues = editingBook || { title: '', author: '', isbn: '', pubDate: '' };

  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    author: Yup.string().required('Required'),
    isbn: Yup.string().required('Required'),
    pubDate: Yup.date().required('Required')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit({ ...values, id: editingBook ? editingBook.id : undefined });
        resetForm();
        resetEditing();
      }}
      enableReinitialize // This makes sure the form resets with new props
    >
      <Form className='flex flex-col gap-4 bg-gray-100 p-4 px-6 rounded-xl w-1/3'>
        <CustomInput label="Title" name="title" type="text"/>
        <CustomInput label="Author" name="author" type="text"/>
        <CustomInput label="ISBN" name="isbn" type="text"/>
        <CustomInput label="Publication Date" name="pubDate" type="date"/>
        <div className='flex justify-evenly gap-4'>
        <button type="submit" className='bg-green-400 w-full py-1 rounded-md text-black'>{editingBook ? 'Edit Book' : 'Add Book'}</button>
        {editingBook && <button type="button" className='bg-red-600 w-full py-1 rounded-md text-white' onClick={resetEditing}>Cancel</button>}
        </div>
      </Form>
    </Formik>
  );
};

export default BookForm;
