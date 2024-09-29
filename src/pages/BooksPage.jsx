import React, { useState } from 'react';
import BookForm from '../components/Books/BookForm';
import BookList from '../components/Books/BookList';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  
  const [editingBook, setEditingBook] = useState(null);

  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, id: books.length + 1 }]);
  };

  const editBook = (updatedBook) => {
    setBooks(books.map(book => (book.id === updatedBook.id ? updatedBook : book)));
    setEditingBook(null); // Reset the editing state
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className='p-4 px-9'>
      <h1 className='text-5xl pb-6'>Manage Books</h1>
      <div className='flex md:flex-row flex-col gap-8'>
      <BookForm 
        onSubmit={editingBook ? editBook : addBook} 
        editingBook={editingBook} 
        resetEditing={() => setEditingBook(null)} 
      />
      <BookList books={books} onEdit={setEditingBook} onDelete={deleteBook} />
      </div>
    </div>
  );
};

export default BooksPage;
