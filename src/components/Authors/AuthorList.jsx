import React from 'react';

const AuthorList = ({ authors, onEdit, onDelete }) => (

    <table className="w-full bg-white border border-gray-300 h-full">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="py-2 px-4 border-b border-gray-300">Name</th>
          <th className="py-2 px-4 border-b border-gray-300">Birth Date</th>
          <th className="py-2 px-4 border-b border-gray-300">Biography</th>
          <th className="py-2 px-4 border-b border-gray-300">Actions</th>
        </tr>
      </thead>
      <tbody>
        {authors.length === 0 ? (
          <tr>
            <td colSpan="4" className="text-center py-4">
              No data found
            </td>
          </tr>
        ) : (
          authors.map((author) => (
            <tr key={author.id} className="border-b">
              <td className="py-2 px-4">{author.name}</td>
              <td className="py-2 px-4">{author.birthDate}</td>
              <td className="py-2 px-4">{author.biography}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => onEdit(author)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(author.id)}
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

export default AuthorList;
