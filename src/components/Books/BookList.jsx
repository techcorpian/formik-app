import React from 'react';

const BookList = ({ books, onEdit, onDelete }) => (
    <table className="w-full bg-white border border-gray-300 h-full">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="py-2 px-4 border-b border-gray-300">Title</th>
          <th className="py-2 px-4 border-b border-gray-300">Author</th>
          <th className="py-2 px-4 border-b border-gray-300">ISBN</th>
          <th className="py-2 px-4 border-b border-gray-300">Published Date</th>
          <th className="py-2 px-4 border-b border-gray-300">Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.length === 0 ? (
          <tr>
            <td colSpan="5" className="text-center py-4">
              No data found
            </td>
          </tr>
        ) : (
          books.map((book) => (
            <tr key={book.id} className="border-b">
              <td className="py-2 px-4">{book.title}</td>
              <td className="py-2 px-4">{book.author}</td>
              <td className="py-2 px-4">{book.isbn}</td>
              <td className="py-2 px-4">{book.pubDate}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => onEdit(book)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(book.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>

);

export default BookList;
