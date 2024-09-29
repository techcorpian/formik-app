import React, { useState } from 'react';
import AuthorForm from '../components/Authors/AuthorForm';
import AuthorList from '../components/Authors/AuthorList';

const AuthorsPage = () => {
  const [authors, setAuthors] = useState([]);

  const [editingAuthor, setEditingAuthor] = useState(null);

  const addAuthor = (newAuthor) => {
    setAuthors([...authors, { ...newAuthor, id: authors.length + 1 }]);
  };

  const editAuthor = (updatedAuthor) => {
    setAuthors(authors.map(author => (author.id === updatedAuthor.id ? updatedAuthor : author)));
    setEditingAuthor(null); // Reset the editing state
  };

  const deleteAuthor = (id) => {
    setAuthors(authors.filter(author => author.id !== id));
  };

  return (
    <div className='p-4 px-9'>
      <h1 className='text-5xl pb-6'>Manage Authors</h1>
      <div className='flex md:flex-row flex-col gap-8'>
      <AuthorForm 
        onSubmit={editingAuthor ? editAuthor : addAuthor} 
        editingAuthor={editingAuthor} 
        resetEditing={() => setEditingAuthor(null)} 
      />
      <AuthorList authors={authors} onEdit={setEditingAuthor} onDelete={deleteAuthor} />
      </div>
    </div>
  );
};

export default AuthorsPage;
